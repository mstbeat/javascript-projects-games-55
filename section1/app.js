const numArray = [4,453,12,34,234,2,3,443,23434,2355];
let mapArray = numArray.map(function(x){
  console.log(x);
  return x*50;
})
console.log(mapArray);