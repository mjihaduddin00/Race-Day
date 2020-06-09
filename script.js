let raceNumber = Math.floor(Math.random() * 1000);
let earlyRunner = true;
let runnerAge = '20';

if (runnerAge > 18 && earlyRunner) {
  raceNumber += 1000;
}

if (runnerAge > 18 && earlyRunner) {
  console.log(`You will begin racing at 9:30 AM. Here is your race number: ${raceNumber}`);
} else if (runnerAge > 18 && !earlyRunner) {
  console.log(`You will begin racing at 11:00 AM. Here is your race number: ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`Youth registrants run at 12:30 PM (regardless of registration. Here is your race number: ${raceNumber}`);
} else {
  console.log(`Please visit the registration desk. Thanks!`);
}