const fullDate = document.getElementById("fullDate");
const UTCTime = document.getElementById("utcTime");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const d = new Date();

let day = days[d.getDay()];
let dayNo = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();

let dayWithSuffix;
if ((day) => 11 && day <= 13) {
  dayWithSuffix = dayNo + "th";
} else {
  switch (day % 10) {
    case 1:
      dayWithSuffix = dayNo + "st";
      break;
    case 2:
      dayWithSuffix = dayNo + "nd";
      break;
    case 3:
      dayWithSuffix = dayNo + "rd";
      break;
    default:
      dayWithSuffix = dayNo + "th";
  }
}

// fullDate.innerHTML = `${day}, ${dayWithSuffix} of ${month}, ${year}.`;
fullDate.innerHTML = day;

const milliseconds = d.getUTCMilliseconds();

UTCTime.innerHTML = milliseconds;

// const currentDate = new Date();
// const milliseconds = currentDate.getUTCMilliseconds();
// console.log(milliseconds);

// const currentDate = new Date();
// const currentTimeInMillis = currentDate.getTime();
// console.log(currentTimeInMillis);

// A shorter way to write this instead of writting all the days of the week and the months in a year

// function getFormattedDate(date) {
//   const day = date.getDate();
//   const month = date.toLocaleString('default', { month: 'long' });
//   const year = date.getFullYear();

//   let dayWithSuffix;

//   // Add the appropriate suffix to the day
//   if (day >= 11 && day <= 13) {
//     dayWithSuffix = day + 'th';
//   } else {
//     switch (day % 10) {
//       case 1:
//         dayWithSuffix = day + 'st';
//         break;
//       case 2:
//         dayWithSuffix = day + 'nd';
//         break;
//       case 3:
//         dayWithSuffix = day + 'rd';
//         break;
//       default:
//         dayWithSuffix = day + 'th';
//     }
//   }

//   return `${dayWithSuffix} ${month} ${year}`;
// }

// const currentDate = new Date();
// const formattedDate = getFormattedDate(currentDate);

// console.log(formattedDate); // Output: "8th September 2023"
