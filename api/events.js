import { getFederalHolidays } from '../server/utils/holidays.js';
import { getAmazonEvents } from '../server/data/events.js';

const getAllEvents = (year) => {
  const federalHolidays = getFederalHolidays(year);
  const amazonEvents = getAmazonEvents(year);
  return [...federalHolidays, ...amazonEvents].sort((a, b) => 
    new Date(a.startDate) - new Date(b.startDate)
  );
};

export default function handler(req, res) {
  const currentYear = new Date().getFullYear();
  const events = getAllEvents(currentYear);
  res.json(events);
}
