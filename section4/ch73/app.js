let myStr = " Hello World JavaScript 123 this works, I love JavaScript ";
console.log(myStr.length);
console.log(myStr);
console.log(myStr.trim());
console.log(myStr.toLocaleLowerCase().trim());
console.log(myStr.toUpperCase());
console.log(myStr.split(' '));
console.log(myStr.split(', '));
console.log(myStr.charAt(9));
console.log(myStr[9]);
console.log(myStr[7]);
console.log(myStr.slice(7,12));
console.log(myStr.substring(7,12));
console.log(myStr.substr(7,5));

let output;
output = myStr.replace("love","enjoy");
output = myStr.indexOf('JavaScript');
output = myStr.lastIndexOf('JavaScript');
output = myStr.search('JavaScript');
console.log(output);
