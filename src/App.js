let alice = () => {};
 
let bob = (b) => b;
 
const usingMap = [1, 2, 3].map((number) => number * 2);
console.log(usingMap); // [2, 4, 6]
 
var immukul = { 
    _name: "Mukul", 
    _friends: ["Mukul", "Mayank"],
     printFriends(){
         this._friends.forEach(
             f =>console.log(this._name + " knows " + f)); 
            }
        };
 
console.log(immukul.printFriends());