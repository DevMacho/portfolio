const submit = document.getElementById('submit');
const form = document.getElementById('form');
(function(){
    emailjs.init("user_6W7H9JW9czHKpNYZnOCUw");
 })();

function sendEmail(event){
    event.preventDefault();
    emailjs.send('service_6vt0j4e', 'template_udyobb6', {
        email: document.getElementById('input-email').value,
        type: document.getElementById('web').value
    }).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('외주 요청이 정상적으로 완료되었습니다. 최대한 빠른 시일내에 답변드리겠습니다.');
    }, function(error) {
        console.log('FAILED...', error);
        alert('외주 요청에 실패하였습니다. 다시 시도하거나 직접 연락해주세요.');
    });
};

 
 form.addEventListener('submit', sendEmail);
