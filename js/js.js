
function buttone(){
				var modalWin = document.querySelector('.popupWin');
                modalWin.style.display = 'flex';
                var close=document.querySelector('.esc');
                close.onclick = function () {
                    modalWin.style.display = 'none';
                    return false;
                };
};

function but(){
                var modalWind = document.querySelector('.popupWind');
                modalWind.style.display = 'flex';
                var closee=document.querySelector('.close');
                closee.onclick = function () {
                    modalWind.style.display = 'none';
                    return false;
				 };
};
document.addEventListener("DOMContentLoaded", function () {
    // Слайдер
    var label1=document.querySelector('#l1');
	var label2=document.querySelector('#l2');
	var label3=document.querySelector('#l3');
	var cDec=document.querySelectorAll('.cirle');

label1.addEventListener('click',function(){
    cDec[0].style.background='white';
    cDec[1].style.background='none';
    cDec[2].style.background='none';
});
label2.addEventListener('click',function(){
    cDec[0].style.background='none';
    cDec[1].style.background='white';
    cDec[2].style.background='none';
});
label3.addEventListener('click',function(){
    cDec[0].style.background='none';
    cDec[1].style.background='none';
    cDec[2].style.background='white';
});
// Слайдер
    
});
//Каталог
var hov1=document.querySelector('.nav1');
var hov2=document.querySelector('.nav2');
var hov3=document.querySelector('.nav3');
var hov4=document.querySelector('.nav4');
var hov5=document.querySelector('.nav5');
var hov6=document.querySelector('.nav6');

hov1.addEventListener('mouseover', function (evt) {
    evt.preventDefault();
    hov1.getElementsByTagName('img')[0].classList.add('hov');
    hov1.getElementsByTagName('div')[0].style.background='#e9b637';
});
hov1.addEventListener('mouseleave', function (evt) {
    evt.preventDefault();
    hov1.getElementsByTagName('img')[0].classList.remove('hov');
    hov1.getElementsByTagName('div')[0].style.background='#f0f0f0';
});
hov1.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    hov1.getElementsByTagName('img')[0].classList.add('hov');
    hov1.getElementsByTagName('div')[0].style.background='#e9b637';
    hov1.style.opacity='0.5';
});
hov1.addEventListener('mouseup', function (evt) {
    evt.preventDefault();
    hov1.style.opacity='1';
});

hov2.addEventListener('mouseover', function (evt) {
    evt.preventDefault();
    hov2.getElementsByTagName('img')[0].classList.add('hov');
    hov2.getElementsByTagName('div')[0].style.background='#e9b637';
});
hov2.addEventListener('mouseleave', function (evt) {
    evt.preventDefault();
    hov2.getElementsByTagName('img')[0].classList.remove('hov');
    hov2.getElementsByTagName('div')[0].style.background='#f0f0f0';
});
hov2.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    hov2.getElementsByTagName('img')[0].classList.add('hov');
    hov2.getElementsByTagName('div')[0].style.background='#e9b637';
    hov2.style.opacity='0.5';
});
hov2.addEventListener('mouseup', function (evt) {
    evt.preventDefault();
    hov2.style.opacity='1';
});

hov3.addEventListener('mouseover', function (evt) {
    evt.preventDefault();
    hov3.getElementsByTagName('img')[0].classList.add('hov');
    hov3.getElementsByTagName('div')[0].style.background='#e9b637';
});
hov3.addEventListener('mouseleave', function (evt) {
    evt.preventDefault();
    hov3.getElementsByTagName('img')[0].classList.remove('hov');
    hov3.getElementsByTagName('div')[0].style.background='#f0f0f0';
});
hov3.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    hov3.getElementsByTagName('img')[0].classList.add('hov');
    hov3.getElementsByTagName('div')[0].style.background='#e9b637';
    hov3.style.opacity='0.5';
});
hov3.addEventListener('mouseup', function (evt) {
    evt.preventDefault();
    hov3.style.opacity='1';
});

hov4.addEventListener('mouseover', function (evt) {
    evt.preventDefault();
    hov4.getElementsByTagName('img')[0].classList.add('hov');
    hov4.getElementsByTagName('div')[0].style.background='#e9b637';
});
hov4.addEventListener('mouseleave', function (evt) {
    evt.preventDefault();
    hov4.getElementsByTagName('img')[0].classList.remove('hov');
    hov4.getElementsByTagName('div')[0].style.background='#f0f0f0';
});
hov4.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    hov4.getElementsByTagName('img')[0].classList.add('hov');
    hov4.getElementsByTagName('div')[0].style.background='#e9b637';
    hov4.style.opacity='0.5';
});
hov4.addEventListener('mouseup', function (evt) {
    evt.preventDefault();
    hov4.style.opacity='1';
});

hov5.addEventListener('mouseover', function (evt) {
    evt.preventDefault();
    hov5.getElementsByTagName('img')[0].classList.add('hov');
    hov5.getElementsByTagName('div')[0].style.background='#e9b637';
});
hov5.addEventListener('mouseleave', function (evt) {
    evt.preventDefault();
    hov5.getElementsByTagName('img')[0].classList.remove('hov');
    hov5.getElementsByTagName('div')[0].style.background='#f0f0f0';
});
hov5.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    hov5.getElementsByTagName('img')[0].classList.add('hov');
    hov5.getElementsByTagName('div')[0].style.background='#e9b637';
    hov5.style.opacity='0.5';
});
hov5.addEventListener('mouseup', function (evt) {
    evt.preventDefault();
    hov5.style.opacity='1';
});

hov6.addEventListener('mouseover', function (evt) {
    evt.preventDefault();
    hov6.getElementsByTagName('img')[0].classList.add('hov');
    hov6.getElementsByTagName('div')[0].style.background='#e9b637';
});
hov6.addEventListener('mouseleave', function (evt) {
    evt.preventDefault();
    hov6.getElementsByTagName('img')[0].classList.remove('hov');
    hov6.getElementsByTagName('div')[0].style.background='#f0f0f0';
});
hov6.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    hov6.getElementsByTagName('img')[0].classList.add('hov');
    hov6.getElementsByTagName('div')[0].style.background='#e9b637';
    hov6.style.opacity='0.5';
});
hov6.addEventListener('mouseup', function (evt) {
    evt.preventDefault();
	hov6.style.opacity='1';
});