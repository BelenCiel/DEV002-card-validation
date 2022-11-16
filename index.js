 import validator from './validator.js';

let checkButton = document.getElementById('checkButton')
checkButton.addEventListener('click',datosTarjeta);

//funcion que me permite obtener el numero de la tarjeta
 function datosTarjeta() {
    let creditCardNumber = document.getElementById('ccNumber').value;
    let nameCard = document.getElementById('name').value;
    let formulario = document.getElementById('formulario');
   
    validator.isValid(creditCardNumber)
    validator.maskify(creditCardNumber)
    
       let valid = validator.isValid(creditCardNumber)
       let numMaskify = validator.maskify(creditCardNumber)

       //si es valida, redirecciono a mi segunda pantalla
       if (valid === true){
          window.location.href = "tarjetaValida.html";
          alert (nameCard + ", tu número de tarjeta "+ numMaskify + ", es válido!")
         
         // si es invalida, me envia una alerta y no me permite ir a mi segunda pantalla
          } else {
          (valid === false)
          window.alert (nameCard+ ", el número '"+ creditCardNumber +"', no es válido, inténtalo otra vez!");
          formulario.addEventListener('submit', function (evento){
            evento.preventDefault() })
         }
         // // console.log(creditCardNumber)
         // // console.log(numMaskify)
   }
