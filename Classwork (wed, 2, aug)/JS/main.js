/* 

//1
const invertString = (inputString) => {
    return inputString.split(``).reverse().join(``)
}

const normalString = "Hello Koders!"

const test = invertString(normalString)
console.log(test)


//2
const invertNumbersArray = (numbersArray) => {
    return numbersArray.reverse()
}

const normalNumbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const test2 = invertNumbersArray(normalNumbersArray)
console.log(test2) */


//1
const invertString = (string) => {
    let invertedString = ""
    for (let i = string.length - 1; i >= 0; i--) {
        invertedString += string[i]
    }
    return invertedString
}

const normalString = ("Hello Koders!")

const test1 = invertString(normalString)
console.log(test1)


//2
const reverseNumbersArray = (numbers) => {
    const length = numbers.length 
    const middle = Math.floor(length / 2)

    for (let i = 0; i < middle; i++) {
        const temporaryVariable = numbers[i]
        numbers[i] = numbers[length -1 -i]
        numbers[length - 1 - i] = temporaryVariable
    }
    return numbers
}

const normalNumbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const test2 = reverseNumbersArray(normalNumbersArray)
console.log(test2)



//3
const printTriangle = (num) => {
    for (let i = 1; i <= num; i++) {
        let row = ``
        for (let j = 1; j <= i; j++) {
            row += `*`
        }
        console.log(row)
    }
}


printTriangle(8)


//4
const countColors = (colors) => {
    let colorCount = {}

    colors.forEach(color => {
        colorCount[color] = colorCount[color] ? colorCount[color] + 1 : 1})
    return colorCount
}

const colorsArray =  ['red', 'blue', 'green', 'red', 'yellow', 'blue', 'red']

const test3 = countColors(colorsArray)
console.log(test3)

