let comenzar = document.querySelector("#checkButton");


comenzar.addEventListener("click", ()=>{
    let capNombre = document.querySelector("#name").value;
    localStorage.setItem("llave",capNombre);

    let capNumber = document.querySelector("#ccNumber").value;
    localStorage.setItem("llave2",capNumber);

   
})
localStorage.clear();
