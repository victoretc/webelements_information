document.addEventListener('DOMContentLoaded', function() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const agreement = document.getElementById('agreement');
    const registerButton = document.getElementById('registerButton');

    function checkFormValidity() {
        if (username.value && password.value && agreement.checked) {
            registerButton.disabled = false;
        } else {
            registerButton.disabled = true;
        }
    }

    username.addEventListener('input', checkFormValidity);
    password.addEventListener('input', checkFormValidity);
    agreement.addEventListener('change', checkFormValidity);
});
