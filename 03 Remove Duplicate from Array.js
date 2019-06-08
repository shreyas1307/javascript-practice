let a = [1, 2, 3, 3, 4, 5, 1, 7, 3, 2, 1];

let b = [];

let arrLen = a.length;

// Method A : If the indexOf the alement at the position is
// -1 (Which means doesn't exist)
// Then the element is pushed onto the empty array b
for (let i = 0; i < arrLen; i++) {
  if (b.indexOf(a[i]) === -1) {
    b.push(a[i]);
  }
}
console.log(b);

// Method B : You sort it, and then loop it through
a.sort();

let bArray = [];

let _temp;

for (let i = 0; i < arrLen; i++) {
  if (a[i] !== _temp) {
    bArray.push(a[i]);
    _temp = a[i];
  }
}

console.log(bArray);

//Method 3: Object doesn't store duplicates. Hence
let obj = {};

for (let i of a) {
  obj[i] = true;
}

let bObj = Object.keys(obj);
console.log(b);

// Shortest method: Using Sets
console.log([...new Set(a)]);
