const inputSelect = document.querySelector("input[name='newItem']");
const mainList = document.querySelector("ul");
const allListItems = document.querySelectorAll("li");
for(let x=0;x<allListItems.length;x++){
  allListItems[x].addEventListener("click",myList);
}

function myList(){
  let temp = this.classList.toggle("red");
  if(temp){
    let span = document.createElement("span");
    span.textContent = " X";
    span.addEventListener("click",function(){
      this.parentElement.remove();
    })
    this.appendChild(span);
  }else{
    this.getElementsByTagName("span")[0].remove();
  }
}