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