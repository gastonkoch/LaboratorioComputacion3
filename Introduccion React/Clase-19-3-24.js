// filter() != map() 

let numbers = [1,3,4,6,7];

let evenNumbersMapped = numbers.map((n) => n * 2);

let evenNumbersFiltered = numbers.filter((n) => n > 3);

console.log(evenNumbersMapped);

console.log(evenNumbersFiltered);

// some() != find()

let food = [
  {
    name: 'orange',
    type: 'fruit'
  },
    {
    name: 'banana',
    type: 'fruit'
  },
    {
    name: 'carrot',
    type: 'vegetable'
  },
      {
    name: 'cabbage',
    type: 'vegetable'
  }
  ];
  
  let isVegetable = food.some((f) => f.type === 'vegetable');
  
  let onlyVegetable = food.find((f) => f.type === 'vegetable');
  
  console.log(isVegetable);

  console.log(onlyVegetable);
  
  let typeOfFood = food.map((f) => {
    console.log(`${f.name} is a ${f.type}`);
  })