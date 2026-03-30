export const getEvents = () => {
  const year = new Date().getFullYear();
  return [
    // US Federal Holidays
    { id: `new-years-${year}`, title: "New Year's Day", description: "Federal holiday", startDate: `${year}-01-01`, endDate: `${year}-01-01`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' },
    { id: `mlk-${year}`, title: "Martin Luther King Jr. Day", description: "Federal holiday", startDate: `${year}-01-19`, endDate: `${year}-01-19`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' },
    { id: `presidents-${year}`, title: "Presidents' Day", description: "Federal holiday", startDate: `${year}-02-16`, endDate: `${year}-02-16`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' },
    { id: `memorial-${year}`, title: "Memorial Day", description: "Federal holiday", startDate: `${year}-05-25`, endDate: `${year}-05-25`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' },
    { id: `juneteenth-${year}`, title: "Juneteenth", description: "Federal holiday", startDate: `${year}-06-19`, endDate: `${year}-06-19`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' },
    { id: `independence-${year}`, title: "Independence Day", description: "Federal holiday", startDate: `${year}-07-04`, endDate: `${year}-07-04`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' },
    { id: `labor-${year}`, title: "Labor Day", description: "Federal holiday", startDate: `${year}-09-07`, endDate: `${year}-09-07`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' },
    { id: `columbus-${year}`, title: "Columbus Day", description: "Federal holiday", startDate: `${year}-10-12`, endDate: `${year}-10-12`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' },
    { id: `veterans-${year}`, title: "Veterans Day", description: "Federal holiday", startDate: `${year}-11-11`, endDate: `${year}-11-11`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' },
    { id: `thanksgiving-${year}`, title: "Thanksgiving Day", description: "Federal holiday", startDate: `${year}-11-26`, endDate: `${year}-11-26`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' },
    { id: `christmas-${year}`, title: "Christmas Day", description: "Federal holiday", startDate: `${year}-12-25`, endDate: `${year}-12-25`, location: 'United States', category: 'federal', url: 'https://www.opm.gov/' },
    // Amazon Sales
    { id: `valentine-${year}`, title: "Amazon Valentine's Day Sale", description: "Special deals on gifts", startDate: `${year}-02-06`, endDate: `${year}-02-14`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `presidents-sale-${year}`, title: "Amazon Presidents' Day Sale", description: "Presidents Day weekend sale", startDate: `${year}-02-13`, endDate: `${year}-02-17`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `spring-${year}`, title: "Amazon Spring Deals", description: "Spring sale", startDate: `${year}-03-19`, endDate: `${year}-03-25`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `earth-day-${year}`, title: "Amazon Earth Day Sale", description: "Eco-friendly products", startDate: `${year}-04-22`, endDate: `${year}-04-23`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `mothers-${year}`, title: "Amazon Mother's Day Sale", description: "Gifts for mom", startDate: `${year}-05-04`, endDate: `${year}-05-10`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `memorial-sale-${year}`, title: "Amazon Memorial Day Sale", description: "Memorial Day weekend deals", startDate: `${year}-05-22`, endDate: `${year}-05-26`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `fathers-${year}`, title: "Amazon Father's Day Sale", description: "Gifts for dad", startDate: `${year}-06-08`, endDate: `${year}-06-21`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `primeday-${year}`, title: "Amazon Prime Day", description: "Annual Prime member sale", startDate: `${year}-07-21`, endDate: `${year}-07-22`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/primeday' },
    { id: `backtoschool-${year}`, title: "Amazon Back to School Sale", description: "School supplies & electronics", startDate: `${year}-07-15`, endDate: `${year}-09-15`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `primeearly-${year}`, title: "Amazon Prime Early Access Sale", description: "Fall preview for Prime members", startDate: `${year}-10-06`, endDate: `${year}-10-07`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `labor-sale-${year}`, title: "Amazon Labor Day Sale", description: "Labor Day weekend deals", startDate: `${year}-09-04`, endDate: `${year}-09-08`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `halloween-${year}`, title: "Amazon Halloween Sale", description: "Costumes & decorations", startDate: `${year}-10-18`, endDate: `${year}-10-31`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `diwali-${year}`, title: "Amazon Diwali Sale", description: "Festival of Lights", startDate: `${year}-10-18`, endDate: `${year}-11-03`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `veterans-sale-${year}`, title: "Amazon Veterans Day Sale", description: "Discounts for veterans", startDate: `${year}-11-06`, endDate: `${year}-11-12`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `blackfriday-${year}`, title: "Amazon Black Friday", description: "Biggest shopping event", startDate: `${year}-11-27`, endDate: `${year}-11-27`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/black-friday' },
    { id: `cybermonday-${year}`, title: "Amazon Cyber Monday", description: "Tech deals", startDate: `${year}-11-30`, endDate: `${year}-11-30`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `cyberweek-${year}`, title: "Amazon Cyber Week", description: "Extended cyber deals", startDate: `${year}-11-28`, endDate: `${year}-12-04`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    { id: `holiday-${year}`, title: "Amazon Holiday Deal Days", description: "Daily deals to Christmas", startDate: `${year}-12-14`, endDate: `${year}-12-24`, location: 'United States', category: 'amazon-sale', url: 'https://www.amazon.com/' },
    // Amazon India
    { id: `greatindian-${year}`, title: "Amazon Great Indian Festival", description: "India's biggest sale", startDate: `${year}-09-27`, endDate: `${year}-10-05`, location: 'India', category: 'amazon-sale', url: 'https://www.amazon.in/' },
    { id: `primeday-india-${year}`, title: "Amazon Prime Day India", description: "Prime sale in India", startDate: `${year}-07-26`, endDate: `${year}-07-27`, location: 'India', category: 'amazon-sale', url: 'https://www.amazon.in/' },
    { id: `republic-india-${year}`, title: "Amazon Republic Day Sale India", description: "Republic Day sale", startDate: `${year}-01-20`, endDate: `${year}-01-26`, location: 'India', category: 'amazon-sale', url: 'https://www.amazon.in/' },
    { id: `summer-india-${year}`, title: "Amazon Summer Sale India", description: "Summer deals", startDate: `${year}-04-26`, endDate: `${year}-05-05`, location: 'India', category: 'amazon-sale', url: 'https://www.amazon.in/' },
    // AWS Events
    { id: `reinvent-${year}`, title: 'AWS re:Invent', description: 'Largest cloud conference', startDate: `${year}-11-30`, endDate: `${year}-12-04`, location: 'Las Vegas, NV, USA', category: 'aws', url: 'https://reinvent.awsevents.com/' },
    { id: `summit-dc-${year}`, title: 'AWS Summit Washington D.C.', description: 'Public sector event', startDate: `${year}-03-24`, endDate: `${year}-03-25`, location: 'Washington D.C., USA', category: 'aws', url: 'https://aws.amazon.com/' },
    { id: `summit-sf-${year}`, title: 'AWS Summit San Francisco', description: 'West Coast conference', startDate: `${year}-04-08`, endDate: `${year}-04-09`, location: 'San Francisco, CA, USA', category: 'aws', url: 'https://aws.amazon.com/' },
    { id: `summit-chicago-${year}`, title: 'AWS Summit Chicago', description: 'Midwest conference', startDate: `${year}-05-12`, endDate: `${year}-05-13`, location: 'Chicago, IL, USA', category: 'aws', url: 'https://aws.amazon.com/' },
    { id: `summit-nyc-${year}`, title: 'AWS Summit New York', description: 'East Coast conference', startDate: `${year}-07-14`, endDate: `${year}-07-15`, location: 'New York City, NY, USA', category: 'aws', url: 'https://aws.amazon.com/' },
    { id: `summit-atlanta-${year}`, title: 'AWS Summit Atlanta', description: 'Southeast conference', startDate: `${year}-09-22`, endDate: `${year}-09-23`, location: 'Atlanta, GA, USA', category: 'aws', url: 'https://aws.amazon.com/' },
    { id: `reinvent-eu-${year}`, title: 'AWS re:Invent Europe', description: 'European re:Invent', startDate: `${year}-11-02`, endDate: `${year}-11-04`, location: 'London, UK', category: 'aws', url: 'https://reinvent.awsevents.com/' },
    { id: `devday-${year}`, title: 'AWS Dev Day', description: 'Developer event', startDate: `${year}-06-15`, endDate: `${year}-06-15`, location: 'San Francisco, CA, USA', category: 'aws', url: 'https://aws.amazon.com/' },
    { id: `startupday-${year}`, title: 'AWS Startup Day', description: 'Startups & VCs', startDate: `${year}-04-22`, endDate: `${year}-04-22`, location: 'San Francisco, CA, USA', category: 'aws', url: 'https://aws.amazon.com/' },
    { id: `mlsummit-${year}`, title: 'AWS Machine Learning Summit', description: 'ML conference', startDate: `${year}-09-29`, endDate: `${year}-09-30`, location: 'Santa Clara, CA, USA', category: 'aws', url: 'https://aws.amazon.com/' },
    // Amazon Corporate
    { id: `unboxed-${year}`, title: 'Amazon unBoxed', description: 'Seller conference', startDate: `${year}-10-06`, endDate: `${year}-10-08`, location: 'Austin, TX, USA', category: 'amazon', url: 'https://www.amazon.com/' },
    { id: `accelerate-${year}`, title: 'Amazon Accelerate', description: 'Seller conference', startDate: `${year}-09-14`, endDate: `${year}-09-16`, location: 'Seattle, WA, USA', category: 'amazon', url: 'https://accelerate.amazon.com/' },
    { id: `singularity-${year}`, title: 'Amazon Singularity', description: 'Tech conference', startDate: `${year}-03-17`, endDate: `${year}-03-19`, location: 'Seattle, WA, USA', category: 'amazon', url: 'https://www.aboutamazon.com/' }
  ].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
};
