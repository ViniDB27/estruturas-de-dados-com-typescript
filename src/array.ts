const avfTemp: number[] = [];

avfTemp[0] = 31.9;
avfTemp[1] = 35.3;
avfTemp[2] = 42;
avfTemp[3] = 38;
avfTemp[4] = 25.5;

console.log(avfTemp[0]);

// ---------------------------------------------------------

let daysOfWeek: string[] = [];

daysOfWeek[0] = 'Sunday';
daysOfWeek[1] = 'Monday';
daysOfWeek[2] = 'Tuesday';
daysOfWeek[3] = 'Wednesday';
daysOfWeek[4] = 'Thursday';
daysOfWeek[5] = 'Friday';
daysOfWeek[6] = 'Saturday';

console.log(daysOfWeek[0]);
console.log(daysOfWeek.length);

const daysOfWeekTwo: string[] = new Array<string>('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

console.log(daysOfWeekTwo[0]);
console.log(daysOfWeekTwo.length);

// ---------------------------------------------------------

daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// console.log(daysOfWeekTwo);

for (const day of daysOfWeek) {
    console.log(day);
}

// ---------------------------------------------------------






