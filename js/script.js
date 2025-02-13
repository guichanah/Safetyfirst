const swiper = new Swiper('#mainvisual .swiper', {
    // Optional parameters
    
    loop: true,
    spaceBetween: 30,
    loop: true,
    effect: "fade",//전환효과
    speed:200, //전환시간
    slideActiveClass:"active", //활성화된 슬라이드 요소의 클래스
    autoplay: {//autoplay 자동전환
    delay: 4000, //2.5초(=1500밀리초)마다 전환됨.
    disableOnInteraction: false,},

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
        clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


  //product1
  const gloveData = {
    cotton: [
        { img: "image/cotton40g.png", name: "면장갑 400g 검정", quantity: "300켤레", feature: "중국산", info: "10G 원사" },
        { img: "image/cotton50g.png", name: "면장갑 500g 파랑", quantity: "300켤레", feature: "중국산", info: "10G 원사" },
        { img: "image/dot.png", name: "도트장갑", quantity: "300켤레", feature: "중국산", info: "면 100%, 라텍스" },
        { img: "image/driver.png", name: "예식장갑", quantity: "1000켤레", feature: "중국산", info: "민자 25㎝ 18g"}
    ],
    coated: [
        { img: "image/halfcoating.png", name: "반코팅 13G", quantity: "300켤레", feature: "베트남산", info: "원사, 돌가루함유" },
        { img: "image/whitecoating.png", name: "백코팅장갑", quantity: "100켤레", feature: "베트남산", info: "13G, 원사, 돌가루 무" },
        { img: "image/doublecoating.png", name: "황이중장갑", quantity: "100켤레", feature: "베트남산", info: "13G, 원사, 돌가루 an" },
        { img: "image/PUpalm.png", name: "PU팜코팅", quantity: "500켤레", feature: "베트남산", info: "폴리우레탄, L/M/S" }
    ],
    argon: [
        { img: "image/awg1.png", name: "알곤회색내피유1", quantity: "120켤레", feature: "회색돈피 3층", info: "내피 유, 덧댐 유" },
        { img: "image/awg6.png", name: "알곤백색내피유6", quantity: "120켤레", feature: "백색양피 1층", info: "내피 유, 덧댐 무" },
        { img: "image/awg15.png", name: "알곤밤색장형15", quantity: "120켤레", feature: "밤색염소1층 뒷면", info: "내피 유, 덧댐 유" },
        { img: "image/awg16.png", name: "프리미엄알곤장갑16", quantity: "120켤레", feature: "백색소가죽1층피", info: "내피 유, 덧댐 유" }
    ],
    welding: [
        { img: "image/welding1.png", name: "오지내피유A", quantity: "100켤레", feature: "소가죽3층피(A급)", info: "손등통가죽, 내피유" },
        { img: "image/welding2.png", name: "삼지내피유", quantity: "100켤레", feature: "소가죽3층피(B급)", info: "내피유" },
        { img: "image/welding3.png", name: "황등천장갑", quantity: "120켤레", feature: "소가죽3층피(B급)", info: "손등 노랑색 천, 내피유" },
        { img: "image/welding4.png", name: "땅콩장갑", quantity: "120켤레", feature: "소가죽3층피(C급)", info: " 땅콩보강" }
    ]
};

let currentCategory = "cotton";

function loadGloves(category) {
    const gloveContainer = document.getElementById("gloveContainer");
    gloveContainer.innerHTML = "";

    gloveData[category].forEach(item => {
        const gloveItem = document.createElement("div");
        gloveItem.classList.add("glove-item");
        gloveItem.innerHTML = `
            <a href="product.html?name=${encodeURIComponent(item.name)}">
                <img src="${item.img}" alt="${item.name}">
            </a>
            <div class="glove-info">
                <strong>품 명:</strong> ${item.name} <br>
                <strong>수 량:</strong> ${item.quantity} <br>
                <strong>특 성:</strong> ${item.feature} <br>
                <strong>정 보:</strong> ${item.info}
            </div>
        `;
        gloveContainer.appendChild(gloveItem);
    });

    currentCategory = category;
}

document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", function () {
        document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        this.classList.add("active");
        loadGloves(this.getAttribute("data-category"));
    });
});

        // 페이지 로드 시 기본값 설정
        loadGloves(currentCategory);

//product2
const productData = {
    safety1: [
        { img: "image/leatherapronM.png", name: "가죽앞치마 중", quantity: "50EA", feature: "소가죽 2조각", info: "60㎝×90㎝" },
        { img: "image/jeanapronM.png", name: "청앞치마 중", quantity: "100EA", feature: "청재질", info: "60㎝×70㎝" },
        { img: "image/jeanhoodW.png", name: "청두건 내피유", quantity: "100EA", feature: "겨울용", info: "버튼, 벨크로" },
        { img: "image/jeanhoodS.png", name: "청두건 내피무", quantity: "100EA", feature: "여름용", info: "버튼, 벨크로" }
    ],
    safety2: [
        { img: "image/jeansleeve.png", name: "청토시 겨울/여름", quantity: "100EA", feature: "겨울/여름", info: "우수한 시보리" },
        { img: "image/lethershoulder.png", name: "가죽어깨토시", quantity: "60EA", feature: "어깨끈", info: "손목 벨크로" },
        { img: "image/jeangaiterB.png", name: "청각반 B", quantity: "150켤레", feature: "일반형", info: "검정밴드, 벨크로" },
        { img: "image/skirtgaiter.png", name: "무재해치마각반", quantity: "200켤레", feature: "치마형", info: "무재해각반" }
    ],
    safety3: [
        { img: "image/raincoat1.png", name: "일회용우의", quantity: "300EA", feature: "백/황/청색", info: "PE신재" },
        { img: "image/raincoat2.png", name: "EVA우의", quantity: "100EA", feature: "백/황/청/적색", info: "EVA소재" },
        { img: "image/raincoat3.png", name: "신사우의 투피스", quantity: "30EA", feature: "곤색 L~3XL", info: "폴리에스터/PVC코팅" },
        { img: "image/raincoat4.png", name: "고급우의", quantity: "10EA", feature: "형광곤색/올형광 L~3XL", info: "안감올망사/PVC코팅" }
    ],
    safety4: [
        { img: "image/boots1.png", name: "패션여장화", quantity: "10켤레", feature: "230~250mm", info: "PVC신소재" },
        { img: "image/boots2.png", name: "패션장화 A", quantity: "10켤레", feature: "250~300mm", info: "PVC신소재" },
        { img: "image/boots3.png", name: "카프장화 A", quantity: "10켤레", feature: "250~300mm", info: "PVC신소재" },
        { img: "image/chesterboots.png", name: "가슴장화", quantity: "10켤레", feature: "230~300mm", info: "PVC체스터" }
    ],
    safety5: [
        { img: "image/workwear1.png", name: "용접자켓겨울", quantity: "15EA", feature: "L~3XL", info: "등판 통가죽" },
        { img: "image/workwear2.png", name: "용접멜빵바지", quantity: "10EA", feature: "L~3XL", info: "엉덩이부분 2중덧댐" },
        { img: "image/workwear3.png", name: "방진복원피스", quantity: "24EA", feature: "XL~3XL", info: "60gsm" },
        { img: "image/workwear4.png", name: "신호수조끼", quantity: "100EA", feature: "망사/천 L~3XL", info: "반사띠" }
    ]
};

let currentCategory1 = "safety1";
let displayedItems = 4;

function loadProducts(category, loadMore = false) {
    const container = document.getElementById("safetyContainer");

    if (!loadMore) {
        container.innerHTML = ""; // 새 카테고리 선택 시 초기화
        displayedItems = 4; // 처음 4개만 표시
    }

    let productsToShow = productData[category].slice(0, displayedItems);

    productsToShow.forEach(item => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");
        productItem.innerHTML = `
            <a href="product.html?name=${encodeURIComponent(item.name)}">
                <img src="${item.img}" alt="${item.name}">
            </a>
            <div class="product-info">
                <strong>품 명:</strong> ${item.name} <br>
                <strong>수 량:</strong> ${item.quantity} <br>
                <strong>특 성:</strong> ${item.feature} <br>
                <strong>정 보:</strong> ${item.info}
            </div>
        `;
        container.appendChild(productItem);
    });

    currentCategory1 = category;
    //toggleLoadMoreButton();
}

// 탭 클릭 이벤트
document.querySelectorAll(".safetytab").forEach(tab => {
    tab.addEventListener("click", function () {
        document.querySelector(".safetytab.active").classList.remove("active");
        this.classList.add("active");
        loadProducts(this.getAttribute("data-category"));
    });
});


// 페이지 로드 시 기본 데이터 표시
loadProducts(currentCategory1);



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
