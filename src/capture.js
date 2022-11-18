let comenzar = document.querySelector("#checkButton");

//funcion que me permite acceder a los datos ingresados
comenzar.addEventListener("click", () => {
    //querySelector para seleccionar el elemento
    let capNombre = document.querySelector("#name").value;
    //localStorage para acceder al elemento seleccionado
    localStorage.setItem("llave", capNombre);

    let capNumber = document.querySelector("#ccNumber").value;
    localStorage.setItem("llave2", capNumber);


})
//clear. para eliminar los datos almacenados
localStorage.clear();
