# US Holidays & Amazon Events Calendar

A calendar tool displaying US federal holidays, Amazon sales events, and AWS conferences with US and IST timezone support.

## Features

- **US Federal Holidays** - All 11 US federal holidays
- **Amazon Sales & Festive Offers** - Prime Day, Black Friday, Cyber Monday, Valentine's Day, Diwali, and more
- **AWS Conferences** - re:Invent, Summits, Dev Days, and more
- **Dual Timezone** - Toggle between US (EST) and India (IST) time
- **Google Calendar Integration** - iCal subscription for automatic sync

## Events Included

### US Federal Holidays (2026)
- New Year's Day
- Martin Luther King Jr. Day
- Presidents' Day
- Memorial Day
- Juneteenth
- Independence Day
- Labor Day
- Columbus Day
- Veterans Day
- Thanksgiving Day
- Christmas Day

### Amazon Sales Events
- New Year Sale
- Martin Luther King Jr. Day Sale
- Presidents' Day Sale
- Valentine's Day Sale
- Spring Deals
- Earth Day Sale
- Mother's Day Sale
- Memorial Day Sale
- Father's Day Sale
- **Prime Day**
- Back to School Sale
- Prime Early Access Sale
- Labor Day Sale
- Columbus Day Sale
- Halloween Sale
- Diwali Sale
- Veterans Day Sale
- **Black Friday**
- **Cyber Monday**
- Cyber Week
- Holiday Deal Days
- Day After Christmas Sale
- And more...

### Amazon India Sales
- Great Indian Festival
- Prime Day India
- Republic Day Sale
- Summer Sale
- Independence Day Sale
- Diwali Bonanza
- And more...

### AWS Events
- AWS re:Invent
- AWS Summit Washington D.C.
- AWS Summit San Francisco
- AWS Summit Chicago
- AWS Summit New York
- AWS Summit Atlanta
- AWS re:Invent Europe
- AWS Dev Day
- AWS Startup Day
- AWS Machine Learning Summit
- AWS Financial Services Day
- AWS Health and AI Day
- AWS Gaming Day
- AWS Media & Entertainment Day
- And more...

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit http://localhost:5173

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Deploy via GitHub

1. Push your code to a GitHub repository
2. Go to https://vercel.com and sign up
3. Click "Add New Project" and select your repository
4. Deploy with default settings

---

# Google Calendar Integration Steps

## Method 1: Subscribe to iCal URL (Recommended)

After deploying to Vercel, you'll get a URL like:
```
https://your-app.vercel.app/api/calendar
```

### Steps to Add to Google Calendar:

1. **Get your iCal URL:**
   - Local: `http://localhost:3000/calendar.ics`
   - Deployed: `https://your-app.vercel.app/api/calendar`

2. **Open Google Calendar:**
   - Go to https://calendar.google.com

3. **Add Calendar by URL:**
   - On the left sidebar, click the `+` button next to "Add calendar"
   - Select "From URL"
   - Paste your iCal URL
   - Click "Add calendar"

4. **Verify:**
   - The calendar will appear in your "Other calendars" section
   - Events will sync automatically!

## Available iCal Feeds

- Current Year: `/api/calendar` (2026)
- 2025: `/api/calendar-2025`
- 2027: `/api/calendar-2027`

## Notes

- Events are read-only from Google Calendar
- Calendar updates automatically when new events are added
- You can filter events in the web app by category

## Tech Stack

- **Frontend:** React + Vite
- **Backend:** Vercel Serverless Functions
- **Styling:** CSS

## Project Structure

```
├── api/                    # Vercel API routes
│   ├── events.js          # Events API
│   ├── calendar.js        # iCal feed current year
│   ├── calendar-2025.js   # iCal feed 2025
│   └── calendar-2027.js   # iCal feed 2027
├── server/                 # Local Express server
│   ├── index.js           # Express API
│   ├── data/events.js     # Event data
│   └── utils/
│       ├── holidays.js    # Federal holidays
│       └── ical.js        # iCal generator
├── src/                    # React frontend
│   ├── App.jsx           # Main app
│   ├── main.jsx          # Entry point
│   └── index.css         # Styles
├── vercel.json            # Vercel config
├── vite.config.js         # Vite config
└── package.json           # Dependencies
```
