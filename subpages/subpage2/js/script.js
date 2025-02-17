//var menubtn = new EzenAddClass(".button");



var topmenu = new EzenScrollClass("header",{
    baseline:10,
    //markers: true
}); 


// //모바일메뉴 및 서브메뉴
// var btns = document.querySelectorAll(".btn");

//        btns.forEach(function(btn){
//         btn.addEventListener("click",function(){
//             //다른 요소에 들어간 "active" 지우기
//             btns.forEach(function(re){
//                 if(btn !== re)/*자기자신을 클릭 시 다시 닫히는 조건*/ 
//                 re.parentElement.classList.remove("active");
//             });

//             btn.parentElement.classList.toggle("active");
//         });

//        })
//         console.log(btns);



//사이드메뉴
var pdtbtns = document.querySelectorAll(".btn1");

       pdtbtns.forEach(function(btn1){
        btn1.addEventListener("click",function(){
            //다른 요소에 들어간 "active" 지우기
            pdtbtns.forEach(function(re){
                if(btn1 !== re)/*자기자신을 클릭 시 다시 닫히는 조건*/ 
                re.parentElement.classList.remove("active");
            });

            btn1.parentElement.classList.toggle("active");
        });

       })
        console.log(pdtbtns);





//탭메뉴
var btnss = document.querySelectorAll(".submenu2 a");

        function removeActive(b,t){
            var actives = document.querySelectorAll(".productlist .active");
            var actives_btn = document.querySelectorAll(".active_btn");            
            
            //NodeList를 배열로 변환하는 과정
            var actives = Array.from(actives);
            t = Array.from(t);
            //filter메소드를 통해 t배열과 동일한 요소를 제거한 후 새로운 배열 생성
            var re = actives.filter((x)=> !t.includes(x));
            re.forEach(function(at){
                if(at!==b && at!==t) at.classList.remove("active");
            });
            actives_btn.forEach(function(at){
                if(at!==b) at.classList.remove("active_btn");
            });
        }

        btnss.forEach(function(btn2){
            btn2.addEventListener("click",function(e){
                e.preventDefault(); //태그의 기본이벤트 실행을 막는다.
                var href = this.getAttribute("href");

                if(href == "All"){
                var targets = document.querySelectorAll(".productlist .productlist1");
            }else{
                var targets = document.querySelectorAll(href);
            }
                targets.forEach(function(target){
                    target.classList.add("active");
                });
                this.classList.toggle("active_btn");
                removeActive(this, targets);
            }); 
        });


//메뉴영역 스크립트

// var mobilemenubtn = document.querySelector(".openmenu");
// var mobilemenu = document.querySelector("#mobilemenu");

// mobilemenubtn.addEventListener("click", function(){
//     mobilemenu.classList.toggle("active");
// });


//페이지 로드 시 특정 상품 보이기
const num = new URLSearchParams(window.location.search).get("num");

if(!isNaN(num)){
    i = num-1;
    var target_arr = document.querySelectorAll(".submenu2 a");
    var target_btn = target_arr[i];
    target_btn.classList.add("active_btn");
    var target_text = target_btn.getAttribute("href");    
    var targetss = document.querySelectorAll(target_text);

    var parent1 = target_btn.parentElement.parentElement.parentElement;

    console.log(parent1);
    parent1.classList.toggle("active");
    targetss.forEach(function(target){
        target.classList.add("active");
    });
    //console.log(pdtbtns);

}