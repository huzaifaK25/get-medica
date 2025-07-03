// generates weekdays - param todays date
export function getWeekDays(start = new Date()) {
  // Find Monday of the same week
  const monday = new Date(start);
  // set monday: (todays date - (days after monday)) days: Sun=0/Mon=1...
  monday.setDate(start.getDate() - ((start.getDay() + 6) % 7));
  // for 7 days of the week
  const week = [];
  const date = monday;
  for (let i = 0; i < 7; i++) {
    // increments date by one day
    if (i === 0) {
      // set day 1 to monday
      date.setDate(monday.getDate() + 0);
    }
    // keep adding 1 day
    else date.setDate(monday.getDate() + 1);
    // creates obj of date, day and id and pushes in to array
    week.push({
      id: i,
      dayName: date.toLocaleDateString('en-US', { weekday: 'short' }), // e.g. "Thursday"
      dayDate: String(date.getDate()).padStart(2, '0'), // e.g. "03"
    });
  }
  return week;
}
