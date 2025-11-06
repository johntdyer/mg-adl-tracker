# MG‑ADL Tracker (Web App + Google Form Integration)

A tiny web app for recording **Myasthenia Gravis Activities of Daily Living (MG‑ADL)** scores and sending them to a **Google Form** for easy charting in Google Sheets.

## Features
- 8 MG‑ADL items (0–3 each) with helper text
- Auto-computed total (0–24)
- Optional timestamp (now or custom) and notes
- Posts responses to your Google Form for longitudinal plots
- Saves last entry in localStorage for convenience

## Quick Start (no build — just open a file)
1. Create a Google Form with the following fields (Short answer unless noted):
   - Timestamp (optional)
   - MG‑ADL: Talking
   - MG‑ADL: Chewing
   - MG‑ADL: Swallowing
   - MG‑ADL: Breathing
   - MG‑ADL: Brushing teeth/Combing hair
   - MG‑ADL: Rising from a chair
   - MG‑ADL: Double vision
   - MG‑ADL: Eyelid droop
   - MG‑ADL Total
   - Notes (Paragraph, optional)

2. Submit a test response to the live form. In your browser DevTools (Network tab), copy:
   - The **form action** URL: `https://docs.google.com/forms/d/e/XXXX/formResponse`
   - Each input name attribute (e.g., `entry.123456789`)

3. Open `index.html` in a text editor and set:
   - `const GOOGLE_FORM_ACTION = "..."`
   - The `ENTRY_IDS` mapping with your `entry.xxxxx` values

4. Double‑click **index.html** to open it in your browser and start recording entries.

> ⚠️ Google Forms does not send CORS headers. This app uses `fetch(..., { mode: "no-cors" })` which **submits** successfully but you won't get a success JSON back. Check the linked Sheet to confirm entries.

## Optional: Host on GitHub Pages
1. Push this repo to GitHub.
2. In **Settings → Pages**, set:
   - Source: `Deploy from a branch`
   - Branch: `main` and folder `/ (root)`
3. Your app will be live at `https://<your-username>.github.io/mg-adl-tracker/`

## Notes
- This is **not** a medical device. For concerns, contact your clinician.
- MG‑ADL is a patient‑reported outcome; the text herein is a convenience summary.
