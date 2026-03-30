import { getFederalHolidays } from '../utils/holidays.js';

export const getAllEvents = (year) => {
  const federalHolidays = getFederalHolidays(year);
  const amazonEvents = getAmazonEvents(year);
  
  return [...federalHolidays, ...amazonEvents].sort((a, b) => 
    new Date(a.startDate) - new Date(b.startDate)
  );
};

const getAmazonEvents = (year) => {
  return [
    // ==================== US FEDERAL HOLIDAYS ====================
    {
      id: `new-years-day-${year}`,
      title: "New Year's Day",
      description: "Federal holiday celebrating the first day of the Gregorian calendar year.",
      startDate: `${year}-01-01`,
      endDate: `${year}-01-01`,
      location: 'United States',
      category: 'federal',
      url: 'https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/'
    },
    {
      id: `mlk-day-${year}`,
      title: "Martin Luther King Jr. Day",
      description: "Federal holiday honoring the civil rights leader and activist Martin Luther King Jr.",
      startDate: `${year}-01-19`,
      endDate: `${year}-01-19`,
      location: 'United States',
      category: 'federal',
      url: 'https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/'
    },
    {
      id: `presidents-day-${year}`,
      title: "Presidents' Day",
      description: "Federal holiday honoring all U.S. presidents.",
      startDate: `${year}-02-16`,
      endDate: `${year}-02-16`,
      location: 'United States',
      category: 'federal',
      url: 'https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/'
    },
    {
      id: `memorial-day-${year}`,
      title: "Memorial Day",
      description: "Federal holiday honoring military personnel who have died while serving.",
      startDate: `${year}-05-25`,
      endDate: `${year}-05-25`,
      location: 'United States',
      category: 'federal',
      url: 'https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/'
    },
    {
      id: `juneteenth-${year}`,
      title: "Juneteenth National Independence Day",
      description: "Federal holiday commemorating the emancipation of enslaved African-Americans.",
      startDate: `${year}-06-19`,
      endDate: `${year}-06-19`,
      location: 'United States',
      category: 'federal',
      url: 'https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/'
    },
    {
      id: `independence-day-${year}`,
      title: "Independence Day",
      description: "Federal holiday celebrating the Declaration of Independence.",
      startDate: `${year}-07-04`,
      endDate: `${year}-07-04`,
      location: 'United States',
      category: 'federal',
      url: 'https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/'
    },
    {
      id: `labor-day-${year}`,
      title: "Labor Day",
      description: "Federal holiday honoring the American labor movement and workers.",
      startDate: `${year}-09-07`,
      endDate: `${year}-09-07`,
      location: 'United States',
      category: 'federal',
      url: 'https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/'
    },
    {
      id: `columbus-day-${year}`,
      title: "Columbus Day",
      description: "Federal holiday commemorating the arrival of Christopher Columbus in the Americas.",
      startDate: `${year}-10-12`,
      endDate: `${year}-10-12`,
      location: 'United States',
      category: 'federal',
      url: 'https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/'
    },
    {
      id: `veterans-day-${year}`,
      title: "Veterans Day",
      description: "Federal holiday honoring military veterans of the United States Armed Forces.",
      startDate: `${year}-11-11`,
      endDate: `${year}-11-11`,
      location: 'United States',
      category: 'federal',
      url: 'https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/'
    },
    {
      id: `thanksgiving-${year}`,
      title: "Thanksgiving Day",
      description: "Federal holiday celebrating the harvest and other blessings of the past year.",
      startDate: `${year}-11-26`,
      endDate: `${year}-11-26`,
      location: 'United States',
      category: 'federal',
      url: 'https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/'
    },
    {
      id: `christmas-${year}`,
      title: "Christmas Day",
      description: "Federal holiday commemorating the birth of Jesus Christ.",
      startDate: `${year}-12-25`,
      endDate: `${year}-12-25`,
      location: 'United States',
      category: 'federal',
      url: 'https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/'
    },

    // ==================== AMAZON SALES & FESTIVE OFFERS - US ====================
    {
      id: `new-year-sale-2026-us`,
      title: "Amazon New Year Sale",
      description: "Kick off the new year with amazing deals on electronics, home goods, and more.",
      startDate: `${year}-01-01`,
      endDate: `${year}-01-04`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/'
    },
    {
      id: `martin-luther-king-day-sale-2026`,
      title: "Amazon Martin Luther King Jr. Day Sale",
      description: "Mid-January sale event with discounts on various categories.",
      startDate: `${year}-01-16`,
      endDate: `${year}-01-20`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/'
    },
    {
      id: `presidents-day-sale-2026`,
      title: "Amazon Presidents' Day Sale",
      description: "Presidents' Day weekend sale featuring deals on electronics and appliances.",
      startDate: `${year}-02-13`,
      endDate: `${year}-02-17`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/'
    },
    {
      id: `valentines-day-sale-2026`,
      title: "Amazon Valentine's Day Sale",
      description: "Special deals on gifts, jewelry, flowers, and romantic essentials.",
      startDate: `${year}-02-06`,
      endDate: `${year}-02-14`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/valentines-day'
    },
    {
      id: `spring-deals-2026`,
      title: "Amazon Spring Deals",
      description: "Seasonal sale featuring deals on gardening, outdoor, and spring merchandise.",
      startDate: `${year}-03-19`,
      endDate: `${year}-03-25`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/'
    },
    {
      id: `earth-day-sale-2026`,
      title: "Amazon Earth Day Sale",
      description: "Eco-friendly products and sustainable brands at special prices.",
      startDate: `${year}-04-22`,
      endDate: `${year}-04-23`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/earth-day'
    },
    {
      id: `mothers-day-sale-2026`,
      title: "Amazon Mother's Day Sale",
      description: "Special deals on gifts for mom including jewelry, electronics, beauty, and home.",
      startDate: `${year}-05-04`,
      endDate: `${year}-05-10`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/mothers-day'
    },
    {
      id: `memorial-day-sale-2026`,
      title: "Amazon Memorial Day Sale",
      description: "Memorial Day weekend deals on electronics, outdoor gear, and summer essentials.",
      startDate: `${year}-05-22`,
      endDate: `${year}-05-26`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/memorial-day'
    },
    {
      id: `fathers-day-sale-2026`,
      title: "Amazon Father's Day Sale",
      description: "Special deals on gifts for dad including electronics, tools, sports, and more.",
      startDate: `${year}-06-08`,
      endDate: `${year}-06-21`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/fathers-day'
    },
    {
      id: `prime-day-2026`,
      title: "Amazon Prime Day",
      description: "The annual shopping event exclusively for Prime members featuring deals across all categories.",
      startDate: `${year}-07-21`,
      endDate: `${year}-07-22`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/primeday'
    },
    {
      id: `prime-early-access-sale-2026`,
      title: "Amazon Prime Early Access Sale",
      description: "Fall preview sale for Prime members with early holiday deals.",
      startDate: `${year}-10-06`,
      endDate: `${year}-10-07`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/'
    },
    {
      id: `back-to-school-sale-2026`,
      title: "Amazon Back to School Sale",
      description: "Deals on school supplies, electronics, furniture, and essentials for students.",
      startDate: `${year}-07-15`,
      endDate: `${year}-09-15`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/back-to-school'
    },
    {
      id: `labor-day-sale-2026`,
      title: "Amazon Labor Day Sale",
      description: "Labor Day weekend deals on appliances, electronics, and outdoor items.",
      startDate: `${year}-09-04`,
      endDate: `${year}-09-08`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/labor-day'
    },
    {
      id: `columbus-day-sale-2026`,
      title: "Amazon Columbus Day Sale",
      description: "Columbus Day weekend sale featuring deals on electronics and home goods.",
      startDate: `${year}-10-09`,
      endDate: `${year}-10-13`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/'
    },
    {
      id: `halloween-sale-2026`,
      title: "Amazon Halloween Sale",
      description: "Spooky deals on costumes, decorations, candy, and Halloween essentials.",
      startDate: `${year}-10-18`,
      endDate: `${year}-10-31`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/halloween'
    },
    {
      id: `diwali-sale-2026`,
      title: "Amazon Diwali Sale",
      description: "Festival of Lights sale featuring deals on gifts, decorations, electronics, and more.",
      startDate: `${year}-10-18`,
      endDate: `${year}-11-03`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/diwali'
    },
    {
      id: `veterans-day-sale-2026`,
      title: "Amazon Veterans Day Sale",
      description: "Special discounts honoring veterans and military families.",
      startDate: `${year}-11-06`,
      endDate: `${year}-11-12`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/veterans-day'
    },
    {
      id: `black-friday-2026`,
      title: "Amazon Black Friday",
      description: "The biggest shopping event of the year with deep discounts across all product categories.",
      startDate: `${year}-11-27`,
      endDate: `${year}-11-27`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/black-friday'
    },
    {
      id: `cyber-monday-2026`,
      title: "Amazon Cyber Monday",
      description: "Post-Thanksgiving online shopping event with tech deals and electronics specials.",
      startDate: `${year}-11-30`,
      endDate: `${year}-11-30`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/cybermonday'
    },
    {
      id: `cyber-week-2026`,
      title: "Amazon Cyber Week",
      description: "Extended cyber deals throughout the week after Black Friday.",
      startDate: `${year}-11-28`,
      endDate: `${year}-12-04`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/cyber-week'
    },
    {
      id: `holiday-deal-days-2026`,
      title: "Amazon Holiday Deal Days",
      description: "Countdown to Christmas with daily deals on popular gifts.",
      startDate: `${year}-12-14`,
      endDate: `${year}-12-24`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/holiday-deals'
    },
    {
      id: `last-minute-deals-2026`,
      title: "Amazon Last Minute Holiday Deals",
      description: "Final holiday shopping days with express delivery and last-minute gifts.",
      startDate: `${year}-12-21`,
      endDate: `${year}-12-24`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/'
    },
    {
      id: `day-after-christmas-sale-2026`,
      title: "Amazon Day After Christmas Sale",
      description: "Post-Christmas clearance deals and New Year prep sales.",
      startDate: `${year}-12-26`,
      endDate: `${year}-12-31`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/'
    },

    // ==================== AMAZON INDIA SALES ====================
    {
      id: `great-indian-festival-2026`,
      title: "Amazon Great Indian Festival",
      description: "India's biggest shopping festival featuring massive discounts across all categories.",
      startDate: `${year}-09-27`,
      endDate: `${year}-10-05`,
      location: 'India',
      category: 'amazon-sale',
      url: 'https://www.amazon.in/greatindianfestival'
    },
    {
      id: `prime-day-india-2026`,
      title: "Amazon Prime Day India",
      description: "Exclusive shopping event for Prime members in India with the best deals.",
      startDate: `${year}-07-26`,
      endDate: `${year}-07-27`,
      location: 'India',
      category: 'amazon-sale',
      url: 'https://www.amazon.in/primeday'
    },
    {
      id: ` Republic-Day-sale-india-2026`,
      title: "Amazon Republic Day Sale India",
      description: "Republic Day celebration sale with deals on electronics and national favorites.",
      startDate: `${year}-01-20`,
      endDate: `${year}-01-26`,
      location: 'India',
      category: 'amazon-sale',
      url: 'https://www.amazon.in/republic-day-sale'
    },
    {
      id: `summer-sale-india-2026`,
      title: "Amazon Summer Sale India",
      description: "Beat the heat with amazing deals on ACs, coolers, summer essentials.",
      startDate: `${year}-04-26`,
      endDate: `${year}-05-05`,
      location: 'India',
      category: 'amazon-sale',
      url: 'https://www.amazon.in/summer-sale'
    },
    {
      id: `mobiles-fest-2026-india`,
      title: "Amazon Mobiles Fest India",
      description: "Biggest sale on smartphones, tablets, and accessories in India.",
      startDate: `${year}-02-01`,
      endDate: `${year}-02-07`,
      location: 'India',
      category: 'amazon-sale',
      url: 'https://www.amazon.in/mobiles-fest'
    },
    {
      id: `fab-pheroes-sale-2026`,
      title: "Amazon Fab Phones Fest India",
      description: "Phone sale festival with exchange offers and no-cost EMI.",
      startDate: `${year}-03-11`,
      endDate: `${year}-03-15`,
      location: 'India',
      category: 'amazon-sale',
      url: 'https://www.amazon.in/fab-phones-fest'
    },
    {
      id: `appliances-fest-2026-india`,
      title: "Amazon Appliances Fest India",
      description: "Sale on TVs, refrigerators, washing machines, and kitchen appliances.",
      startDate: `${year}-03-18`,
      endDate: `${year}-03-24`,
      location: 'India',
      category: 'amazon-sale',
      url: 'https://www.amazon.in/appliances-fest'
    },
    {
      id: `mothers-day-sale-india-2026`,
      title: "Amazon Mother's Day Sale India",
      description: "Special deals on gifts for mom in India.",
      startDate: `${year}-05-02`,
      endDate: `${year}-05-10`,
      location: 'India',
      category: 'amazon-sale',
      url: 'https://www.amazon.in/mothers-day'
    },
    {
      id: `fathers-day-sale-india-2026`,
      title: "Amazon Father's Day Sale India",
      description: "Gift dad's favorites with special deals in India.",
      startDate: `${year}-06-13`,
      endDate: `${year}-06-21`,
      location: 'India',
      category: 'amazon-sale',
      url: 'https://www.amazon.in/fathers-day'
    },
    {
      id: `independence-day-sale-india-2026`,
      title: "Amazon Independence Day Sale India",
      description: "Independence Day sale with massive discounts.",
      startDate: `${year}-08-12`,
      endDate: `${year}-08-17`,
      location: 'India',
      category: 'amazon-sale',
      url: 'https://www.amazon.in/independence-day-sale'
    },
    {
      id: `diwali-bonanza-sale-india-2026`,
      title: "Amazon Diwali Bonanza Sale India",
      description: "The biggest pre-Diwali sale in India with lights, diyas, and gifts.",
      startDate: `${year}-10-20`,
      endDate: `${year}-11-03`,
      location: 'India',
      category: 'amazon-sale',
      url: 'https://www.amazon.in/diwali-bonanza'
    },
    {
      id: `christmas-sale-india-2026`,
      title: "Amazon Christmas Sale India",
      description: "End of year sale with year-end discounts in India.",
      startDate: `${year}-12-20`,
      endDate: `${year}-12-26`,
      location: 'India',
      category: 'amazon-sale',
      url: 'https://www.amazon.in/christmas-sale'
    },

    // ==================== AWS CONFERENCES & EVENTS ====================
    {
      id: 'aws-reinvent-2026',
      title: 'AWS re:Invent',
      description: 'The largest cloud computing conference featuring keynotes, technical sessions, and hands-on labs.',
      startDate: `${year}-11-30`,
      endDate: `${year}-12-04`,
      location: 'Las Vegas, Nevada, USA',
      category: 'aws',
      url: 'https://reinvent.awsevents.com/'
    },
    {
      id: 'aws-reinvent-2025',
      title: 'AWS re:Invent',
      description: 'The largest cloud computing conference featuring keynotes, technical sessions, and hands-on labs.',
      startDate: `${year - 1}-12-02`,
      endDate: `${year - 1}-12-06`,
      location: 'Las Vegas, Nevada, USA',
      category: 'aws',
      url: 'https://reinvent.awsevents.com/'
    },
    {
      id: 'aws-summit-washington-2026',
      title: 'AWS Summit Washington D.C.',
      description: 'The premier AWS event for the public sector, government agencies, and enterprises.',
      startDate: `${year}-03-24`,
      endDate: `${year}-03-25`,
      location: 'Washington D.C., USA',
      category: 'aws',
      url: 'https://aws.amazon.com/events/summits/washington-dc/'
    },
    {
      id: 'aws-summit-sf-2026',
      title: 'AWS Summit San Francisco',
      description: 'AWS flagship conference on the US West Coast featuring the latest cloud innovations.',
      startDate: `${year}-04-08`,
      endDate: `${year}-04-09`,
      location: 'San Francisco, CA, USA',
      category: 'aws',
      url: 'https://aws.amazon.com/events/summits/san-francisco/'
    },
    {
      id: 'aws-summit-chicago-2026',
      title: 'AWS Summit Chicago',
      description: 'Major AWS regional conference in the Midwest with learning sessions and demos.',
      startDate: `${year}-05-12`,
      endDate: `${year}-05-13`,
      location: 'Chicago, IL, USA',
      category: 'aws',
      url: 'https://aws.amazon.com/events/summits/chicago/'
    },
    {
      id: 'aws-summit-nyc-2026',
      title: 'AWS Summit New York',
      description: 'The premier AWS conference in the US East Coast.',
      startDate: `${year}-07-14`,
      endDate: `${year}-07-15`,
      location: 'New York City, NY, USA',
      category: 'aws',
      url: 'https://aws.amazon.com/events/summits/new-york/'
    },
    {
      id: 'aws-summit-atlanta-2026',
      title: 'AWS Summit Atlanta',
      description: 'Regional AWS conference in the Southeast US.',
      startDate: `${year}-09-22`,
      endDate: `${year}-09-23`,
      location: 'Atlanta, GA, USA',
      category: 'aws',
      url: 'https://aws.amazon.com/events/summits/atlanta/'
    },
    {
      id: 'aws-reinvent-europe-2026',
      title: 'AWS re:Invent Europe',
      description: 'The European edition of AWS re:Invent in London.',
      startDate: `${year}-11-02`,
      endDate: `${year}-11-04`,
      location: 'London, UK',
      category: 'aws',
      url: 'https://reinvent.awsevents.com/'
    },
    {
      id: 'aws-dev-day-sf-2026',
      title: 'AWS Dev Day San Francisco',
      description: 'Developer-focused event with technical deep-dives and hands-on workshops.',
      startDate: `${year}-06-15`,
      endDate: `${year}-06-15`,
      location: 'San Francisco, CA, USA',
      category: 'aws',
      url: 'https://aws.amazon.com/events/dev-day/'
    },
    {
      id: 'aws-startup-day-2026',
      title: 'AWS Startup Day',
      description: 'Day dedicated to startups featuring success stories and networking with VCs.',
      startDate: `${year}-04-22`,
      endDate: `${year}-04-22`,
      location: 'San Francisco, CA, USA',
      category: 'aws',
      url: 'https://aws.amazon.com/events/startup-day/'
    },
    {
      id: 'aws-machine-learning-summit-2026',
      title: 'AWS Machine Learning Summit',
      description: 'Premier event for ML practitioners featuring AI/ML technologies.',
      startDate: `${year}-09-29`,
      endDate: `${year}-09-30`,
      location: 'Santa Clara, CA, USA',
      category: 'aws',
      url: 'https://aws.amazon.com/events/ml-summit/'
    },
    {
      id: 'aws-financial-services-day-2026',
      title: 'AWS Financial Services Day',
      description: 'Event for financial services industry covering cloud solutions.',
      startDate: `${year}-03-10`,
      endDate: `${year}-03-11`,
      location: 'New York City, NY, USA',
      category: 'aws',
      url: 'https://aws.amazon.com/events/financial-services-day/'
    },
    {
      id: 'aws-health-ai-day-2026',
      title: 'AWS Health and AI Day',
      description: 'Event focused on healthcare and life sciences applications of cloud and AI.',
      startDate: `${year}-06-08`,
      endDate: `${year}-06-09`,
      location: 'Boston, MA, USA',
      category: 'aws',
      url: 'https://aws.amazon.com/events/health-ai-day/'
    },
    {
      id: 'aws-gaming-day-2026',
      title: 'AWS Gaming Day',
      description: 'Event for game developers featuring cloud gaming solutions.',
      startDate: `${year}-07-27`,
      endDate: `${year}-07-28`,
      location: 'Los Angeles, CA, USA',
      category: 'aws',
      url: 'https://aws.amazon.com/events/gaming-day/'
    },
    {
      id: 'aws-media-day-2026',
      title: 'AWS Media & Entertainment Day',
      description: 'Event covering cloud solutions for media and streaming services.',
      startDate: `${year}-10-20`,
      endDate: `${year}-10-21`,
      location: 'Los Angeles, CA, USA',
      category: 'aws',
      url: 'https://aws.amazon.com/events/media-day/'
    },
    {
      id: 'aws-retail-day-2026',
      title: 'AWS Retail Day',
      description: 'Event focused on digital transformation in retail.',
      startDate: `${year}-09-08`,
      endDate: `${year}-09-09`,
      location: 'Chicago, IL, USA',
      category: 'aws',
      url: 'https://aws.amazon.com/events/retail-day/'
    },
    {
      id: 'aws-container-day-2026',
      title: 'AWS Container Day',
      description: 'Deep-dive event on container technologies: ECS, EKS, and Fargate.',
      startDate: `${year}-10-12`,
      endDate: `${year}-10-12`,
      location: 'Virtual / Various US',
      category: 'aws',
      url: 'https://aws.amazon.com/events/container-day/'
    },
    {
      id: 'aws-partner-conference-2026',
      title: 'AWS Partner Conference',
      description: 'Annual event for AWS Partners with solution updates.',
      startDate: `${year}-05-18`,
      endDate: `${year}-05-20`,
      location: 'Las Vegas, NV, USA',
      category: 'aws',
      url: 'https://aws.amazon.com/partners/events/'
    },
    {
      id: 'aws-impact-computing-day-2026',
      title: 'AWS Impact Computing Day',
      description: 'Event focused on accessible and assistive technology solutions.',
      startDate: `${year}-05-26`,
      endDate: `${year}-05-27`,
      location: 'Seattle, WA, USA',
      category: 'aws',
      url: 'https://aws.amazon.com/events/impact-computing-day/'
    },

    // ==================== AMAZON CORPORATE EVENTS ====================
    {
      id: 'amazon-unboxed-2026',
      title: 'Amazon unBoxed',
      description: "Amazon's flagship conference for brand owners and sellers.",
      startDate: `${year}-10-06`,
      endDate: `${year}-10-08`,
      location: 'Austin, TX, USA',
      category: 'amazon',
      url: 'https://www.amazon.com/unboxed'
    },
    {
      id: 'amazon-accelerate-2026',
      title: 'Amazon Accelerate',
      description: "Amazon's premier seller conference for third-party sellers.",
      startDate: `${year}-09-14`,
      endDate: `${year}-09-16`,
      location: 'Seattle, WA, USA',
      category: 'amazon',
      url: 'https://accelerate.amazon.com/'
    },
    {
      id: 'amazon-singularity-2026',
      title: 'Amazon Singularity',
      description: 'Annual tech conference exploring emerging technologies and innovations.',
      startDate: `${year}-03-17`,
      endDate: `${year}-03-19`,
      location: 'Seattle, WA, USA',
      category: 'amazon',
      url: 'https://www.aboutamazon.com/'
    },
    {
      id: 'aws-twitch-stream-2026',
      title: 'AWS on Twitch',
      description: 'Regular AWS livestreams featuring demos and tutorials.',
      startDate: `${year}-01-01`,
      endDate: `${year}-12-31`,
      location: 'Virtual (Twitch)',
      category: 'aws',
      url: 'https://www.twitch.tv/aws'
    },

    // ==================== OTHER MAJOR US SHOPPING EVENTS ====================
    {
      id: `single's-day-2026`,
      title: "Amazon Singles' Day Sale",
      description: "Deals for solo shoppers - electronics, gadgets, and self-care products.",
      startDate: `${year}-11-11`,
      endDate: `${year}-11-11`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/'
    },
    {
      id: `st-patrick's-day-sale-2026`,
      title: "Amazon St. Patrick's Day Sale",
      description: "Luck-filled deals with green-themed products and discounts.",
      startDate: `${year}-03-13`,
      endDate: `${year}-03-17`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/'
    },
    {
      id: `april-fools-sale-2026`,
      title: "Amazon April Fools' Day Sale",
      description: "Fun deals and pranks with special discounts on select items.",
      startDate: `${year}-04-01`,
      endDate: `${year}-04-01`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/'
    },
    {
      id: `cinema-day-2026`,
      title: "Amazon National Cinema Day Sale",
      description: "Deals on streaming devices, movies, and home entertainment.",
      startDate: `${year}-09-03`,
      endDate: `${year}-09-03`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/'
    },
    {
      id: `pet-day-sale-2026`,
      title: "Amazon Pet Day Sale",
      description: "Special discounts on pet supplies, food, and toys.",
      startDate: `${year}-05-11`,
      endDate: `${year}-05-11`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/pet-day'
    },
    {
      id: `pride-month-sale-2026`,
      title: "Amazon Pride Month Sale",
      description: "Celebrating Pride with deals on LGBTQ+ brands and products.",
      startDate: `${year}-06-01`,
      endDate: `${year}-06-30`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/pride'
    },
    {
      id: `amazon-fresh-launch-2026`,
      title: "Amazon Fresh Grocery Sale",
      description: "Weekly deals on fresh groceries and everyday essentials.",
      startDate: `${year}-01-06`,
      endDate: `${year}-01-12`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/fresh'
    },
    {
      id: `beauty-insider-sale-2026`,
      title: "Amazon Beauty Insider Sale",
      description: "Exclusive deals for Beauty Insider members.",
      startDate: `${year}-04-24`,
      endDate: `${year}-04-27`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/beauty'
    },
    {
      id: `luxury-stores-launch-2026`,
      title: "Amazon Luxury Stores Event",
      description: "Exclusive access to luxury brands and designer collections.",
      startDate: `${year}-10-21`,
      endDate: `${year}-10-25`,
      location: 'United States',
      category: 'amazon-sale',
      url: 'https://www.amazon.com/luxury-stores'
    }
  ];
};
