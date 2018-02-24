console.log('Hello Agata!')
//data types

//primitives

//string
var textVariable = "Mateusz";
console.log(textVariable)

//number
var numberVariable = 55
console.log(numberVariable)

//boolean
var booleanVariable = true

//null
var nullVariable = null

//undefined
var undefinedVariable = undefined

//objects
// objects with data
var simplestObj = {
    name: "Agata",
    lastname: "Okolska"
}
console.log(simplestObj)

//nested objects with data
var nestedObj = {
    name: "Agata",
    car: {
        brand: "Peugeot",
        model: 407
    }
}
console.log(nestedObj)
console.log(nestedObj.car.model)
console.log(nestedObj.car.year)

// arrays

var simpleArray = [1,2,3,4,5]
console.log(simpleArray)
var simpleArray2 = [1,
    {name:"Ala", array: [1,2,3]}
    ,3,4,5]
console.log(simpleArray2)
console.log(simpleArray2[4])

console.log(simpleArray2[1].name)
console.log(simpleArray2[1].['name'])