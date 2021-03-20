let raceNumber = Math.floor(Math.random()* 1000);
let earlyAdults = true;
let runnerAge = 19;

if (earlyAdults === false) {
    raceNumber += 1000;
}
if (runnerAge >18 && earlyAdults === true && raceNumber < 1000); {
    console.log(`Your race starts at 9.30 and your race number is: ${raceNumber}`);
} else if( runnerAge > 18 || earlyAdults === true); {
  console.log( `Your race starts at 11:00 and your race number is: ${raceNumber}`);
} else if(runnerAge< 18 && earlyAdults === false); {
   console.log(`Your race starts at 12:30 and your race number is: ${raceNumber}`);
} else {
    console.log('Good luck to everyone');
}

