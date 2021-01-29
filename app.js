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
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const image = document.getElementById('image');
const title = document.querySelector('.title');
const description = document.querySelector('.description');
const images = ['mic.png','unnamed.jpg'];
const titles = ['<a href="https://findpopstar.tk" target="__blank">나와 닮은 팝스타 찾기</a>','<a href="https://almangs.cf" target="__blank">알맹쓰들을 위한 영어보관함</a>'];
const descriptions = ['머신러닝을 기반으로 한 믿을 수 있는 닮은 팝스타 찾기 테스트입니다!<br>JavaScript를 이용하여 빌드하였습니다','유튜브와 연결하여 간단하게 만들다 알간지님의 요청으로 제작이 중단된 사이트입니다.'];

let checker = 0

function goNext(){
    if(checker == images.length-1){
       checker = 0 
    } else {
        checker += 1;
    };
    image.src = images[checker];  
    title.innerHTML = titles[checker];
    description.innerHTML = descriptions[checker];    
};

function goPrevious(){
    if(checker == 0){
        checker = images.length-1; 
     } else {
         checker -= 1;
     };
     console.log(checker)
     image.src = images[checker];  
     title.innerHTML = titles[checker];
     description.innerHTML = descriptions[checker];    
};

previous.addEventListener('click',goNext);
next.addEventListener('click',goPrevious);