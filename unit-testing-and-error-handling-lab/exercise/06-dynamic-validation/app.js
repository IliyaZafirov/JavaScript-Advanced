function validate() {
    let reg = /^([a-z]+)@([a-z]+).([a-z]+)$/;
    let inputElement = document.getElementById('email');

    inputElement.addEventListener('change',checkEmail);

    function checkEmail(event) {
        if(reg.test(event.target.value)){
            event.target.removeAttribute('class');
            return;
        }
        event.target.className = 'error';
    }
 }