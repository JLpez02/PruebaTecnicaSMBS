const inputTarea = document.querySelector('.entrada__input');
const btnAgregar = document.querySelector('.entrada__boton');
const contenedorTareas = document.querySelector('.tareas');

let tareas = [];

document.addEventListener('DOMContentLoaded', () => {
    tareas = JSON.parse(localStorage.getItem('tareas')) || [];
    mostrarTarea();
});

btnAgregar.addEventListener('click', () => {
    if (inputTarea.value === '') {
        alert('Debe escribir una tarea');
    } else {
        agregarTarea();
        inputTarea.value = '';
    }
});

contenedorTareas.addEventListener('click', eliminarTarea);

/*Funciones*/
function agregarTarea() {
    if (tareas.some(tarea => tarea === inputTarea.value)) {
        const arrTareas = tareas.map(tarea => {
            if (tarea === inputTarea.value) {
                alert('Esta tarea ya existe');
                return tarea;
            } else {
                return tarea;
            }
        });
        tareas = [...arrTareas];
    } else {
        tareas = [...tareas, inputTarea.value];
    }

    mostrarTarea();
}

function eliminarTarea(e) {
    if (e.target.classList.contains('tarea__eliminar')) {
        const tareaEliminar = e.target.parentElement.querySelector('.tarea__texto').textContent;
        tareas = tareas.filter(tarea => tarea !== tareaEliminar);
        mostrarTarea();
    }
}

function mostrarTarea() {
    contenedorTareas.innerHTML = '';

    tareas.forEach(tarea => {
        const divTarea = document.createElement('div');
        divTarea.classList.add('tarea');
        divTarea.innerHTML = `<p class="tarea__texto">${tarea}</p>
                            <button class="tarea__eliminar">X</button>`

        contenedorTareas.appendChild(divTarea);
    });

    localStorage.setItem('tareas', JSON.stringify(tareas));
}