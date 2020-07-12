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
    document.getElementsById('menu').classList.toggle('show');
}