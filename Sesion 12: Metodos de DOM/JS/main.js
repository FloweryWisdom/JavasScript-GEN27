let labels = {
    es: [
      {
        id: "heading1",
        label: "Hola koders!",
      },
      {
        id: "heading2",
        label: "Bienvenidos a nuestro módulo de JavaScript",
      },
      {
        id: "first-paragraph",
        label:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quam dolorem porro nam non id similique obcaecati atque dolores veniam!",
      },
    ],
    en: [
      {
        id: "heading1",
        label: "Hello Koders!",
      },
      {
        id: "heading2",
        label: "Welcome to our JavaScript Module!!",
      },
      {
        id: "first-paragraph",
        label: "Some simulated text in english",
      },
    ],
  };
  
  const changeLanguage = (language) => {
    let selectedLabels = labels[language /*es||en*/];
    console.log(selectedLabels);
    selectedLabels.forEach((label) => {
      let element = document.getElementById(label.id);
      element.innerText = label.label;
    });
  };
  
  const koders = [
    {
      /*item*/ name: "Chuchin",
      lastname: "Brown",
      scores: {
        html: 10,
        css: 9,
        js: 7,
      },
      generation: 27,
    },
    {
      name: "Xiaomi",
      lastname: "Watts",
      scores: {
        html: 10,
        css: 10,
        js: 10,
      },
      generation: 9,
    },
    {
      name: "Iimmy",
      lastname: "De La Cruz",
      scores: {
        html: 8,
        css: 9,
        js: 9,
      },
      generation: 4,
    },
    {
      name: "Santino",
      lastname: "Zanchez",
      scores: {
        html: 8,
        css: 9,
        js: 10,
      },
      generation: 4,
    },
    {
      name: "Antonionius",
      lastname: "Xertron",
      scores: {
        html: 8,
        css: 8,
        js: 10,
      },
      generation: 10,
    },
    {
      name: "Kelayka",
      lastname: "Yeubon",
      scores: {
        html: 9,
        css: 9,
        js: 9,
      },
      generation: 10,
    },
  ];
  


/* Crear una funcion que sirva para crear un único elemento de lista
(recibe un objeto que represente un koder).

  • Extaer name y lastname

  • Crear el fullname (name + lastname)

  • Crear el elemetno con el tag li

  • Inyectar el nombre completo en el li

  • Retornar el li */
  

const createListElement = (person) => {

  let fullName = `${person.name} ${person.lastname}`
  let listElement = document.createElement("li")
  listElement.innerText = fullName
  return listElement

}


/* Necesitamos una fucnión que sirva para crear todos los koders en la
pantalla esta función recibe como argumento el array de koders.

  • Seleccionamos el elemento de dom en el que insertaremos los koders

  • Iteramos en el array y por cada objeto que representa un koder

  • Insertamos y ejecutamos la función createElementItem para crear
    un nuevo elemento de lista usando cada koder

  • Insertamos el li obtenido en la lista de html */


const printListItem = (array, listId) => {
  let peopleList = document.getElementById(listId)
  array.forEach(person => {
    let peopleElement = createListElement(person)
    peopleList.appendChild(peopleElement)
  })
}
  
  const test1 = printListItem(koders, "koders-list")


/* Hacer que los li pares tengan un color de fondo, y los nones otro
color diferente:(CSS Styles Commented)

                     ***(Revisar estilos)***


/* Crear una nueva lista que contenga el nombre completo del koder y su promedio.

  • Si el promedio del koder es menor que 9.5, ese texto (el del promedio) debe ser color amarillo
  • Si es mayor o igual, debe ser verde */    


const createListAverageElement = (persons) =>  {
  return persons.map(person => {
    let scoresArray = Object.values(person.scores)
    let sumTotal = scoresArray.reduce((accu, currentValue) => accu + currentValue, 0)
    let average = sumTotal / scoresArray.length
    return { name: person.name, lastname: person.lastname, average }
  })
}


const printAverageScoreList = (array, listId) => {
  let scoreList = document.getElementById(listId)
  array.forEach(person => {
    let koderNames = createListAverageElement([person])
    koderNames.forEach(person => {
      let listElement = document.createElement("li")
      listElement.innerText = `Name: ${person.name} ${person.lastname} Average: ${person.average.toFixed(1)}`
      listElement.classList.add(person.average >= 9.5 ? "green-background" : "yellow-background")
      scoreList.appendChild(listElement)
    })  
  })
}

const test3 = printAverageScoreList(koders,"koders-list2")
  