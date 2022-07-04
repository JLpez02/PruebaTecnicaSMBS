const inputNombre = document.querySelector('#nombre');
const inputApellido = document.querySelector('#apellido');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const inputComentario = document.querySelector('#comentario');
const btnEnviar = document.querySelector('#btnEnviar');

inputNombre.addEventListener('blur', () => {
    if (!validarNombre(inputNombre)) {
       mostrarAlerta(inputNombre);
    }
});

inputEmail.addEventListener('blur', () => {
    if (!validarEmail(inputEmail)) {
        mostrarAlerta(inputEmail);
    }
});

inputComentario.addEventListener('blur', () => {
    if (!validarComentario(inputComentario)) {
        mostrarAlerta(inputComentario);
    }
});

inputPassword.addEventListener('blur', () => {
    if (!validarPassword(inputPassword)) {
        mostrarAlerta(inputPassword);
    }
});

btnEnviar.addEventListener('click', e => {

    if (!validarNombre(inputNombre) || !validarEmail(inputEmail) || !validarPassword(inputPassword) || !validarComentario(inputComentario)) {
        e.preventDefault();

        mostrarAlerta(btnEnviar);
        return;
    }
});

/*Funciones*/
let contador = 0;
function mostrarAlerta(campo) {
    if (contador === 0) {
        contador = 1;

        const alerta = document.createElement('p');
        alerta.classList.add('alerta');
        if (campo.classList.contains('form__input--boton')) {
            alerta.textContent = 'Uno o más campos son inválidos';
        }else{
            alerta.textContent = 'Campo no válido';
        }

        campo.insertAdjacentElement('afterend', alerta);

        setTimeout(() => {
            alerta.remove();
            contador = 0;
        }, 2000);
    }else{
        return
    }   
}

function validarNombre(campo) {
    let nombre = campo.value;
    if (nombre === '') {
        return false;
    }else{
        return true;
    }
}

function validarEmail(campo) {
    const formato = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    let email = campo.value;

    if (email === '' || !formato.test(email)) {
        return false;
    }else{
        return true;
    }
}

function validarComentario(campo) {
    let comentario = campo.value;
    
    if (comentario === '' || comentario.length > 50) {
        return false;
    }else{
        return true;
    }
}

function validarPassword(campo) {
    const formato = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;

    let password = campo.value;

    if (password === '' || password.length < 6 || !formato.test(password)) {
        return false;
    }else{
        return true;
    }

}

