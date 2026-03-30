import express from 'express';
import cors from 'cors';
import { getAllEvents } from './data/events.js';
import { generateICal } from './utils/ical.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/events', (req, res) => {
  const currentYear = new Date().getFullYear();
  const events = getAllEvents(currentYear);
  res.json(events);
});

app.get('/api/events/:year', (req, res) => {
  const year = parseInt(req.params.year);
  if (isNaN(year)) {
    return res.status(400).json({ error: 'Invalid year' });
  }
  const events = getAllEvents(year);
  res.json(events);
});

app.get('/calendar.ics', (req, res) => {
  const currentYear = new Date().getFullYear();
  const events = getAllEvents(currentYear);
  const ical = generateICal(events);
  
  res.setHeader('Content-Type', 'text/calendar; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename="us-amazon-calendar.ics"');
  res.send(ical);
});

app.get('/calendar-2025.ics', (req, res) => {
  const events = getAllEvents(2025);
  const ical = generateICal(events);
  
  res.setHeader('Content-Type', 'text/calendar; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename="us-amazon-calendar-2025.ics"');
  res.send(ical);
});

app.get('/calendar-2027.ics', (req, res) => {
  const events = getAllEvents(2027);
  const ical = generateICal(events);
  
  res.setHeader('Content-Type', 'text/calendar; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename="us-amazon-calendar-2027.ics"');
  res.send(ical);
});

app.get('/', (req, res) => {
  res.json({
    name: 'US Holidays & Amazon Events Calendar',
    endpoints: {
      events: '/api/events',
      'events-by-year': '/api/events/:year',
      'ical-current': '/calendar.ics',
      'ical-2025': '/calendar-2025.ics',
      'ical-2027': '/calendar-2027.ics'
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
