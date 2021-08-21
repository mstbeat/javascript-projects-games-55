const lis = document.querySelectorAll("li");
for(let x=0;x<lis.length;x++){
  console.log(lis[x]);
  lis[x].addEventListener("mouseover",function(e){
    // this.classList.add("red");
    lis[x].style.color = "red";
    this.style.backgroundColor = "yellow";
  })
  lis[x].addEventListener("mouseout",function(e){
    // this.classList.remove("red");
    this.style.backgroundColor = "";
    lis[x].style.color = "";
  })
}