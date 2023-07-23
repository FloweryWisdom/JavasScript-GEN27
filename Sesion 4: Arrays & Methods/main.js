const numbersArray = [12, 26, 15, 78, 26, 47];
const countriesArray = ["México", "Canadá", "Brasil", "España"];
const peopleArray = [
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Axelle",
      last: "Fleury",
    },
    nat: "FR",
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Melati",
      last: "Oort",
    },
    nat: "NL",
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Inés",
      last: "Vargas",
    },
    nat: "ES",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Marcus",
      last: "Garrett",
    },
    nat: "GB",
  },
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Vasilina",
      last: "Motrichko",
    },
    nat: "UA",
  },
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Leuntje",
      last: "Van Harmelen",
    },
    nat: "NL",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Tristan",
      last: "Gauthier",
    },
    nat: "FR",
  },
  {
    gender: "female",
    name: {
      title: "Madame",
      first: "Marianne",
      last: "Charles",
    },
    nat: "CH",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Maksim",
      last: "Bunechko",
    },
    nat: "UA",
  },
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Coline",
      last: "Mathieu",
    },
    nat: "FR",
  },
];

/* 1. Teniendo en cuenta el array numbers, necesito saber el valor de la suma total de cada número en el array. */

    const giveTotalSum = numbers => {
        let sum = 0;
        for (let number of numbers) {
            sum += number; }
        return sum;
    }

    let test1 = giveTotalSum(numbersArray)
    console.log(test1)

/* 2. Teniendo en cuenta el array numbers, necesito obtener un nuevo array que incluya únicamente los números pares. */

    const getEvenNumbers = numbers => {
        const evenNumbers = [];
        for (let i = 0; i < numbers.length; i++) {
            numbers[i] % 2 === 0 ? evenNumbers.push(numbers[i]) : null;
        }
        return evenNumbers;
    }
    const test2 = getEvenNumbers(numbersArray)
    console.log(test2)

/* 3. Necesito obtener un nuevo array que incluya únicamente los números nones. */

    const getOddNumbers = numbers => {
        const oddNumbers = [];
        for (let i = 0; i < numbers.length; i++) {
            numbers[i] % 2 === 0 ? null : oddNumbers.push(numbers[i]);
        }
        return oddNumbers;
    }
    const test3 = getOddNumbers(numbersArray)
    console.log(test3)

/* 4. Tomando en cuenta el array countries, necesito obtener un string que este formado con la primer letra de cada país incluido en el array. 
    • Ejemplo: ["mexico", "Alemania"] => MA */

    const getFirstLetterString = countries => {
        let firstLetterString = ""
        for (let i = 0; i < countries.length; i++) {
            firstLetterString += countries[i].charAt(0);
        }
        return firstLetterString;
    }

    const test4 = getFirstLetterString(countriesArray)
    console.log(test4)

/* 5. Necesito obtener un array que contenga los mismos nombres de cada país, pero escritos en mayúsculas */

    const capitalizeAllNamesOfObjects = countries => {
        const capitalizedObjects = [];
        for (let i = 0; i < countries.length; i++) {
            const capitalizedObject = countries[i].toUpperCase();
            capitalizedObjects.push(capitalizedObject);
        } 
        return capitalizedObjects;
    }

    const test5 = capitalizeAllNamesOfObjects(countriesArray)
    console.log(test5)

/* 6. Tomando en cuenta el array people, necesito obtener un nuevo array que contenga los nombres completos de cada persona. */

    const getFullNames = people => {
    const fullNames = [];
    people.forEach(people => {
        const fullName = `${people.name.first} ${people.name.last}`;
        fullNames.push(fullName);
    })
    return fullNames
    }

    const test6 = getFullNames(peopleArray)
    console.log(test6)


/* 7. Necesito poder determinar una nacionalidad específica y obtener un array que contenga únicamente aquellas personas que tengan la nacionalidad indicada
      FR => [{nat === FR}]
      si uso alguna nacionalidad que no coincida con ninguna persona, devolver un string que diga "no hay personas con esta nacionalidad". */


    const getFirstNamesByNationality = (people, nationality) => {
    const firstNames = [];
    people.forEach(people => people.nat === nationality ? firstNames.push(people.name.first) :null
    )
    return firstNames.length > 0 ? firstNames : "There are no people with this nationality"
    }

    const nationality = "MEX"
    const test7 = getFirstNamesByNationality(peopleArray, nationality)
    console.log(test7)
