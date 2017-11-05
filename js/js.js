
function buttone(){
                var darkLayer = document.createElement('div'); // слой затемнения
                darkLayer.id = 'shadow'; // id чтобы подхватить стиль
                document.body.appendChild(darkLayer); // включаем затемнение
				 var modalWin = document.getElementById('popupWin'); // находим наше "окно"
                modalWin.style.display = 'block'; // "включаем" его
				 darkLayer.onclick = function () {  // при клике на слой затемнения все исчезнет
                    darkLayer.parentNode.removeChild(darkLayer); // удаляем затемнение
                    modalWin.style.display = 'none'; // делаем окно невидимым
				 return false;};
};

//function kk(){
//var hov1=document.querySelector('#l1');
//var hov2=document.querySelector('#l2');
//var hov3=document.querySelector('#l3');
//var divka=document.querySelectorAll('.cirle');
//hov1.addEventListener('click',function{
//cirle[0].style.background='white';
//cirle[1].style.background='none';
//cirle[2].style.background='none';
//});
//hov2.addEventListener('click',function{
//cirle[0].style.background='none';
//cirle[1].style.background='white';
//cirle[2].style.background='none';
//});
//hov3.addEventListener('click',function{
//cirle[0].style.background='none';
//cirle[1].style.background='none';
//cirle[2].style.background='white';
//});
//};
//function podpiska(){
  //              var okno = document.createElement('div'); // слой затемнения
    //            okno.id = 'window'; // id чтобы подхватить стиль
      //          document.body.appendChild(okno); // включаем затемнение
		//		 var frame = document.getElementById('win'); // находим наше "окно"
          //      frame.style.display = 'block'; // "включаем" его
			//	okno.onclick = function () {  // при клике на слой затемнения все исчезнет
              //      okno.parentNode.removeChild(okno); // удаляем затемнение
                //    frame.style.display = 'none'; // делаем окно невидимым
				 //return false;};
//};