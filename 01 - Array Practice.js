//Learning and using Array Methods

const arr1 = [3, 4, 66, 75, 34, 652, 22, 0, -2];

const arr2 = [
  3,
  75,
  23,
  77,
  [33, 65, 764, 12, 37, [6, 36, 756, 223, 12, -97], 75, 73, 235],
  0,
  785,
  1,
  5,
  965,
  35
];

const arrObj = [
  {
    id: 1,
    name: "brian",
    age: 23
  },
  {
    id: 2,
    name: "sarah",
    age: 55
  },
  {
    id: 3,
    name: "david",
    age: 49
  },
  {
    id: 4,
    name: "Tim",
    age: 15
  },
  {
    id: 5,
    name: "elena",
    age: 23
  }
];

// Array practice

// Concat Arrays
console.log(arr1.concat(arr2.flat(3)));

// forEach
arr1.forEach(element => {
  console.log(element);
});

// Map
arr2.map(element => {
  if (element <= 500) {
    console.log(element);
  }
});

// Filter

arrObj.filter(obj => {
  if (obj.age < 40) {
    console.log(obj);
  }
});

// Flat method
console.log(arr2.flat());
console.log(arr2.flat(2));
console.log(arr2.flat(3));
