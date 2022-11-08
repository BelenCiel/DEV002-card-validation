const validator = {
  isValid: function datosTarjeta(creditCardNumber){
    
    isValid(creditCardNumber) {
      //creo la variable que contiene el numero de la tarjeta invertido
      const arrayCCnumber= creditCardNumber.toString().split('').reverse();
      }
      console.log(arrayCCnumber)
      //le indico que su indice empieza a partir de 1, en todo el array, desde la posicion 1, y +=2 para indicarle el numero par siguiente
      for (let index = 1; index < arrayCCnumber.length; index+=2) {
        //creo la variable number me permitira desarrollar la multiplicacion a los digitos en posicion par
        var number = arrayCCnumber[index];
        //
        number = number * 2;
        //le indico que si el resultado de number * 2 es mayor a 10
        if (number >= 10) {
          //creo una variable que contenga el resultado de la multiplicación
          //y lo convierto en un array
          var arraySum= number.toString().split('');
          // number = a la suma de ambos digitos EJ: 1+0 = 1
          number = parseInt(arraySum[0]) + parseInt(arraySum[1]);
        }
        // Ya teniendo la condicion de la multiplicacion,
        arrayCCnumber[index] = number;
      }
      var result = 0;
      // desarrollo la condicion de la validacion
      //Tomo la reversa de la tarjeta, le indico que desde la posicion 0
      //en toda la logitud del array, numero por numero
      for (let index = 0; index < arrayCCnumber.length; index++) {
        //Resultado= almacena el resultado de la suma de los numeros de la tarjeta
        result = result + parseInt(arrayCCnumber[index]);
      }


      if (result%10===0) {
       
        return true;  
      }
     
      return false;

  },
  
  ,

    maskify: function(creditCardNumber){
      
      let cardNum = creditCardNumber.toString();
      let ultimosNumeros = creditCardNumber.slice(-5,-1);
      numeroTarjeta ="";

    for(let i = 0; i<cardNum.lenght; i++){
      if (i<-5){
        numeroTarjeta = numeroTarjeta + ultimosNumeros[i]
      }else{
        acumulador = acumulador + "#"
      }
    }
    return acumulador

    }
}

 export default validator