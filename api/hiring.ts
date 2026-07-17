import type { VercelRequest, VercelResponse } from '@vercel/node'
import { MongoClient } from 'mongodb'
import dns from 'node:dns'

let client: MongoClient | null = null
let dbPromise: Promise<any> | null = null

async function getDb(uri: string) {
  if (!client) {
    try {
      dns.setServers(['8.8.8.8', '1.1.1.1'])
    } catch (dnsErr) {
      console.warn('Failed to set custom DNS servers:', dnsErr)
    }
    client = new MongoClient(uri)
    dbPromise = client.connect().then(() => client.db())
  }
  return dbPromise
}

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
    const uri = process.env.MONGODB_URI
    if (!uri) {
      res.status(500).json({ error: 'MONGODB_URI env variable not configured' })
      return
    }

    const db = await getDb(uri)
    const hiring = db.collection('hiring_requirements')
    const result = await hiring.insertOne({
      ...req.body,
      createdAt: new Date()
    })
    res.status(201).json({ success: true, id: result.insertedId })
  } catch (err: any) {
    res.status(500).json({ error: 'Server error', details: err.message })
  }
}
