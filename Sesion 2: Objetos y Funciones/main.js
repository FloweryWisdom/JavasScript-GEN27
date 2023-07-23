//--- O B J E T O S   &   TIPOS DE VALORES ---

// let milaneso = {
//   raza: "Chihuahua",
//   color: "Café",
//   tamanio: "Pequeño",
//   peso: "Ligero",
// };

// console.log(milaneso);
// console.log(milaneso.raza);
// console.log(milaneso.tamanio);

// milaneso.color = "negro";

// console.log(milaneso);

// milaneso.nombre = "Milaneso";
// milaneso.estaVacunado = true;
// milaneso.edadEnAnios = 5;
// milaneso.listaDeVacunas = ["Parvovirus", "quintuple"];
// milaneso.duenio = {
//   nombre: "Ferras",
//   telefono: 5543829674,
//   direccion: {
//     calle: "San simon",
//     numero: 7,
//     colonia: "San marcos",
//   },
// };

// console.log(milaneso);
// console.log(milaneso.duenio /*{}*/);
// console.log(milaneso.duenio.nombre);
// console.log(milaneso.duenio.direccion.colonia);

const perro = {
  name: "tyson",
};

perro.breed = "Pitbull";

console.log(perro);


// let a = 7;
// let b = 5;
// let result = a + b;

// let c = 2;
// let d = 6;
// let test2 = c + d;

// let e = 5;
// let f = 16;
// let result3 = e + f;

function sumarDosNumeros(a, b) {
    /*definición de una función*/
    //   let a=2;
    //   let b=5;
    let result = a + b;
  
    return result;
  }
  
  let resultadoSuma1 = sumarDosNumeros(2, 5); /*7*/
  
  console.log(resultadoSuma1);
  



  
/* 1. Crear funciones que hagan lo siguiente: */


//• Sumar dos números:

  function addTwoNumbers(a, b) {
    let result = a + b;
    return result;
  }

  let addition = addTwoNumbers(6, 6)

  console.log(addition)


//• Restar dos números:

  function subtractTwoNumbers(a, b) {
    let result = a - b;
    return result;
  }

  let subtraction = subtractTwoNumbers(8, 3)

  console.log(subtraction)


//• Multiplicar dos números:

  function multiplyTwoNumbers(a, b) {
    let result = a * b;
    return result;
  }

  let multiplication = multiplyTwoNumbers(2, 3)

  console.log(multiplication)


//• Dividir dos números:

  function divideTwoNumbers(a, b) {
    let result = a / b;
    return result;
  }

  let division = divideTwoNumbers(10, 5)

  console.log(division)



/*  2.- Crear una función que me devuelva el nombre completo de una persona. */
  

  function returnName(name, lastname) {
    let completename = name + lastname
    return completename;
  }

  let providename = returnName("Gerardo", " Arce")
  let providename2 = returnName("Shibe", " Sartoshi")
  let providename3 = returnName("Pepe", " The Dog")

  console.log(providename)
  console.log(providename2)
  console.log(providename3)



/* 3.- Crear una función que reciba las siguientes propiedades:

  • Nombre 
  • Color 
  • Tamaño 
  • Peso
  • Raza
 
  La funcion debe retornar un objeto que represente a ese perro. */
  

  function createDog(name, breed, color) {
    let ownerName = "Pepito";
    let ownerAddress = "San Pepito";
    let dog = { name, breed, color, ownerName, ownerAddress};
    return dog;
  }

  let testDog = createDog("Rex", "German Shepherd", "Brown & Black");
  console.log(testDog);
  
/* 4. Crear una función que reciba un nombre y haga lo siguiente:

  • Si el nombre tiene más de 5 letras, imprimir en pantalla "el nombre es largo"
  • Si no, imprimir "el nombre es corto" */

  function analyzeWord(word) {
    if (word.length > 5) {
      console.log("The word has more than 5 characters")
    } else if (word.length < 5) {
      console.log("The word has less than 5 characters")
    }}
  
  let new_word1 = analyzeWord("flowery")
  let new_word2 = analyzeWord("jim")
  let new_word3 = analyzeWord("pepito")
  let new_word4 = analyzeWord("kim")
  
/*
5. Crear una función que reciba 2 números y me devuelva un texto con base en las condiciones siguientes:

  • Si el resulta es par, devovler "tu resultado es par"
  • Si es non, devolver "el resultado es non". */

  function checkIfNumberIsOddOrEven(num1, num2){
    if (num1 % 2 === 0){
      console.log(num1 + " is even");
    } else {
      console.log(num1 + " is odd")
    }
    
    if (num2 % 2 === 0){
      console.log(num2 + " is even");
    } else {
      console.log(num2 + " is odd")
    }}
  
  let yournumbers1 = checkIfNumberIsOddOrEven(3, 8)
  let yournumbers2 = checkIfNumberIsOddOrEven(56, 87)
  let yournumbers3 = checkIfNumberIsOddOrEven(4, 10)
  let yournumbers4 = checkIfNumberIsOddOrEven(64, 73)


/* 3. Crear una función que reciba el nombre y apellidos de una persona
y me devuelva la cantidad de caracteres de el nombre completo. */

  function countCharacters(first_name, last_name){
    let count = (first_name.length) + (last_name.length);
    console.log(count)
  }

  let yourname1 = countCharacters("Gerardo", "Arce")
  let yourname2 = countCharacters("Antonio", "Garcia")
  let yourname3 = countCharacters("Jim", "Torres")
  let yourname4 = countCharacters("Katie", "Zu")
  let yourname5 = countCharacters("Pepito", "Sanchez")