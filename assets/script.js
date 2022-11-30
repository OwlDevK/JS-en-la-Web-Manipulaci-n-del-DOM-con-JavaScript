// Se pretende hacer un querySelector del "botón agregar", se hace ya se por la etiqueta, id, o clase. Por etique es mala idea si solo se quiere seleccionar una tag en específico, por id y por clase es mala idea por son elementos editables, ya futuro un programador podría decidir modificarlos, por lo que se perdería el link o referencia. Para solucionar esto, existen los data atributes data-form-btn


( () =>{
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


/*
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const task = document.querySelector('[data-task]')
    const content = `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.innerHTML = content;
    input.value = "";
    console.log(content);
}
*/ //Hasta aquí el código es muy voluptusoso, exsiten funcionalidades que evistan la economía del código, observese las siguientes modificaciones

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    
    const list = document.querySelector('[data-list]');
    const task = document.createElement("li");  

    task.classList.add('card');
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;   
    taskContent.appendChild(titleTask);
    // const content = `<i class="fas fa-trash-alt trashIcon icon"></i>`;
    //task.innerHTML = content;

    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);

    input.value = "";
    console.log(content);
}

/*
    insertBefore(padre, hijo): Coloca un nodo antes del otro
    replaceChild(elemento1, elemento2): Sustituye el nodo del elemento 1 por el nodo del elemento 2
    removeChild(elemento): Remueve un nodo del árbol
*/


btnAgregar.addEventListener("click", createTask);


// Inmediately Inovoked expression IIFE
const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
}

const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("far");
    element.classList.toggle("completeIcon");
}

const deleteIcon = () =>{
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", deleteTask)
    return i;
}

const deleteTask = (event) => {
    const parent =  event.target.parentElement;
    parent.remove();
}

})();