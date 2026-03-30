const getFederalHolidays = (year) => {
  return [
    { id: `new-years-day-${year}`, title: "New Year's Day", description: "Federal holiday celebrating the first day of the year.", startDate: `${year}-01-01`, endDate: `${year}-01-01`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' },
    { id: `mlk-day-${year}`, title: "Martin Luther King Jr. Day", description: "Federal holiday honoring the civil rights leader.", startDate: `${year}-01-19`, endDate: `${year}-01-19`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' },
    { id: `presidents-day-${year}`, title: "Presidents' Day", description: "Federal holiday honoring all U.S. presidents.", startDate: `${year}-02-16`, endDate: `${year}-02-16`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' },
    { id: `memorial-day-${year}`, title: "Memorial Day", description: "Federal holiday honoring military personnel who died serving.", startDate: `${year}-05-25`, endDate: `${year}-05-25`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' },
    { id: `juneteenth-${year}`, title: "Juneteenth National Independence Day", description: "Federal holiday commemorating emancipation.", startDate: `${year}-06-19`, endDate: `${year}-06-19`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' },
    { id: `independence-day-${year}`, title: "Independence Day", description: "Federal holiday celebrating the Declaration of Independence.", startDate: `${year}-07-04`, endDate: `${year}-07-04`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' },
    { id: `labor-day-${year}`, title: "Labor Day", description: "Federal holiday honoring the American labor movement.", startDate: `${year}-09-07`, endDate: `${year}-09-07`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' },
    { id: `columbus-day-${year}`, title: "Columbus Day", description: "Federal holiday commemorating Columbus's arrival.", startDate: `${year}-10-12`, endDate: `${year}-10-12`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' },
    { id: `veterans-day-${year}`, title: "Veterans Day", description: "Federal holiday honoring military veterans.", startDate: `${year}-11-11`, endDate: `${year}-11-11`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' },
    { id: `thanksgiving-${year}`, title: "Thanksgiving Day", description: "Federal holiday celebrating the harvest.", startDate: `${year}-11-26`, endDate: `${year}-11-26`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' },
    { id: `christmas-${year}`, title: "Christmas Day", description: "Federal holiday commemorating the birth of Jesus Christ.", startDate: `${year}-12-25`, endDate: `${year}-12-25`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' }
  ];
};

const getAmazonEvents = (year) => {
  return [
    { id: `new-year-sale-${year}`, title: "Amazon New Year Sale", description: "Kick off the new year with amazing deals.", startDate: `${year}-01-01`, endDate: `${year}-01-04`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `valentines-day-sale-${year}`, title: "Amazon Valentine's Day Sale", description: "Special deals on gifts and romantic essentials.", startDate: `${year}-02-06`, endDate: `${year}-02-14`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `presidents-day-sale-${year}`, title: "Amazon Presidents' Day Sale", description: "Presidents' Day weekend sale.", startDate: `${year}-02-13`, endDate: `${year}-02-17`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `spring-deals-${year}`, title: "Amazon Spring Deals", description: "Seasonal sale on outdoor and spring merchandise.", startDate: `${year}-03-19`, endDate: `${year}-03-25`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `earth-day-sale-${year}`, title: "Amazon Earth Day Sale", description: "Eco-friendly products at special prices.", startDate: `${year}-04-22`, endDate: `${year}-04-23`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `mothers-day-sale-${year}`, title: "Amazon Mother's Day Sale", description: "Special deals on gifts for mom.", startDate: `${year}-05-04`, endDate: `${year}-05-10`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `memorial-day-sale-${year}`, title: "Amazon Memorial Day Sale", description: "Memorial Day weekend deals.", startDate: `${year}-05-22`, endDate: `${year}-05-26`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `fathers-day-sale-${year}`, title: "Amazon Father's Day Sale", description: "Special deals on gifts for dad.", startDate: `${year}-06-08`, endDate: `${year}-06-21`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `prime-day-${year}`, title: "Amazon Prime Day", description: "Annual shopping event for Prime members.", startDate: `${year}-07-21`, endDate: `${year}-07-22`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/primeday' },
    { id: `back-to-school-${year}`, title: "Amazon Back to School Sale", description: "Deals on school supplies and electronics.", startDate: `${year}-07-15`, endDate: `${year}-09-15`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `prime-early-access-${year}`, title: "Amazon Prime Early Access Sale", description: "Fall preview sale for Prime members.", startDate: `${year}-10-06`, endDate: `${year}-10-07`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `labor-day-sale-${year}`, title: "Amazon Labor Day Sale", description: "Labor Day weekend deals.", startDate: `${year}-09-04`, endDate: `${year}-09-08`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `halloween-sale-${year}`, title: "Amazon Halloween Sale", description: "Spooky deals on costumes and decorations.", startDate: `${year}-10-18`, endDate: `${year}-10-31`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `diwali-sale-${year}`, title: "Amazon Diwali Sale", description: "Festival of Lights sale.", startDate: `${year}-10-18`, endDate: `${year}-11-03`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `veterans-day-sale-${year}`, title: "Amazon Veterans Day Sale", description: "Special discounts honoring veterans.", startDate: `${year}-11-06`, endDate: `${year}-11-12`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `black-friday-${year}`, title: "Amazon Black Friday", description: "Biggest shopping event of the year.", startDate: `${year}-11-27`, endDate: `${year}-11-27`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/black-friday' },
    { id: `cyber-monday-${year}`, title: "Amazon Cyber Monday", description: "Post-Thanksgiving tech deals.", startDate: `${year}-11-30`, endDate: `${year}-11-30`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `cyber-week-${year}`, title: "Amazon Cyber Week", description: "Extended cyber deals.", startDate: `${year}-11-28`, endDate: `${year}-12-04`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `holiday-deal-days-${year}`, title: "Amazon Holiday Deal Days", description: "Daily deals leading to Christmas.", startDate: `${year}-12-14`, endDate: `${year}-12-24`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `day-after-christmas-${year}`, title: "Amazon Day After Christmas Sale", description: "Post-Christmas clearance.", startDate: `${year}-12-26`, endDate: `${year}-12-31`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `great-indian-festival-${year}`, title: "Amazon Great Indian Festival", description: "India's biggest shopping festival.", startDate: `${year}-09-27`, endDate: `${year}-10-05`, location: 'India', category: 'amazon-sale', url: 'https://www.amazon.in/' },
    { id: `prime-day-india-${year}`, title: "Amazon Prime Day India", description: "Exclusive sale for Prime members in India.", startDate: `${year}-07-26`, endDate: `${year}-07-27`, location: 'India', category: 'amazon-sale', url: 'https://www.amazon.in/' },
    { id: `republic-day-sale-india-${year}`, title: "Amazon Republic Day Sale India", description: "Republic Day sale in India.", startDate: `${year}-01-20`, endDate: `${year}-01-26`, location: 'India', category: 'amazon-sale', url: 'https://www.amazon.in/' },
    { id: `summer-sale-india-${year}`, title: "Amazon Summer Sale India", description: "Summer deals in India.", startDate: `${year}-04-26`, endDate: `${year}-05-05`, location: 'India', category: 'amazon-sale', url: 'https://www.amazon.in/' },
    { id: `diwali-bonanza-india-${year}`, title: "Amazon Diwali Bonanza Sale India", description: "Pre-Diwali sale in India.", startDate: `${year}-10-20`, endDate: `${year}-11-03`, location: 'India', category: 'amazon-sale', url: 'https://www.amazon.in/' },
    { id: `aws-reinvent-${year}`, title: 'AWS re:Invent', description: 'The largest cloud computing conference.', startDate: `${year}-11-30`, endDate: `${year}-12-04`, location: 'Las Vegas, NV, USA', category: 'aws', url: 'https://reinvent.awsevents.com/' },
    { id: `aws-summit-dc-${year}`, title: 'AWS Summit Washington D.C.', description: 'Premier AWS event for public sector.', startDate: `${year}-03-24`, endDate: `${year}-03-25`, location: 'Washington D.C., USA', category: 'aws', url: 'https://aws.amazon.com/' },
    { id: `aws-summit-sf-${year}`, title: 'AWS Summit San Francisco', description: 'AWS flagship West Coast conference.', startDate: `${year}-04-08`, endDate: `${year}-04-09`, location: 'San Francisco, CA, USA', category: 'aws', url: 'https://aws.amazon.com/' },
    { id: `aws-summit-chicago-${year}`, title: 'AWS Summit Chicago', description: 'Midwest AWS regional conference.', startDate: `${year}-05-12`, endDate: `${year}-05-13`, location: 'Chicago, IL, USA', category: 'aws', url: 'https://aws.amazon.com/' },
    { id: `aws-summit-nyc-${year}`, title: 'AWS Summit New York', description: 'Premier AWS East Coast conference.', startDate: `${year}-07-14`, endDate: `${year}-07-15`, location: 'New York City, NY, USA', category: 'aws', url: 'https://aws.amazon.com/' },
    { id: `aws-summit-atlanta-${year}`, title: 'AWS Summit Atlanta', description: 'Southeast US AWS conference.', startDate: `${year}-09-22`, endDate: `${year}-09-23`, location: 'Atlanta, GA, USA', category: 'aws', url: 'https://aws.amazon.com/' },
    { id: `aws-reinvent-europe-${year}`, title: 'AWS re:Invent Europe', description: 'European edition of re:Invent.', startDate: `${year}-11-02`, endDate: `${year}-11-04`, location: 'London, UK', category: 'aws', url: 'https://reinvent.awsevents.com/' },
    { id: `aws-dev-day-${year}`, title: 'AWS Dev Day', description: 'Developer-focused technical event.', startDate: `${year}-06-15`, endDate: `${year}-06-15`, location: 'San Francisco, CA, USA', category: 'aws', url: 'https://aws.amazon.com/' },
    { id: `aws-startup-day-${year}`, title: 'AWS Startup Day', description: 'Day for startups with VCs.', startDate: `${year}-04-22`, endDate: `${year}-04-22`, location: 'San Francisco, CA, USA', category: 'aws', url: 'https://aws.amazon.com/' },
    { id: `aws-ml-summit-${year}`, title: 'AWS Machine Learning Summit', description: 'Premier event for ML practitioners.', startDate: `${year}-09-29`, endDate: `${year}-09-30`, location: 'Santa Clara, CA, USA', category: 'aws', url: 'https://aws.amazon.com/' },
    { id: `amazon-unboxed-${year}`, title: 'Amazon unBoxed', description: "Conference for brand owners and sellers.", startDate: `${year}-10-06`, endDate: `${year}-10-08`, location: 'Austin, TX, USA', category: 'amazon', url: 'https://www.amazon.com/' },
    { id: `amazon-accelerate-${year}`, title: 'Amazon Accelerate', description: "Seller conference for third-party sellers.", startDate: `${year}-09-14`, endDate: `${year}-09-16`, location: 'Seattle, WA, USA', category: 'amazon', url: 'https://accelerate.amazon.com/' },
    { id: `amazon-singularity-${year}`, title: 'Amazon Singularity', description: 'Tech conference on emerging technologies.', startDate: `${year}-03-17`, endDate: `${year}-03-19`, location: 'Seattle, WA, USA', category: 'amazon', url: 'https://www.aboutamazon.com/' }
  ];
};

const getAllEvents = (year) => {
  const federalHolidays = getFederalHolidays(year);
  const amazonEvents = getAmazonEvents(year);
  return [...federalHolidays, ...amazonEvents].sort((a, b) => 
    new Date(a.startDate) - new Date(b.startDate)
  );
};

const generateICal = (events) => {
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//US Amazon Calendar//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:US Holidays & Amazon Events',
    'X-WR-TIMEZONE:America/New_York'
  ];

  for (const event of events) {
    const startDate = event.startDate.replace(/-/g, '');
    const endDate = event.endDate.replace(/-/g, '');
    lines.push('BEGIN:VEVENT');
    lines.push(`UID:${event.id}@usamazoncalendar.com`);
    lines.push(`DTSTAMP:${formatICalDate(new Date())}`);
    lines.push(`DTSTART;VALUE=DATE:${startDate}`);
    lines.push(`DTEND;VALUE=DATE:${endDate}`);
    lines.push(`SUMMARY:${escapeICalText(event.title)}`);
    lines.push(`DESCRIPTION:${escapeICalText(event.description)}`);
    lines.push(`LOCATION:${escapeICalText(event.location)}`);
    lines.push(`URL:${event.url}`);
    lines.push('END:VEVENT');
  }

  lines.push('END:VCALENDAR');
  return lines.join('\r\n');
};

function formatICalDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${year}${month}${day}T${hours}${minutes}${seconds}`;
}

function escapeICalText(text) {
  if (!text) return '';
  return text.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');
}

export default function handler(req, res) {
  const currentYear = new Date().getFullYear();
  const events = getAllEvents(currentYear);
  const ical = generateICal(events);
  res.setHeader('Content-Type', 'text/calendar; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename="us-amazon-calendar.ics"');
  res.send(ical);
}
