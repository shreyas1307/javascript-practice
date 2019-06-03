//Practicing Data Structures and Algorithms

//List ADT

// Methods: Size, Clear, Print, getElement, Insert, Append, Remove,
// Front, Rear, Prev, Next, currPos, moveTo, Contains

// Classical Approach

function List() {
  this.listSize = 0; //track size of the list
  this.position = 0; //track current position in the list
  this.items = []; //hold items

  //Add item to the list
  this.append = element => {
    this.items[this.listSize++] = element;
  };

  //Find item from the list
  //this won't work for objects and arrays
  this.find = element => {
    for (let i = 0; i < this.listSize; i++) {
      if (this.items[i] === element) {
        return i;
      }
    }
    return -1;
  };

  //Remove item from the lis
  this.remove = element => {
    let index = this.find(element);
    if (index > -1) {
      this.items.splice(index, 1);
      --this.listSize;
      return true;
    }
    return false;
  };

  //Insert items at specific position in the list
  this.insert = (element, after) => {
    let insertPos = this.find(after);

    if (insertPos > -1) {
      this.items.splice(insertPos + 1, 0, element);
      ++this.listSize;
      return true;
    }
    return false;
  };

  //Check if item is present in the list
  this.contains = element => {
    let index = this.find(element);
    return index > -1 ? true : false;
  };

  //Move to the front of the list
  this.front = () => {
    this.position = 0;
  };

  //Move to the end of the list
  this.rear = () => {
    this.position = this.listSize - 1;
  };

  //Move to the prev item in the list
  this.prev = () => {
    if (this.position > 0) {
      --this.pos;
    }
  };

  //Move to the next item in the list
  this.next = () => {
    if (this.position < this.listSize - 1) {
      ++this.position;
    }
  };

  //Move to the specific position in the list
  this.moveTo = position => {
    if (position > 0 && position <= this.listSize) {
      this.position = position - 1;
    }
  };

  //Get the current position in the list
  this.currentPos = () => {
    return this.position;
  };

  //Get current item from the list
  this.getElement = () => {
    return this.items[this.position];
  };

  //Get the size list
  this.size = () => {
    return this.listSize;
  };

  //Print the items of the list
  this.print = () => {
    return this.items.join(", ");
  };

  //Clear the list
  this.clear = () => {
    this.listSize = 0;
    this.position = 0;
    this.items = [];
  };
}

let list = new List();
list.append("Prashant");
list.append("Taha");
list.append("Anil");

list.insert("Yogesh", "Taha");
console.log(list.print()); //print all the items of the string.
console.log(list.getElement());

list.next(); //move to next item
console.log(list.getElement());

list.rear(); //move to last item
console.log(list.getElement());

list.prev(); //move to prev item
console.log(list.getElement());

console.log(list.size()); //get the size of the list

list.remove("Taha");
console.log(list.size()); //get the size of the list
console.log(list.print()); //print all the items of the string.

// Output:
//"Prashant,Taha,Yogesh,Anil"
//"Prashant"
//"Taha"
//"Anil"
//"Yogesh"
//4
//3
//"Prashant,Yogesh,Anil"
