// Obtener elementos del formulario
const form = document.querySelector('.form');
const email = document.getElementById('email');
const name = document.getElementById('name');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateName(name) {
    return name.trim().length >= 4;
}

function validatePassword(password) {
    return password.length >= 8;
}

function validateConfirmPassword(password, confirmPassword) {
    return password === confirmPassword;
}

function showError(message) {
    alert(message);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const emailValue = email.value.trim();
    const nameValue = name.value.trim();
    const passwordValue = password.value;
    const confirmValue = confirm.value;
    
    
    if (!validateEmail(emailValue)) {
        showError('Por favor ingresa un email válido');
        email.focus();
        return;
    }
    
    if (!validateName(nameValue)) {
        showError('El nombre debe tener al menos 2 caracteres');
        name.focus();
        return;
    }
    
    if (!validatePassword(passwordValue)) {
        showError('La contraseña debe tener al menos 8 caracteres');
        password.focus();
        return;
    }

    if (!validateConfirmPassword(passwordValue, confirmValue)) {
        showError('Las contraseñas no coinciden');
        confirm.focus();
        return;
    }
    
    alert('¡Usuario registrado exitosamente!\n\nDatos:\nEmail: ' + emailValue + '\nNombre: ' + nameValue);
    
    form.reset();
    
    console.log('Usuario registrado:', {
        email: emailValue,
        name: nameValue,
        password: passwordValue
    });
});

email.addEventListener('blur', function() {
    const emailValue = email.value.trim();
    if (emailValue && !validateEmail(emailValue)) {
        showError('El formato del email no es válido');
    }
});

confirm.addEventListener('blur', function() {
    const passwordValue = password.value;
    const confirmValue = confirm.value;
    
    if (confirmValue && passwordValue !== confirmValue) {
        showError('Las contraseñas no coinciden');
    }
});