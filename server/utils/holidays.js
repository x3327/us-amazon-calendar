export const getFederalHolidays = (year) => {
  return [
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
      startDate: getNthWeekdayOfMonth(year, 0, 1, 3),
      endDate: getNthWeekdayOfMonth(year, 0, 1, 3),
      location: 'United States',
      category: 'federal',
      url: 'https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/'
    },
    {
      id: `presidents-day-${year}`,
      title: "Presidents' Day",
      description: "Federal holiday honoring all U.S. presidents, particularly George Washington and Abraham Lincoln.",
      startDate: getNthWeekdayOfMonth(year, 1, 1, 3),
      endDate: getNthWeekdayOfMonth(year, 1, 1, 3),
      location: 'United States',
      category: 'federal',
      url: 'https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/'
    },
    {
      id: `memorial-day-${year}`,
      title: "Memorial Day",
      description: "Federal holiday honoring military personnel who have died while serving in the U.S. Armed Forces.",
      startDate: getLastWeekdayOfMonth(year, 4, 1),
      endDate: getLastWeekdayOfMonth(year, 4, 1),
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
      description: "Federal holiday celebrating the Declaration of Independence and the birth of the United States.",
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
      startDate: getNthWeekdayOfMonth(year, 8, 1, 1),
      endDate: getNthWeekdayOfMonth(year, 8, 1, 1),
      location: 'United States',
      category: 'federal',
      url: 'https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/'
    },
    {
      id: `columbus-day-${year}`,
      title: "Columbus Day",
      description: "Federal holiday commemorating the arrival of Christopher Columbus in the Americas.",
      startDate: getNthWeekdayOfMonth(year, 9, 1, 2),
      endDate: getNthWeekdayOfMonth(year, 9, 1, 2),
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
      startDate: getNthWeekdayOfMonth(year, 10, 4, 4),
      endDate: getNthWeekdayOfMonth(year, 10, 4, 4),
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
    }
  ];
};

function getNthWeekdayOfMonth(year, month, weekday, n) {
  const date = new Date(year, month, 1);
  let count = 0;
  while (date.getMonth() === month) {
    if (date.getDay() === weekday) {
      count++;
      if (count === n) {
        return formatDate(date);
      }
    }
    date.setDate(date.getDate() + 1);
  }
  return formatDate(date);
}

function getLastWeekdayOfMonth(year, month, weekday) {
  const date = new Date(year, month + 1, 0);
  while (date.getDay() !== weekday) {
    date.setDate(date.getDate() - 1);
  }
  return formatDate(date);
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
