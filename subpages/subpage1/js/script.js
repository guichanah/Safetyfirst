//var menubtn = new EzenAddClass(".button");


var topmenu = new EzenScrollClass("header",{
    baseline:10,
    //markers: true
}); 

//모바일메뉴 및 서브메뉴
var btns = document.querySelectorAll(".btn");

       btns.forEach(function(btn){
        btn.addEventListener("click",function(){
            //다른 요소에 들어간 "active" 지우기
            btns.forEach(function(re){
                if(btn !== re)/*자기자신을 클릭 시 다시 닫히는 조건*/ 
                re.parentElement.classList.remove("active");
            });

            btn.parentElement.classList.toggle("active");
        });

       })
        console.log(btns);



//메뉴영역 스크립트

var mobilemenubtn = document.querySelector(".openmenu");
var mobilemenu = document.querySelector("#mobilemenu");

mobilemenubtn.addEventListener("click", function(){
    mobilemenu.classList.toggle("active");
});
