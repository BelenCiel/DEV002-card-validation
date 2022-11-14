
const validator = {
  isValid: (creditCardNumber) => {

  let reverseCard= creditCardNumber.split("").reverse(); // array de numeros invertidos

  console.log(reverseCard)
  let n = 1; // me indica las posiciones pares 
  let result = 0; 
  for(let i = 0 ; i < reverseCard.length ; i ++){ // bucle para recorrer el array
    reverseCard[i] = parseInt(reverseCard[i]); // convertir en un entero el número en esa posición

    // si i es igual a n(posicion par)
    if(i === n){
      //entonces, mi n (posicion par) se multiplica * 2
      reverseCard[n] *= 2; 

      if(reverseCard[n] >= 10 ){ // si el resultado es mayor o igual a 10
        reverseCard[n]=reverseCard[n].toString(); // Convierto el numero de 2 digitos en string
        let arrayNum = reverseCard[n].split(''); // Para poder separar ambos digitos
        //con parseInt transformo ambos digitos en numero entero, para poder sumarlos
        //Si el resultado de esta posicion es mayor o igual a 10, sumo ambos numeros enteros
        reverseCard[n]=parseInt(arrayNum[0])+parseInt(arrayNum[1]); 
      }
     n +=2; //Le indica a n ir avanzando cada 2lugares
    
    }
    result = result + reverseCard[i]; // result almacena el resultado de la suma de los numeros de la tarjeta
  }
   console.log(result%10===0)

   if (result % 10 === 0) {
    return true;
   }
     return false;
    
  },

  
  maskify: (creditCardNumber) => {
    
    let lastNumbers = creditCardNumber.lenght; //tomo la longitod
    let maskNumbers = "";
    
    for(let i = 0; i<lastNumbers-4; i++){ //le indico que desde el indice 0, hasta -4
      maskNumbers += "#"; //debe reemplazar los digitos por '#'
    }
    return maskNumbers + creditCardNumber.substring(lastNumbers-4, lastNumbers)
  
  }
}
  export default validator;