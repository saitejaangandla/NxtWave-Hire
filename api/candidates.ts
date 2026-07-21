import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  try {
    const sheetsUrl = process.env.GOOGLE_SHEETS_URL || process.env.VITE_GOOGLE_SHEET_URL
    if (!sheetsUrl) {
      res.status(500).json({ error: 'GOOGLE_SHEETS_URL environment variable is not configured' })
      return
    }

    const payload = {
      ...req.body,
      formType: 'candidate',
      createdAt: new Date().toISOString()
    }

    const sheetsRes = await fetch(sheetsUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    if (sheetsRes.ok) {
      res.status(201).json({ success: true, message: 'Saved to Google Sheets' })
    } else {
      res.status(500).json({ error: 'Google Sheets endpoint returned an error' })
    }
  } catch (err: any) {
    res.status(500).json({ error: 'Server error', details: err.message })
  }
}

