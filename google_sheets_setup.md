# Google Sheets Apps Script Setup

Below is the complete Google Apps Script code to handle submissions from the Hiring Form, including uploading job description documents to Google Drive and linking them in your sheet.

## Apps Script Code (`Code.gs`)

Copy and paste the following code into your Google Apps Script editor:

```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // 1. Process File Upload (if provided)
    var fileUrl = "";
    if (data.fileData && data.fileName) {
      // Find or create "Hiring Attachments" folder in Google Drive
      var folderName = "Hiring Attachments";
      var folder;
      var folders = DriveApp.getFoldersByName(folderName);
      if (folders.hasNext()) {
        folder = folders.next();
      } else {
        folder = DriveApp.createFolder(folderName);
      }
      
      // Decode the raw base64 string
      var fileBytes = Utilities.base64Decode(data.fileData);
      var blob = Utilities.newBlob(fileBytes, data.fileMime || 'application/octet-stream', data.fileName);
      var file = folder.createFile(blob);
      
      // Allow anyone with the link to view the file
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      fileUrl = file.getUrl();
    }
    
    // 2. Initialize sheet headers if empty
    if (sheet.getLastColumn() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Form Type",
        "Company Name",
        "Contact Person",
        "Work Email",
        "Phone",
        "Role Title",
        "Experience Required",
        "Required Skills",
        "Hiring Urgency",
        "Attachment Link",
        "Additional Notes"
      ]);
    }
    
    // Get headers from first row
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var newRow = [];
    
    // Map keys to headers dynamically (case-insensitive)
    for (var i = 0; i < headers.length; i++) {
      var header = headers[i].toString().trim().toLowerCase();
      var cellValue = "";
      
      switch (header) {
        case "timestamp":
        case "date":
        case "created at":
          cellValue = data.createdAt || new Date().toISOString();
          break;
        case "form type":
          cellValue = data.formType || "hiring";
          break;
        case "company name":
        case "company":
          cellValue = data.company || "";
          break;
        case "contact person":
        case "contact":
          cellValue = data.contact || "";
          break;
        case "work email":
        case "email":
          cellValue = data.email || "";
          break;
        case "phone":
        case "mobile":
        case "tel":
          cellValue = data.phone || "";
          break;
        case "role title":
        case "role":
          cellValue = data.role || "";
          break;
        case "experience required":
        case "experience":
          cellValue = data.experience || "";
          break;
        case "required skills":
        case "skills":
          cellValue = data.skills || "";
          break;
        case "hiring urgency":
        case "urgency":
          cellValue = data.urgency || "";
          break;
        case "attachment link":
        case "attachment":
        case "file url":
        case "resume":
        case "job description":
        case "jd":
          cellValue = fileUrl;
          break;
        case "additional notes":
        case "notes":
          cellValue = data.notes || "";
          break;
        default:
          // Check for any other fields sent by the client that might match the header
          cellValue = data[headers[i]] || data[header] || "";
      }
      newRow.push(cellValue);
    }
    
    sheet.appendRow(newRow);
    
    return ContentService.createTextOutput(JSON.stringify({ "result": "success", "fileUrl": fileUrl }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Setup Instructions

1. **Open Google Sheets**: Create or open the spreadsheet you want to store submissions in.
2. **Open Apps Script**: Go to the top menu and select **Extensions** > **Apps Script**.
3. **Paste the Code**: Delete any default code inside the editor and paste the `Code.gs` content from above.
4. **Save**: Click the **Save** (disk) icon in the toolbar.
5. **Deploy**:
   - Click the **Deploy** button at the top right and select **New deployment**.
   - Under *Select type*, click the gear icon and select **Web app**.
   - Configure the deployment settings:
     - **Description**: Enter a name (e.g., `Hiring Form Web App`).
     - **Execute as**: Select **Me** (your-email@gmail.com).
     - **Who has access**: Select **Anyone**.
   - Click **Deploy**.
6. **Authorize Permissions**:
   - Apps Script will prompt you to authorize permissions. Click **Authorize access**, log in with your Google account, click **Advanced** -> **Go to Untitled project (unsafe)** (or your project's name), and click **Allow**.
7. **Copy Web App URL**: Copy the **Web URL** provided at the end of the deployment wizard (it will end in `/exec`).
8. **Update `.env`**:
   - Open your project's `.env` file in the root directory.
   - Replace the value of `GOOGLE_SHEETS_URL` and `VITE_GOOGLE_SHEET_URL` with your new Web App URL:
     ```env
     GOOGLE_SHEETS_URL="https://script.google.com/macros/s/.../exec"
     VITE_GOOGLE_SHEET_URL="https://script.google.com/macros/s/.../exec"
     ```
9. **Redeploy Project**: 
   - Deploy your project to Vercel so the new environment variables are live:
     ```bash
     npx vercel --prod --yes
     ```
