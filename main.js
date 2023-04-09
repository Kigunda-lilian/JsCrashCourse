console.log("Hello world");
console.error("This is an error");
console.warn("This is a warning");

let score;
score = 10;
console.log(score);

console.log(typeof score);
let name = "Lilian";
let age = 30;
console.log(`My name is ${name} and I am ${age} years old`);
console.log("My name is " + name + " " + "I am " + age + " " + "years old");
console.log("My name is " + name + " I am " + age + " years old");

const s = "Hello world ";
console.log(s.length); // property ; note ; property does not have parenthesis.

console.log(s.toUpperCase()); // method ; note; a method is a function that is associated with an object

console.log(s.substring(0, 5).toLowerCase());
console.log(s.split(" ")); // forms an array with two indices
console.log(s.split("")); //forms an array with 12 letters

ar1 = s.split("");
ar2 = s.split("");
console.log(ar1.length);
console.log(ar2.length);
//  both arrays have 12 indices
let stacks = "Fullstack, frontend,backend,MERN";
console.log(stacks.split(","));
console.log(stacks.split(", "));
/* multi
line
comments*/

// Arrays are variables that hold multiple values

const numbers = new Array(1, 2, 3, 4, 5, 6); //use a constructor
const fruits = ["apple", "orange", "banana", "mango", 9, true];
console.log(fruits);
console.log(fruits[0]);
console.log((fruits[6] = "grapes"));
console.log(fruits);
console.log(fruits.push("pears"));
console.log(fruits.unshift("strawberries"));
console.log(fruits.pop());
console.log(Array.isArray(fruits));
console.log(Array.isArray("fruits"));
console.log(fruits.indexOf("bananas"));

// objects literals - Key value pairs
const person = {
  firstname: "Lilian",
  lastname: " Kigunda",
  age1: 30,
  address: {
    town: "Juja",
    city: "Nairobi",
  },
  hobbies: ["dancing", "DIY", "movies", "music", "radio", "marketing"],
};
console.log(person);

console.log(person.address);
console.log(person.address.city);
person.pet = "pupsy";
console.log(person);
console.log(person.pet, person.firstname);
console.log(person.hobbies);
console.log(person.hobbies[1]);

const { firstname, lastname } = person; //destructuring
// const {firstname, lastname,...} =person
// console.log(lastname);
const {
  age1,
  address: { city },
  hobbies,
} = person; //destructuring
console.log(age1);
console.log(hobbies[2]);
console.log(city);

toDos = [
  {
    id: 1,
    text: " Prepare dinner",
    iscompleted: false,
  },
  {
    id: 2,
    text: " Practice web development",
    iscompleted: true,
    schedule: {
      morning: "exercise",
      noon: "eat",
      evening: "sleep",
    },
  },

  {
    id: 3,
    text: " Do laundry",
    iscompleted: false,
  },
];
console.log(toDos);
console.log(toDos[1].text);
console.log(toDos[1].schedule.evening);
todoJSON = JSON.stringify(toDos);
console.log(todoJSON);
console.log(JSON.parse(todoJSON));

// for loop;
for (i = 0; i <= 10; i++) {
  console.log(`For loop number: ${i}`);
}

//  while
let k = 0;
// while (k <= 10) {
//   console.log(`For loop number: ${i}`);
//   i++;
// }
for (i = 0; i < toDos.length; i++) {
  console.log(toDos[i]);
  console.log(toDos[i].text);
}
for (let toDo of toDos) {
  console.log(toDo);
  console.log(toDo.text);
}

// High order array methods(preferred to do do any kind of iteration with arrays)- they take in a function as a parameter
// the call back function can take many parameters but the first one is the variable that you want to use
// for each -loops through them
// map - helps to create a new array from an array
// maps returns an array
// filter - allowsto create a new array based on a condition
toDos.forEach((toDo) => {
  console.log(toDo.id);
});
toDos.forEach(function (toDo) {
  console.log(toDo.text);
});
toDosTextArray = toDos.map((toDo) => {
  return toDo.text.toUpperCase();
});
console.log(toDosTextArray);
toDosTextArray1 = toDos.map(function (toDo) {
  return toDo.text;
});
console.log(toDosTextArray1);

// using filter to return the todos that are completely done
todoCompleted = toDos.filter((todo) => {
  return todo.iscompleted === true;
});
todoCompleted1 = toDos
  .filter(function (toDo) {
    return toDo.iscompleted === false;
  })
  .map((toDo) => {
    return toDo.text;
  });
console.log(todoCompleted);
console.log(todoCompleted1);

// conditionals
// if

const y = 99;
if (y === 9) {
  console.log("y is 9");
} else if (y > 10) {
  console.log(`y is ${y}`);
} else {
  console.log("y is not 9");
}

// ternary operator
let v = 9;
v === 9
  ? console.log("v is 9")
  : v > 10
  ? console.log(`v is ${y}`)
  : console.log("v is not 9");
const b = 23;
const color = b > 10 ? "red" : "blue";
console.log(color);

//  switches
switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("input value");
}

// functions
function addNums(num1, num2) {
  return num1 + num2;
}
d = addNums(5, 4);
console.log(d);
console.log(addNums(7, 4));

multiplyNums = (num1, num2) => console.log(num1 * num2);
multiplyNums(9, 0);

divideNums = (num1, num2) => num1 / num2;
console.log(divideNums(18, 9));
divNums = (num1) => num1 + 7;
console.log(divNums(1));

// note: read on 'this' keyword

// object oriented programming
// constructing objects using the constructor function(2 ways:1) constructor functions with prototypes, 2) Es6 classes)
// note: when creating a constructor function it should start with a capital letter
// use 'this' to set the properties of the objects
//  you can add methods which are basically functions to the Person object
// put functions in prototypes if you do not want them in each and every object(remove them from 'this' keyword)

// constructor function Es5
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  // this.getBirthYear = function () {
  //   return this.dob.getMonth();
  // };
  // this.getfullName = function () {
  //   return `${this.firstName} ${this.lastName}`;
  // };
  Person.prototype.getBirthYear = function () {
    return this.dob.getMonth();
  };
  Person.prototype.getfullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}
// instantiate object
const person1 = new Person("Lilian", "Kigunda", "12-18-1986");
console.log(person1.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person1.getfullName());
console.log(person1);

// classes Es6(2015)
// add a constructor method i.e a function inside a class
// adding other methods(getFullYear and getBirthYear) to the class added them to the prototype
class Personn {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getBirthYear = function () {
    return this.dob.getFullYear();
  };
  getfullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}
const person2 = new Personn("Lucy", "Mpinda", "1-9-1987");
console.log(person2);

// DOM
// selecting
// console.log(window);
// alert(9);
// window.alert(45);
// single element selectors
console.log(document.getElementById("my-form"));
console.log(document.querySelector(".container"));
console.log(document.querySelector("h1"));

// multiple element selectors
console.log(document.querySelectorAll("h1"));
console.log(document.querySelectorAll("li"));
console.log(document.querySelectorAll(".item")); // you can put a class,id,header etc
console.log(document.getElementsByClassName("item")); // you don't have to put "."
console.log(document.getElementsByTagName("li"));

const items = document.querySelectorAll(".item");
items.forEach((item) => console.log(item));

// manipulating the DOM
const ul = document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = "lil";
ul.lastElementChild.innerHTML = "<h1>Hello</h1>";

const btn = document.querySelector(".btn");
btn.style.background = "blue";

// Events
// takes in two things: the event and the function you want to run when the event happens
// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("you have clicked me");
//   console.log(e);
//   console.log(e.target);
//   console.log(e.target.className);
//   console.log(e.target.id);
//   document.querySelector("#my-form").style.background = "#ccc";
//   // document.querySelector("body").classList.add("bg-dark");
//   ul.children[1].innerHTML = "<p><strong> Lilian Kanana</strong><p>";
// });

// Input events
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onsubmit);

function onsubmit(e) {
  e.preventDefault();
  console.log("nameInput.value");
  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";
    // msg.style.color = "red";

    // use setTimeOut function which takes in two parameters:1.) a function as a parameter (n/b the function does not take in any parameter0, 2.time in milliseconds . This is used to make the message disappear after a while.

    setTimeout(() => msg.remove(), 3000);
  } else {
    // console.log("success");
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );

    userList.appendChild(li);
    // clear fields
    nameInput = "";
    emailInput = "";
  }
}
