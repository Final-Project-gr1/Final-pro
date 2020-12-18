var wdW = window.innerWidth;

$(document).ready(function () {
  
function moveRight() {
  $(".move-item-l").animate({
    left: 250
  }, 800)
};

function returnRight() {
  $(".move-item-l").animate({
    left: -200
  }, 0)
};

function returnLeft() {
  $(".move-item-l").animate({
    left: 550
  }, 0)
};

function moveLeft() {
  $(".move-item-l").animate({
    left: 150
  }, 700)
};

function dropClick(ques, drop) {
  ques.click(() => {
    drop.toggle(300);
  });
};

function dropClickOut(ques, drop) {
  ques.on("clickout", () => {
    if (drop.css("display") == 'block') {
      drop.toggle(300);
    };
  });
};

function drcActive(ques, drop, func1, func2) {
  func1(ques, drop);
  func2(ques, drop);
};
  moveRight();
  $("#cl-1").click(function () {
    returnLeft();
    moveLeft();
  });
  $("#cl-2").click(function () {
    returnRight();
    moveRight();
  })
  drcActive($("#q1"), $("#dr1"), dropClick, dropClickOut);
  drcActive($("#q2"), $("#dr2"), dropClick, dropClickOut);
  drcActive($("#q3"), $("#dr3"), dropClick, dropClickOut);
  drcActive($("#q4"), $("#dr4"), dropClick, dropClickOut);
  function scrollFade(data){
    data.scrollFadeIn();
  }
  scrollFade($(".template"));



});
var fixer = document.querySelector('.fixer')
window.addEventListener('scroll',()=>{
  var x = window.scrollY
   if(x > 50){
      fixer.style = 'position: fixed; width:100%; top:0;'
      
   }
   else{ 
      fixer.style = ''
  }
});
