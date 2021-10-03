const el = document.querySelector('div.first');
console.dir(el);

for(let i=0;i<el.children.length;i++){
  console.log(el.children[i].textContent);
  console.log(el.children[i]);
}

for(let i=0;i<el.childNodes.length;i++){
  console.log(el.childNodes[i].textContent);
  console.log(el.childNodes[i]);
}

el.childNodes.forEach(function(ele,index){
  console.log(ele);
})