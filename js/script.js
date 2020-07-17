// document.getElementById('burger');
// document.getElementsByClassName('className');
// document.getElementsByTagName('br');
// document.querySelector('.menu');
// document.querySelectorAll('i');

var burg = document.getElementById('burger');
burg.onclick = function(){
    addMenu();
};

function addMenu(){
    document.getElementById('menu').classList.toggle('show');
}


$(window).scroll(function(){
    parallax();
  })
  function parallax() {
    var wScroll = $(window).scrollTop();
    $('.parallax-window').css('background-position','right '+(wScroll*0.75)+'px')
  }