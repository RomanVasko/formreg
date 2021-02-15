
$(document).ready(function () {

    let fullName = $('#FullName');
    let email = $('#email');
    let checkBox = $("#checkbox");
    let btn = $('#btn');
    let account = $('#account');
    let password = $('#password');
    let repeatPassword = $('#repeat-password');

    fullName.keypress(function (event) {
        let number = parseInt(event.key);
        if (isNaN(number) === false) {
            event.preventDefault();
        }
    });

    $('#username').keypress(function (event) {
        if (event.key === '.' || event.key === ',') {
            event.preventDefault();
        }
    });

    checkBox.on("click", function () {
        if ($(this).is(":checked")) {
            console.log('Согласен');
        } else {
            console.log('Не согласен');
        }
    });

    let iText = $('input');
    let codeSuccessful = true;
    let errorInput = $('.error-input');
    errorInput.hide();
    btn.on('click', function () {
        errorInput.hide();
        for (let i = 0; i < 5; i++) {
            if ($(iText[i]).val() === '') {
                $(iText[i]).siblings('.error-input').show();
                $(iText[i]).css('border-bottom-color', 'red');
                codeSuccessful = false;
            }
        }

        if (password.val() !== repeatPassword.val()) {
            password.siblings('.error-input').text('Password mismatch!').show();
            repeatPassword.siblings('.error-input').text('Password mismatch!').show();
            codeSuccessful = false;
        }

        if(checkBox.is(":checked") === false) {
            alert('You do not Agree to our Terms');
            codeSuccessful = false;
        }
    });

    account.on('click', () => {
        $('#homeworks-text').text('Log in to the system');
        fullName.parent().remove();
        email.parent().remove();
        repeatPassword.parent().remove();
        checkBox.parent().remove();
        btn.val('Sign In');
        account.remove();
    });

});

