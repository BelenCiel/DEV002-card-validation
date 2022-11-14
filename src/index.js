 import validator from './validator.js';

let checkButton = document.getElementById('checkButton')

let formulario = document.getElementById('formulario')
//funcion que previene enviar el formulario
 formulario.addEventListener('submit', function (evento){
   evento.preventDefault()
})

 checkButton.addEventListener('click',datosTarjeta);
//funcion que me permite obtener el numero de la tarjeta
 function datosTarjeta() {
    let creditCardNumber = document.getElementById('ccNumber').value;
    let nameCard = document.getElementById('name').value;
   
    validator.isValid(creditCardNumber)
    validator.maskify(creditCardNumber)
    
    // funcion que me permite validar el número
       let valid = validator.isValid(creditCardNumber)
       if (valid === true){
          alert(nameCard + ", tu tarjeta es valida!")
          return true
         
          } else {
          (valid === false)
          window.alert (nameCard+", el número no es valido, inténtalo otra vez!");
         }
         console.log(creditCardNumber)
   }

 function cardMaskify(creditCardNumber) {
   let creditCardNumber = document.getElementById('ccNumber').value;
   
   validator.isValid(creditCardNumber)
   document.getElementById("ccNumber").innerHTML = validator.maskify(creditCardNumber);
}
// }
// formulario.addEventListener('submit', (e) => {
//    e.preventDefault();

//    let valid = validator.isValid(creditCardNumber)
   
// }