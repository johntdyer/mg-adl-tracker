// == Google Apps Script (Web App) for appending MG-ADL rows to Google Sheets ==
// Setup:
// 1) Create or choose a Google Sheet and note its ID (spreadsheet URL between "/d/" and "/edit").
// 2) Make sure the target sheet tab exists (default: "Responses").
// 3) Optional: edit COLUMN_ORDER if you change the data payload.
// 4) Deploy → New deployment → Web app, access: Anyone (no sign-in required).
// 5) Paste the deployment URL into index.html under “Apps Script web app URL”.

const SHEET_ID = "1VVJ_O9m2WYFiMLFNmJ5Qy3ROHWc5S_QpNQr6B-OSHeI"; // e.g., "1AbCDefGhijkLMNOPqrsTuvwxyZ1234567890"
const SHEET_NAME = "Responses";

// Columns will be appended in this order. Make sure the sheet header row matches.
const COLUMN_ORDER = [
  "timestamp",
  "total",
  "talking",
  "chewing",
  "swallowing",
  "breathing",
  "grooming",
  "chair",
  "diplopia",
  "ptosis",
  "sleep",
  "notes",
];

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) throw new Error("Missing POST body.");
    const data = JSON.parse(e.postData.contents);

    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    if (!sheet) throw new Error(`Sheet tab "${SHEET_NAME}" not found.`);

    const row = COLUMN_ORDER.map((key) => {
      if (!(key in data)) return "";
      if (key === "timestamp") {
        const ts = data[key];
        const date = new Date(ts);
        return isNaN(date.getTime()) ? String(ts) : date;
      }
      return data[key];
    });

    sheet.appendRow(row);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
