

// let tabHeader = document.getElementsByClassName("tab-header")[0]

// let tabIndicator = document.getElementsByClassName("tab-indicators")[0];

// let tabBody = document.getElementsByClassName("tab-body")[0];

// let tabsPane = tabHeader.getElementsByTagName("div");

// for(let i=0 ; i>tabsPane.length; i++){
//   tabsPane[i].addEventListener("click", function(){
//     tabHeader.getElementsByClassName("active")[0].classList.romove("active");
//     tabsPane[i].classList.add("active");
//     tabBody.getElementsByClassName("active")[0].classList.remove("active");
//     tabBody.getElementsByTagName("div")[i].classList.add("active");

//     tabIndicator.getElementsByClassName.left = calc(calc(100%/4))
//   });
// }

// js part start
// document.getElementById("myDIV").style.transition = "all 2s";
// var trns = document.querySelectorAll(".tabs-cover");
// function transition(e){
//    trns[e].style.transition= "all 2s";

var btn = document.querySelectorAll(".tab-btn");
var tab = document.querySelectorAll(".tab")

function reset(){
  for(var i=0; i<tab.length; i++){
    tab[i].style.display = 'none';
    // tab[i].style.transition= "all 1s"
    btn[i].style.background = "teal"
  }
}

function tabOne(){
  reset();
  tab[0].style.display = 'block' ;
  btn[0].style.background = "aqua"
}
tabOne();

for(let a=0; a<btn.length; a++){
  btn[a].addEventListener("click", function(){
    reset();
    tab[a].style.display = "block";
    // tab[a].style.transition= "all 1s ease"
    btn[a].style.background = "aqua"

  })
}

