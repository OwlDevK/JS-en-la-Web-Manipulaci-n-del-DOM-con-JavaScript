// Se pretende hacer un querySelector del "botón agregar", se hace ya se por la etiqueta, id, o clase. Por etique es mala idea si solo se quiere seleccionar una tag en específico, por id y por clase es mala idea por son elementos editables, ya futuro un programador podría decidir modificarlos, por lo que se perdería el link o referencia. Para solucionar esto, existen los data atributes data-form-btn

const btnAgregar = document.querySelector('[data-form-btn]');
//const input = document.querySelector('[data-form-input]');
console.log(btnAgregar);
//console.log(input.value);

// La sintaxis del método "addEventListener" es muy sencilla, el primer parámetro que recibe es el evento que quiere escuchar, y el segundo es lo que método debe hacer una vez que escuche el evento.

/*
btnAgregar.addEventListener("click", function(evento){
    console.log(evento)
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    console.log(input.value)
});
*/

// Pero al código anterior, para mejorar su calidad, el método se puede convertir en una arow function
/*
btnAgregar.addEventListener("click", (evento) => {
    console.log(evento)
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    console.log(input.value)
});
*/
// Aun puede mejorar más, si esta la convertimos en una función anónima

const createTask = (evento) => {
    console.log(evento)
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    console.log(input.value)
}

btnAgregar.addEventListener("click", createTask);