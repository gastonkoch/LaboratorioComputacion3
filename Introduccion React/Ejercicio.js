// Ejercicio 1
let input = [
    { name: "John", age: 21, city: "New York" },
    { name: "Mike", age: 28, city: "Moscow" },
    { name: "Danny", age: 30, city: "London" },
    { name: "Lisa", age: 26, city: "Paris" },
    { name: "Sophie", age: 19, city: "Berlin" }
];

let name = input.map(persona => persona.name);

// console.log(name);

// Ejercicio 2
let name2 = input.map((i) => {
    if(i.age > 20 && i.age < 29){
        // console.log(i.name)
    }
});


let peopel = input.filter((n) => n.age > 20 && n.age < 29).map((n) => n.name)


// Ejercicio 3
let countries = [
    { name: "Argentina", population: 458100000},
    { name: "Brazil", population: 1222},
    { name: "Uruguay", population: 11113444}
];


// Mayor a menor
let countriesSorted = countries.sort((a, b) => b.population - a.population );
// Menor a mayor
let countriesSorted2 = countries.sort((a, b) => a.population - b.population );

// console.log(countriesSorted)

// Ejercicio 4

const candles = [4, 4, 1, 3];
let y = Math.max(...candles);
let acumulator = 0;

candles.forEach((i) => {
    if(i === y){
        acumulator += 1;
    }
});

// console.log(acumulator);

// Ejercicio 5

const studients = [-1, 0, 0, 1, 1, 1, 1];

const presentStudientesQuatity = 2;

let acumulatorStudient = 0;

studients.forEach((i) => {
    if( 0 >= i){
        acumulatorStudient += 1
    } 
});

let status;

if (acumulatorStudient > presentStudientesQuatity) {
    status = 'YES';
} else {
    status = 'NO';
}

// console.log(status)

// Ejercicio 7

// Escribir una función que convierta un objeto de JS en un arreglo de JS:
// Ejemplos:
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots",
// 12]]
// toArray({}) ➞ []

const products = {
    'a': 1,
    'b': 2
};

let arrayObjet = [];

for (let key in products) {
    console.log(key + products[key]);
    arrayObjet.push([key, products[key]]);
}

console.log(arrayObjet);

