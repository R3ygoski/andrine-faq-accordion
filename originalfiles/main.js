
let isClicked = true;
let image = document.querySelector("#image")

function showMore(){
const button = document.querySelector("#button1");
const content = document.querySelector("#content-1");
if(isClicked){
  image.src = "assets/images/icon-minus.svg";
  content.style.display = "inline";
  isClicked = false;
} else {
  image.src = "assets/images/icon-plus.svg";
  content.style.display = "none"
  isClicked = true;
  return
}
}


  




