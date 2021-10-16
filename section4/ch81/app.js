let d = new Date();
let val;
// d = Date.now();
// d = new Date(2020,11,12,5,10,30,0);
// d = new Date(10000000000000);
// d = d.toString();
d = d.toDateString();
d = new Date("2020-12-31");
d = new Date("2020/12/31");
val = d.getDate();
val = d.getDay();
val = d.getTime();
val = d.getMilliseconds();
val = d.getUTCMilliseconds();
val = d.getHours();
val = d.getUTCHours();

let days = 100;
const newDate = new Date(Date.now() + (days *24*60*60*1000));
console.log(newDate);

console.log(val);