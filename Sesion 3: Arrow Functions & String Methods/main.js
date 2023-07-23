function myFunction(arg1, arg2) {
    let result = arg1 + arg2;
    return result; /*return explícito*/
  }
  
  const myArrowFunction = (arg1, arg2) => arg1 + arg2;
  
  /*
  const getEvens = (number) => {
      let result = number % 2 === 0 ? true : false
      return result
  }*/

  const getEvens = (number) => number % 2 === 0;
  
  console.log(getEvens(17));
  console.log(getEvens(10));
  let conventionalResult = myFunction(10, 20);
  console.log(conventionalResult);
  
  let arrowResult = myArrowFunction(10, 20);
  console.log(arrowResult);
  
  let user = {
    name: "Israel",
    lastName: "Salinas Martínez",
    greeting: (personname) =>
      `Hola ${personname}, soy ${user.name} ${user.lastName}`,
  };
  
  let test1 = user.name;
  console.log(test1);
  let test2 = user.greeting("Nefer");
  console.log(test2);
  
  /*
      Necesito mostrar las iniciales del nombre completo de una persona
      "Isaac Salinas Martínez"
      "I. S. M. "
  */
  
  //string.split(separator);
  
  let miNombreCompleto = "Israel Salinas Martínez";
  
  console.log(miNombreCompleto.split("s"));
  console.log("Israel".charAt(0));
  console.log("Israel".charAt(0).concat(". "));
  
  console.log(miNombreCompleto.indexOf(" ")); /*prmer espacio en el nombre*/
  console.log(miNombreCompleto.charAt(miNombreCompleto.indexOf(" ") + 1));
  console.log(miNombreCompleto.indexOf(" ", 7)); /*segundo espacio en el nombre*/
  
  console.log(miNombreCompleto[0]);
  let names = ["israel", "Salinas"];
  console.log(names[0]);
  
  
  // Israel, 2 => r
  // Israel, 10 => el número excede la cantidad de caracteres del string
  
  console.log("israel"[10]);
  
  // const checkCharAtPosition = (str, position) =>
  //   str.charAt(position) === ""
  //     ? "el número excede la cantidad de caracteres del string"
  //     : str.charAt(position);
  const checkCharAtPosition = (str, position) => {
    return str[position]
      ? str[position]
      : "el número excede la cantidad de caracteres del string";
  };
  
  //false || / || null || 0 || "" (falsy)
  
  //true   truthy => "israel"
  
  let testPosition = checkCharAtPosition("Israel", 10);
  console.log(testPosition);
  
  /* recibir dos números, y entregar el resultado de la resta entre ambos (a - b), si los números son iguales, entregar el mensaje "los números son iguales"*/
  
    

/* T A R E A */


const myString = "The quick brown fox jumps over over the lazy dog.";


/* 1. Necesitamos saber de cualquier string, el caracter que se encuentre en cualquier posición que indiquemos. Si la posición excede la cantidad de caracteres, indicar que no es posible ejecutar el ejercicio. */

    const findCharacter = (string, index ) => {
        index >= 0 && index < string.length
        ? console.log(`Character at index ${index} is: ${string.charAt(index)}`)
        : console.log(`Error: Index is out of range.`)
    }
    let output = findCharacter(myString, 23)
    let output2 = findCharacter(myString, 75)

      
/* 2. Necesitamos saber si un texto cualquiera tiene dentro otro string.

        Ejemplo: "Israel" "ra" - si lo incluye
        Ejemplo: "Israel" "ac" - no lo incluye */

    const checkSubstring = (primaryString, userInput) => {
        primaryString.includes(userInput)
        ? console.log(`${userInput} is in the string`)
        : console.log(`${userInput} is not in the string`)
    }
    let userInput = "xr"; checkSubstring(myString, userInput);
    let userInput2 = "fox"; checkSubstring(myString, userInput2)


/* 3. Necesito saber la cantidad de palabras de un texto cualquiera. */

    const getFullNameLength = string => console.log(`${string.length}`);

    let length3 = getFullNameLength(myString) 


/* 4. Necesito reemplazar todas las coincidencias de una palabra dentro de un texto, con otro texto.

        Ejemplo: "mi perro es gris y es un latoso" "es" "no es"
        Ejemplo:"mi perro no es gris y no es un latoso" */
        
    const replaceSubstring = (string, target, replacement) =>
        string.replace(new RegExp(target, "gi"), replacement);

    let originalString = "Flowery is a person and is awesome";
    let newString = replaceSubstring(originalString, "is", "is not");

    console.log(newString);
