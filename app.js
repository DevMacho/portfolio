// Show

const emailBTN = document.getElementById('email');
const emailText = document.getElementById('js-email');


function show(){
    if(emailText.classList.contains('hide')){
        emailText.classList.add('show');
        emailText.classList.remove('hide');
    } else {
        emailText.classList.remove('show');
        emailText.classList.add('hide'); 
    }

}

emailBTN.addEventListener('click',show);


// Works slider
const next = document.getElementById('previous');
const previous = document.getElementById('next');
const image = document.getElementById('image');
const title = document.querySelector('.title');
const description = document.querySelector('.description');

//작업물 클래스
const works = [
    {
        id: 1,
        image: 'mic.png',
        title: '<a href="https://findpopstar.tk" target="__blank">나와 닮은 팝스타 찾기</a>',
        description: '머신러닝을 기반으로 한 믿을 수 있는 닮은 팝스타 찾기 테스트입니다!<br>JavaScript를 이용하여 빌드하였습니다.'
    },
    {
        id: 2,
        image: 'unnamed.jpg',
        title: '<a href="https://almangs.cf" target="__blank">알맹쓰들을 위한 영어보관함</a>',
        description: '유튜브와 연결하여 간단하게 만들다<br>알간지님의 요청으로 제작이 중단된 사이트입니다.'
    },
    {
        id: 3,
        image: 'icon.png',
        title: '<a href="https://github.com/nyaco0125/Jbot-FrontEnd" target="__blank">진이봇</a></a>',
        description: '디스코드 봇 메이킹 팀인 진이봇의 웹사이트 제작을 맡았습니다.<br>Email.js로 팀원신청을 이메일로 받을 수 있는 시스템을 구현하였습니다.'
    },
    {
        id: 4,
        image: 'dora.png',
        title: '<a href="https://doraemon-raccoon-website.vercel.app/" target="__blank">도라에몽너구리</a>',
        description: '래퍼 도라에몽너구리의 공식 웹사이트 제작을 맡았습니다.<br>디자인에 신경을 쓴 프로젝트입니다.(제작중)'
    }
];

//현재 슬라이더
let currentSlide = 0;

//슬라이더의 항목들을 변경한다
function controlSlider(slide){
    const item = works[slide];
    image.src = item.image;
    title.innerHTML = item.title;
    description.innerHTML = item.description;
};

//페이지 로딩이 완료되었을 때 현재 슬라이드를 보여줌
window.addEventListener("DOMContentLoaded", controlSlider(currentSlide));

//슬라이더를 다음 페이지로 넘겨줌
next.addEventListener('click',()=>{
    currentSlide = currentSlide + 1;
    if(currentSlide > works.length-1){
        currentSlide = 0;
        controlSlider(currentSlide);
    } else {
        controlSlider(currentSlide);
    }
});


//슬라이더를 이전 페이지로 넘겨줌
previous.addEventListener('click',()=>{
    currentSlide = currentSlide - 1;
    if(currentSlide < 0){
        currentSlide = works.length-1;
        controlSlider(currentSlide);
    } else {
        controlSlider(currentSlide);
    }
});

//price calculator
const defaultCheckBox = document.getElementById('default');
const hostingCheckBox = document.getElementById('hosting');
const upgradeCheckBox = document.getElementById('upgrade');
const monthlyCheckBox = document.getElementById('monthly');
const discountCheckBox = document.getElementById('discount');
const result = document.getElementById('result');
const minPriceResult = document.getElementById('minPrice');
const maxPriceResult = document.getElementById('maxPrice');
let minPrice = 0;
let maxPrice = 0;

defaultCheckBox.addEventListener('click',defaultAddOption);
hostingCheckBox.addEventListener('click',hostingAddOption);
upgradeCheckBox.addEventListener('click',upgradeAddOption);
monthlyCheckBox.addEventListener('click',monthlyAddOption);
discountCheckBox.addEventListener('click',discountAddOption);

function defaultAddOption(){
    if(defaultCheckBox.checked == true){
        minPrice += 1000;
        maxPrice += 3000;
    } else {
        minPrice -= 1000;
        maxPrice -= 3000;
    };
    console.log(maxPrice,minPrice)
    result.classList.remove('hide');
    minPriceResult.innerText = `최소가격: ${minPrice}원`;
    maxPriceResult.innerText = `최대가격: ${maxPrice}원`;
    if(minPrice == 0 && maxPrice == 0){
        result.classList.add('hide');
    };
};

function hostingAddOption(){
    if(hostingCheckBox.checked == true){
        minPrice += 1000;
        maxPrice += 1000;
    } else {
        minPrice -= 1000;
        maxPrice -= 1000;
    };
    console.log(maxPrice,minPrice)
    result.classList.remove('hide');
    minPriceResult.innerText = `최소가격: ${minPrice}원`;
    maxPriceResult.innerText = `최대가격: ${maxPrice}원`;
    if(minPrice == 0 && maxPrice == 0){
        result.classList.add('hide');
    };
};

function upgradeAddOption(){
    if(upgradeCheckBox.checked == true){
        minPrice += 1000;
        maxPrice += 10000;
    } else {
        minPrice -= 1000;
        maxPrice -= 10000;
    };
    console.log(maxPrice,minPrice)
    result.classList.remove('hide');
    minPriceResult.innerText = `최소가격: ${minPrice}원`;
    maxPriceResult.innerText = `최대가격: ${maxPrice}원`;
    if(minPrice == 0 && maxPrice == 0){
        result.classList.add('hide');
    };
};

function monthlyAddOption(){
    if(monthlyCheckBox.checked == true){
        minPrice += 1000;
        maxPrice += 1000;
    } else {
        minPrice -= 1000;
        maxPrice -= 1000;
    };
    console.log(maxPrice,minPrice)
    result.classList.remove('hide');
    minPriceResult.innerText = `최소가격: ${minPrice}원`;
    maxPriceResult.innerText = `최대가격: ${maxPrice}원`;
    if(minPrice == 0 && maxPrice == 0){
        result.classList.add('hide');
    };
};


function discountAddOption(){
    if(discountCheckBox.checked == true){
        minPrice -= 2000;
        maxPrice -= 2000;
    } else {
        minPrice += 2000;
        maxPrice += 2000;
    };
    console.log(maxPrice,minPrice)
    result.classList.remove('hide');
    minPriceResult.innerText = `최소가격: ${minPrice}원`;
    maxPriceResult.innerText = `최대가격: ${maxPrice}원`;
    if(minPrice == 0 && maxPrice == 0){
        result.classList.add('hide');
    };
};