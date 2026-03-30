const getFederalHolidays = (year) => {
  return [
    { id: `new-years-day-${year}`, title: "New Year's Day", description: "Federal holiday", startDate: `${year}-01-01`, endDate: `${year}-01-01`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' },
    { id: `mlk-day-${year}`, title: "Martin Luther King Jr. Day", description: "Federal holiday", startDate: `${year}-01-20`, endDate: `${year}-01-20`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' },
    { id: `presidents-day-${year}`, title: "Presidents' Day", description: "Federal holiday", startDate: `${year}-02-17`, endDate: `${year}-02-17`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' },
    { id: `memorial-day-${year}`, title: "Memorial Day", description: "Federal holiday", startDate: `${year}-05-26`, endDate: `${year}-05-26`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' },
    { id: `juneteenth-${year}`, title: "Juneteenth", description: "Federal holiday", startDate: `${year}-06-19`, endDate: `${year}-06-19`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' },
    { id: `independence-day-${year}`, title: "Independence Day", description: "Federal holiday", startDate: `${year}-07-04`, endDate: `${year}-07-04`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' },
    { id: `labor-day-${year}`, title: "Labor Day", description: "Federal holiday", startDate: `${year}-09-01`, endDate: `${year}-09-01`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' },
    { id: `columbus-day-${year}`, title: "Columbus Day", description: "Federal holiday", startDate: `${year}-10-13`, endDate: `${year}-10-13`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' },
    { id: `veterans-day-${year}`, title: "Veterans Day", description: "Federal holiday", startDate: `${year}-11-11`, endDate: `${year}-11-11`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' },
    { id: `thanksgiving-${year}`, title: "Thanksgiving Day", description: "Federal holiday", startDate: `${year}-11-27`, endDate: `${year}-11-27`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' },
    { id: `christmas-${year}`, title: "Christmas Day", description: "Federal holiday", startDate: `${year}-12-25`, endDate: `${year}-12-25`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' }
  ];
};

const getAmazonEvents = (year) => [
  { id: `prime-day-${year}`, title: "Amazon Prime Day", description: "Annual Prime member sale", startDate: `${year}-07-16`, endDate: `${year}-07-17`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
  { id: `black-friday-${year}`, title: "Amazon Black Friday", description: "Black Friday sale", startDate: `${year}-11-28`, endDate: `${year}-11-28`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
  { id: `cyber-monday-${year}`, title: "Amazon Cyber Monday", description: "Cyber Monday sale", startDate: `${year}-12-01`, endDate: `${year}-12-01`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
  { id: `aws-reinvent-${year}`, title: 'AWS re:Invent', description: 'Cloud computing conference', startDate: `${year}-12-02`, endDate: `${year}-12-06`, location: 'Las Vegas, NV, USA', category: 'aws', url: 'https://reinvent.awsevents.com/' }
];

const getAllEvents = (year) => [...getFederalHolidays(year), ...getAmazonEvents(year)].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

const generateICal = (events) => {
  const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//US Amazon Calendar//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH', 'X-WR-CALNAME:US Holidays & Amazon Events 2025'];
  for (const event of events) {
    lines.push('BEGIN:VEVENT', `UID:${event.id}@usamazoncalendar.com`, `DTSTAMP:${formatICalDate(new Date())}`, `DTSTART;VALUE=DATE:${event.startDate.replace(/-/g, '')}`, `DTEND;VALUE=DATE:${event.endDate.replace(/-/g, '')}`, `SUMMARY:${event.title}`, `DESCRIPTION:${event.description}`, `LOCATION:${event.location}`, 'END:VEVENT');
  }
  lines.push('END:VCALENDAR');
  return lines.join('\r\n');
};

function formatICalDate(date) { return `${date.getFullYear()}${String(date.getMonth()+1).padStart(2,'0')}${String(date.getDate()).padStart(2,'0')}T${String(date.getHours()).padStart(2,'0')}${String(date.getMinutes()).padStart(2,'0')}${String(date.getSeconds()).padStart(2,'0')}`; }

export default function handler(req, res) {
  const events = getAllEvents(2025);
  res.setHeader('Content-Type', 'text/calendar');
  res.setHeader('Content-Disposition', 'attachment; filename="us-amazon-calendar-2025.ics"');
  res.send(generateICal(events));
}
