const exNumbers = [10,15,7,1,4,2,5];
function genRandom(min,max){
  let num = Math.floor(Math.random() * (max-min+1)) + min;
  return exNumbers.includes(num)? genRandom(min,max) : num;
}

for(let x=0;x<20;x++){
  let min = 1;
  let max = 20;
  let num = genRandom(min,max);
  console.log(num);
}



/*const arr = [4,5,3,6,23,34445];
console.log(arr.includes(65));

function member(val){
  return (arr.includes(val)? "yes" : "no");
}*/