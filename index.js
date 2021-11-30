var person = {
    firstName: "pritom",
    lastName: "chy",
    fullName: function(){
        return this.firstName + ' ' + this.lastName
    }
};

// console.log(person.fullName());


// function add(a,b){
//     console.log(this);
//     return a + b;
// }

var add = (a,b) => {
    console.log(this)
}

// add(2,3)


var a = 2;


var person2 = {
    firstName: "Monjoy",
    lastName: "hossain",
    age: 29
};

// var firstname = person2.firstName;
// var lastname = person2.lastName;

var {firstName, lastName} = person2;
// console.log(firstName, lastName)


var arr = [5,4,3,23,1];

var [, , , d] = arr;

let name = "Pial";
name =" pial bh"

console.log(name);
