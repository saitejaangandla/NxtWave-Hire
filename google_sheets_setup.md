# Google Sheets Apps Script Setup

Below is the complete Google Apps Script code to handle submissions from the Hiring Form, including uploading job description documents to Google Drive and linking them in your sheet.

## Apps Script Code (`Code.gs`)

Copy and paste the following code into your Google Apps Script editor:

```javascript
function doPost(e) {
  var targetEmail = "amrutha.g@nxtwave.tech, saitejaanagandla56@gmail.com"; // Set your target email address here
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1") || ss.getActiveSheet(); 
  var logSheet = ss.getSheetByName("Logs");
  var timestamp = new Date();

  try {
    var data = JSON.parse(e.postData.contents);

    // 1. Process File Upload (if provided)
    var fileUrl = "";
    if (data.fileData && data.fileName) {
      var folderName = "Hiring Attachments";
      var folder;
      var folders = DriveApp.getFoldersByName(folderName);
      
      if (folders.hasNext()) {
        folder = folders.next();
      } else {
        folder = DriveApp.createFolder(folderName);
      }

      // Clean base64 string if data URL scheme is passed (e.g. "data:application/pdf;base64,...")
      var cleanBase64 = data.fileData;
      if (cleanBase64.indexOf("base64,") !== -1) {
        cleanBase64 = cleanBase64.split("base64,")[1];
      }

      // Decode base64 and create blob
      var fileBytes = Utilities.base64Decode(cleanBase64);
      var blob = Utilities.newBlob(fileBytes, data.fileMime || 'application/octet-stream', data.fileName);
      var file = folder.createFile(blob);

      // Set access to Anyone with link
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      fileUrl = file.getUrl();
    }

    // 2. Initialize sheet headers if completely empty
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

    // 3. Map values based on Column Headers
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var newRow = [];

    // Map keys to headers dynamically using flexible substring matching
    for (var i = 0; i < headers.length; i++) {
      var header = headers[i].toString().trim().toLowerCase();
      var cellValue = "";

      if (header.indexOf("timestamp") !== -1 || header.indexOf("date") !== -1 || header.indexOf("time") !== -1) {
        cellValue = data.createdAt || timestamp.toISOString();
      } else if (header.indexOf("form type") !== -1) {
        cellValue = data.formType || "hiring";
      } else if (header.indexOf("company") !== -1) {
        cellValue = data.company || "";
      } else if (header.indexOf("contact") !== -1 || header.indexOf("person") !== -1 || header.indexOf("name") !== -1) {
        // Ensure "contact" or "name" matches contact person, not company name
        cellValue = data.contact || "";
      } else if (header.indexOf("email") !== -1 || header.indexOf("mail") !== -1) {
        cellValue = data.email || "";
      } else if (header.indexOf("phone") !== -1 || header.indexOf("mobile") !== -1 || header.indexOf("tel") !== -1) {
        cellValue = data.phone || "";
      } else if (header.indexOf("role") !== -1 || header.indexOf("title") !== -1 || header.indexOf("position") !== -1) {
        cellValue = data.role || "";
      } else if (header.indexOf("experience") !== -1 || header.indexOf("exp") !== -1) {
        cellValue = data.experience || "";
      } else if (header.indexOf("skill") !== -1) {
        cellValue = data.skills || "";
      } else if (header.indexOf("urgency") !== -1 || header.indexOf("urgent") !== -1) {
        cellValue = data.urgency || "";
      } else if (header.indexOf("attachment") !== -1 || header.indexOf("file") !== -1 || header.indexOf("link") !== -1 || header.indexOf("jd") !== -1 || header.indexOf("resume") !== -1 || header.indexOf("job description") !== -1) {
        cellValue = fileUrl;
      } else if (header.indexOf("note") !== -1 || header.indexOf("additional") !== -1 || header.indexOf("comment") !== -1) {
        cellValue = data.notes || "";
      } else {
        // Fallback to exact key match
        cellValue = data[headers[i]] || data[headers[i].toString().trim()] || data[header] || "";
      }
      newRow.push(cellValue);
    }

    // 4. Find first truly empty row to bypass formatted gridline rows
    var rowNum = 1;
    var values = sheet.getDataRange().getValues();
    var foundEmptyRow = false;
    for (var r = 0; r < values.length; r++) {
      var hasContent = false;
      for (var c = 0; c < Math.min(values[r].length, 5); c++) {
        if (values[r][c].toString().trim() !== "") {
          hasContent = true;
          break;
        }
      }
      if (!hasContent) {
        rowNum = r + 1;
        foundEmptyRow = true;
        break;
      }
    }
    if (!foundEmptyRow) {
      rowNum = values.length + 1;
    }

    // Write Data to Spreadsheet
    sheet.getRange(rowNum, 1, 1, newRow.length).setValues([newRow]);

    // 5. Send Notification Email
    GmailApp.sendEmail(
      targetEmail,
      "New Form Submission: " + (data.company || "Hire Form"),
      "You received a new submission:\n\n" +
      "Company: " + (data.company || "") + "\n" +
      "Contact Person: " + (data.contact || "") + "\n" +
      "Email: " + (data.email || "") + "\n" +
      "Phone: " + (data.phone || "") + "\n" +
      "Role: " + (data.role || "") + "\n" +
      "Experience: " + (data.experience || "") + "\n" +
      "Skills: " + (data.skills || "") + "\n" +
      "Urgency: " + (data.urgency || "") + "\n" +
      "Attachment Link: " + (fileUrl || "No attachment provided") + "\n" +
      "Notes: " + (data.notes || "")
    );

    // 6. Log success if log sheet exists
    if (logSheet) {
      logSheet.appendRow([timestamp, "SUCCESS", "Submission processed & email sent to " + targetEmail, fileUrl]);
    }

    return ContentService.createTextOutput(JSON.stringify({ result: "success", fileUrl: fileUrl }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    if (logSheet) {
      logSheet.appendRow([timestamp, "ERROR", error.toString(), error.stack || ""]);
    }
    return ContentService.createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Dummy function to easily trigger Google Drive & Gmail authorization
function triggerAuthorization() {
  DriveApp.getRootFolder();
  GmailApp.sendEmail(Session.getActiveUser().getEmail(), "Auth Test", "Authorization test successful.");
}
```

## Setup Instructions

1. **Open Google Sheets**: Create or open the spreadsheet you want to store submissions in.
2. **Open Apps Script**: Go to the top menu and select **Extensions** > **Apps Script**.
3. **Paste the Code**: Delete any default code inside the editor and paste the `Code.gs` content from above.
4. **Save**: Click the **Save** (disk) icon in the toolbar.
5. **Grant Drive & Gmail Permissions (CRITICAL)**:
   - In the toolbar at the top of the editor, find the dropdown menu next to "Run" and "Debug".
   - Select **`triggerAuthorization`** from that dropdown menu.
   - Click the **Run** button (the play button icon).
   - An **Authorization Required** popup will appear. Click **Review permissions**.
   - Select your Google account.
   - Click **Advanced** at the bottom, and then click **Go to Untitled project (unsafe)** (or your project's name).
   - Click **Allow**.
6. **Deploy as Web App**:
   - Click the **Deploy** button at the top right and select **New deployment**.
   - Under *Select type*, click the gear icon and select **Web app**.
   - Configure the deployment settings:
     - **Description**: Enter a name (e.g., `Hiring Form Web App v2`).
     - **Execute as**: Select **Me** (your-email@gmail.com).
     - **Who has access**: Select **Anyone**.
   - Click **Deploy**.
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
