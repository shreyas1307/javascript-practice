// function myList() {
//   this.listSize = 0;
//   this.position = 0;
//   this.items = [];

//   this.append = element => {
//     this.items[this.listSize++] = element;
//   };

//   this.find = element => {
//     for (let i = 0; i < this.listSize; i++) {
//       if (this.items[i] === element) {
//         return i;
//       }
//     }
//     return -1;
//   };

//   this.remove = element => {
//     let index = this.find(element);

//     if (this.position > -1) {
//       this.items.splice(index, 1);
//       --this.listSize;
//       return true;
//     }
//     return false;
//   };

//   this.insertElement = (element, after) => {
//     let insertPosition = this.find(after);

//     if (insertPosition > -1) {
//       this.items.splice(insertPosition + 1, 0, element);
//       ++listSize;
//       return true;
//     }
//     return false;
//   };

//   this.checkItem = element => {
//     this.position = this.find(element);
//     if (this.position > -1) {
//       return true;
//     }
//     return false;
//   };

//   this.front = () => {
//     return (this.position = 0);
//   };

//   this.rear = () => {
//     return (this.position = this.listSize - 1);
//   };

//   this.prev = () => {
//     if (this.position > 0) {
//       --this.position;
//     }
//   };

//   this.next = () => {
//     if (this.position > 0 && this.potiion < this.listSize - 1) {
//       ++this.position;
//     }
//   };

//   // this.specific = element => {
//   //   let index = this.find(element);
//   // };

//   this.getCurrentPosition = () => {
//     return this.position;
//   };

//   this.getCurrentElement = () => {
//     return this.items[this.position];
//   };

//   this.getListSize = () => {
//     return this.listSize;
//   };

//   this.printList = () => {
//     return this.items.join(", ");
//   };
//   this.clearList = () => {
//     this.position = 0;
//     this.listSize = 0;
//     this.items = [];
//   };
// }

function myList() {
  this.listSize = 0;
  this.position = 0;
  this.items = [];

  this.add = element => {
    this.items[this.listSize++] = element;
  };

  this.find = element => {
    for (let i = 0; i < this.items.length; i++) {
      if (i === element) {
        return i;
      }
      return -1;
    }
  };

  this.remove = element => {
    let index = this.find(element);

    if (index > -1) {
      this.items.splice(index, 1);
      --this.listSize;
      return true;
    }
    return false;
  };
  this.insert = (element, after) => {
    let insertPosition = this.find(after);

    if (this.after > -1) {
      this.items.splice(insertPosition + 1, 0, element);
      ++listSize;
      return true;
    }
    return false;
  };
}
