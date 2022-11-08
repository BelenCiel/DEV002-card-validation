 import validator from './validator.js';
 
 // getElementById para tener acceso a un elemento especifico con el id de button
 let checkButton = document.getElementById('checkButton');
 //creo un evento click para crear una funcion
 checkButton.addEventListener('click',numeroTarjeta);
 // creo una funcion que me permita los datos de la tarjeta ingresada
 function datosTarjeta() {
    let creditCardNumber = document.getElementById('ccNumber').value;
    let nameCard = document.getElementById('name').value;
alert('hola1')



   
    
    }

    console.log(creditCardNumber)

    
   
 validator.isValid(creditCardNumber)

 
