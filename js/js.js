
function buttone(){
                var darkLayer = document.createElement('div'); 
                darkLayer.id = 'shadow'; 
                document.body.appendChild(darkLayer); 
				 var modalWin = document.getElementById('popupWin'); 
                modalWin.style.display = 'block'; 
				 darkLayer.onclick = function () { 
                    darkLayer.parentNode.removeChild(darkLayer); 
                    modalWin.style.display = 'none';  
				 return false;};
};

function but(){
				 var darkLayer = document.createElement('div');
                darkLayer.id = 'shadow'; 
                document.body.appendChild(darkLayer); 
				 var modalwind = document.getElementById('popupWind');
                modalwind.style.display = 'block'; 
				 darkLayer.onclick = function () {  
                    darkLayer.parentNode.removeChild(darkLayer); 
                    modalwind.style.display = 'none'; 
				 };

				 var close = document.querySelector('.close');
				 close.addEventListener('click', function (evt){
					evt.preventDefault();
					popupWriteUs.classList.remove('show');
});
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
//    конец Слайдера
    
});
