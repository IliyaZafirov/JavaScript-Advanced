// ⦁	Time to Walk
// Write a function that calculates how long it takes a student to get to university. 
// The function takes three numbers:
// ⦁	The first is the number of steps the student takes from their home to the university
// ⦁	The second number is the length of the student's footprint in meters
// ⦁	Тhe third number is the student speed in km/h
// Every 500 meters the student rests and takes a 1-minute break.
// Calculate how long the student walks from home to university and print on the console the result in the following format: `hours:minutes:seconds`.
// The input comes as three numbers.
// The output should be printed on the console.


function solve(steps, footprint, speed) {

    let distance = steps * footprint;
    let speedMetersInSec = speed / 3.6
    let time = distance / speedMetersInSec;
    let rest = Math.floor(distance / 500);
    time += rest * 60;

    let sec = time % 60;
    let min = Math.floor(time / 60);
    let hours = Math.floor(min / 60);

    hours = hours < 10 ? `0${hours}` : `${hours}`;
    min = min < 10 ? `0${min}` : `${Math.round(min)}`;
    sec = sec < 10 ? `0${sec}` : `${Math.round(sec)}`;
    
    console.log(`${hours}:${min}:${Math.round(sec)}`);

}
solve(4000, 0.60, 5)