
window.onload = function () {
    form.reset();
};


const validateForm = (e) => {
    switch (e.target.name) {
        case 'fname':
            validateField(expresions.fname, e.target, 'fname');
            break;
        case 'lname':
            validateField(expresions.lname, e.target, 'lname');
            break;
        case 'email':
            validateField(expresions.email, e.target, 'email');
            break;
        case 'subject':
            validateField(expresions.subject, e.target, 'subject');
            break;
        case 'message':
            validateField(expresions.message, e.target, 'message');
            break;
    }
}

const validateField = (expresion, input, field) => {
    if (expresion.test(input.value)) {
        document.querySelector(`#${field}-group .form-field-error`).classList.remove('form-field-error-active');
        document.querySelector(`#${field}-group`).classList.remove('input-container-extra-margin');
        document.querySelector(`#${field}-group i`).classList.add('fa-check-circle');
        document.querySelector(`#${field}-group i`).classList.add('form-icon-ok');
        document.querySelector(`#${field}-group i`).classList.remove('fa-times-circle');
        document.querySelector(`#${field}-group i`).classList.remove('form-icon-error');
        fields[field] = true;
    } else {
        document.querySelector(`#${field}-group .form-field-error`).classList.add('form-field-error-active');
        document.querySelector(`#${field}-group`).classList.add('input-container-extra-margin');
        document.querySelector(`#${field}-group i`).classList.add('fa-times-circle');
        document.querySelector(`#${field}-group i`).classList.add('form-icon-error');
        document.querySelector(`#${field}-group i`).classList.remove('fa-check-circle');
        document.querySelector(`#${field}-group i`).classList.remove('form-icon-ok');
        fields[field] = false;
    }
}

const validateOptions = (input, field) => {
    document.querySelector(`#${field}-group .form-field-error`).classList.remove('form-field-error-active');
    document.querySelector(`#${field}-group`).classList.remove('input-container-extra-margin');
    fields[field] = true
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
});
message.addEventListener('keyup', validateForm);
message.addEventListener('blur', validateForm);
tphone.forEach((input) => {
    input.addEventListener('change', validateForm);
});

const validateFormOnSubmit = () => {
    if (!document.querySelectorAll('input[name="tphone"]:checked').length) {
        document.querySelector(`#tphone-group .form-field-error`).classList.add('form-field-error-active');
    }
    if (reason.options[reason.selectedIndex].value === "none") {
        document.querySelector(`#reason-group .form-field-error`).classList.add('form-field-error-active');
    }
    validateField(expresions.fname, fname, 'fname');
    validateField(expresions.lname, lname, 'lname');
    validateField(expresions.email, email, 'email');
    validateField(expresions.subject, subject, 'subject');
    validateField(expresions.message, message, 'message');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateFormOnSubmit();
    const isFormValid = Object.values(fields).every(
        value => value === true
    );
    if (isFormValid) {
        Object
            .keys(fields)
            .filter(field => field != 'tphone' && field != 'reason')
            .map(nf => {
                document.querySelector(`#${nf}-group i`).classList.remove('fa-check-circle');
                document.querySelector(`#${nf}-group i`).classList.remove('form-icon-ok');
            })
        modal.classList.add('is-visible');
        form.reset();

    }
});


closeModal.addEventListener('click', () => {
    modal.classList.remove('is-visible');
})
document.addEventListener('click', () => {
    modal.classList.remove('is-visible');
})
document.addEventListener('keyup', e => {
    if (e.key == 'Escape' && document.querySelector('.modal.is-visible')) {
        modal.classList.remove('is-visible');
    }
});