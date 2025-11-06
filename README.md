# MG-ADL Tracker - Google Sheets via Apps Script

This repo ships a zero-build, single-file web app for recording **MG-ADL** scores (0=3 per item; total 0=24). Entries are saved locally in the browser and can optionally be synced to a Google Sheet through a lightweight Google Apps Script web app.

## Configure Google Sheets syncing
1. Create (or choose) a Google Sheet. Copy the spreadsheet ID (the value between `/d/` and `/edit` in the URL) and, if desired, rename the target tab; the default tab name is `Responses`.
2. Open `apps-script/Code.gs` and paste the Sheet ID into `SHEET_ID`. Adjust `SHEET_NAME` or `COLUMN_ORDER` if you use a different tab or column layout.
3. In Google Apps Script: **Deploy -> New deployment -> Web app**, choose **Anyone** for access, and copy the deployment URL.
4. Open `index.html` in a browser, paste the web app URL into the "Apps Script web app URL" field, and enable "Send to Google Sheets". The URL is cached in `localStorage` for future sessions.

> Each submission sends JSON `{ timestamp, total, talking, chewing, swallowing, breathing, grooming, chair, diplopia, ptosis, notes }`. The Apps Script appends a row in the order defined by `COLUMN_ORDER`, converting the timestamp into a proper date/time cell when possible.

## MG-ADL items captured
- Talking, Chewing, Swallowing, Breathing
- Brushing teeth/Combing hair, Rising from a chair
- Double vision, Eyelid droop

## Local storage
- Latest entry is stored under `mgadl:last` to make it easy to review your most recent answers.
- The Apps Script deployment URL is cached under `mgadl:webAppUrl`.

## Disclaimer
This tool is for personal tracking only and is not a medical device. Consult your clinician for medical advice.
