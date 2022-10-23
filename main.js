// === Console ===
    // console.log('Hello World');
    // console.error('This is an error');
    // console.warn('This is a warnign');

// === Variables ===
// * let, const

    // let age = 30;
    // age = 31;

    // const pi=3.1416;
    // console.log(age);
    // console.log(pi);

// === Data Types ===
// * String, Numbers, Boolean, null, undefined

    // const personname='John';
    // const age = 30;
    // const rating = 4.5;
    // const isCool = true;
    // const x = null; // basically empty
    // const y = undefined;
    // let z; // same as undefined

    // console.log(typeof personname); // use typeof to display the type of variable

// * Concatenation

    // console.log('My name is ' + personname + ' and i am ' + age);

// * Template String 
    // console.log(`My name is ${personname} and I am ${age}`);
    // const greetings = `My name is ${personname} and I am ${age}`; // assign to variable greetings
    // console.log(greetings); // display value of the variable greetings

// * String
    // const s = 'Hello World!';

    // console.log(s.length);          // length property
    // console.log(s.toUpperCase());   // toUpperCase function
    // console.log(s.substring(0,5));
    // console.log(s.substring(0,5).toUpperCase());
    // console.log(s.split(''));       // array of characters

    // const tag = 'technology, computers, it, code';
    // console.log(tag.split(','))

// * Arrays - variables that hold multiple values

    // const numbers = new Array(1,2,3,4,5);
    // console.log(numbers);

    // const fruits = ['apples', 'oranges', 'pears'];
    // console.log(fruits);

    // const m = ['apples', 5, 4.5, true, 'pears']
    // console.log(m);

    // console.log(fruits[1]);     //
    // fruits[3] = 'grapes';
    // console.log(fruits);

    // fruits.push('guava'); // add to end of array
    // console.log(fruits);
    // fruits.unshift('strawberries'); // add to the beginning of an array
    // console.log(fruits);

    // fruits.pop(); // remove the last item in an array
    // console.log(Array.isArray(fruits))

    // console.log(fruits.indexOf('oranges'));

// === Object Literals ===

    // const person = {
    //     firstName: 'John',
    //     lastName: 'Doe',
    //     age: 30,
    //     hobbies: ['music', 'movies', 'sports'],
    //     address: {
    //         street: '50 min st.',
    //         city: 'Boston',
    //         state: 'MA'
    //     }
    // }

    // console.log(person);
    // console.log(person.firstName, person.lastName);
    // console.log(person.hobbies[1]);
    // console.log(person.address.city);

    // person.email = 'johndoe@gmail.com'; // add property to person

    // const todos = [
    //     {
    //         id: 1,
    //         text: 'Take out trash',
    //         isCompleted: true
    //     },
    //     {
    //         id: 2,
    //         text: 'Meeting with boss',
    //         isCompleted: false
    //     },
    //     {
    //         id: 3,
    //         text: 'Dentist Appointment',
    //         isCompleted: true
    //     }
    // ];

    // console.log(todos[1].text);

    // const todoJSON = JSON.stringify(todos);
    // console.log(todoJSON);

// === Looping ===
// * for loop

    // for(let i=0; i<10; i++){
    //     console.log(i);
    // }

// * while loop

    // let i = 0;
    // while(i<10){
    //     console.log(`While Loop Number: ${i}`);
    //     i++;
    // }

// * for loop in array

    // for(let i=0; i<todos.length; i++){
    //     console.log(todos[i].text);
    // }

// * for
    // for (let todo of todos){
    //     console.log(todo.text); // or (todo) for all items or (todo.id) display id only
    // }

//=== High Order Array Methods ===
// * forEach

    // todos.forEach(function(todo){
    //     console.log(todo.text);
    // });

// * map

    // const todoText = todos.map(function(todo){
    //     return todo.text;
    // });

    // console.log(todoText);

// * filter

    // const todoCompleted = todos.filter(function(todo){
    //     return todo.isCompleted===true;
    // });

    // console.log(todoCompleted);

    // const todoCompleted1 = todos.filter(function(todo){
    //     return todo.isCompleted===true;
    // }).map(function(todo){
    //     return todo.text;
    // });

    // console.log(todoCompleted1);

//=== Conditionals ===

    // const x =10;

    // if(x==10){
    //     console.log('x is 10');
    // }

// * triple === test the type too
    
    // const y ='10';

    // if(y===10){
    //     console.log('y is 10');
    // }else{
    //     console.log('y is not equal to 10.');
    // }

// * else if

    // const n = 4;
    // if(n==10){
    //     console.log('n is 10');
    // } else if(x>10){
    //     console.log('n is greater than 10');
    // } else {
    //     console.log('n is less than 10');
    // }

// * or ||

    // const a = 4;
    // const b = 10;

    // if(a>5 || b > 10){
    //     console.log('a is more than 5 or b is more than 10.')
    // }

    // if(a>5 && b>10){
    //     console.log('a is more than 5 and b is more than 10.')
    // }

// * ternary operator ?

    // const c = 10;
    // const color = x > 10 ? 'red' : 'blue';

    // console.log(color);

// * switch

    // switch(color){
    //     case 'red':
    //         console.log('color is red');
    //         break;
        
    //     case 'blue':
    //         console.log('color is blue');
    //         break;

    //     default:
    //         console.log('color is NOT red or blue');
    //         break;
    // }

//=== Functions ====

    // function addNums(num1, num2){
    //     console.log(num1 + num2);
    // }

    // addNums(1,5);
    // addNums(); // will result NaN means not a number 

    // modify the function with default value in parameter
    // function addNums(num1=1, num2=1){ }

// * function that returns a value
    // function addNumbers(num1=1, num2=1){
    //     return num1 + num2;
    // }

    // console.log(addNumbers(5,5));

// * without using function
    // const addN = (num1=1, num2=1) =>{
    //     console.log(num1 + num2);
    // }

    // addN(5,3);

//=== Constructor Functions & Prototype ===

    // function Person(firstName, lastName, dob){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.dob = new Date(dob);

    //     // method in an object
    //     this.getBirthYear = function(){
    //         return this.dob.getFullYear();
    //     }
    //     this.getFullName = function(){
    //         return `${this.firstName} ${this.lastName}`;
    //     }
    // }

    // instead of writing the method inside Person you can use prototype
    // Person.prototype.getFullName = function(){
    //     return `${this.firstName} ${this.lastName}`;
    // }

    // const person1 = new Person('John', 'Doe', '4-3-1980');
    // const person2 = new Person('Mary', 'Smith', '3-6-1980');

    // console.log(person2.dob);
    // console.log(person1.dob.getFullYear());

    // console.log(person1.getBirthYear());
    // console.log(person1.getFullName());

    // console.log(person2.getFullName());

//=== ES6 Classes ===
// same as above in a prettier way to write it

// * Class

    // class Person{
    //     constructor(firstName, lastName, dob){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.dob = new Date(dob);
    //     }

    //     getBirthYear(){
    //         return this.dob.getFullYear();
    //     }

    //     getFullName(){
    //         return `${this.firstName} ${this.lastName}`;
    //     }
    // }

    // const person1 = new Person('John', 'Doe', '4-3-1980');
    // const person2 = new Person('Mary', 'Smith', '3-6-1980');
    // console.log(person1);

//=== DOM (Document Object Model) ===
    // console.log(window); // top level 
// * Single element

    // console.log(document.getElementById('my-form'));

    // assign in a variable
    // const form = document.getElementById('my-form');
    // console.log(form);

    // query selector
    // console.log(document.querySelector('.container'));
    // console.log(document.querySelector('h1'));

// * Multiple element selector

    // console.log(document.querySelectorAll('.item')); // will return a Nodelist like array
    // console.log(document.getElementsByClassName('item')); // will return an HTML Collection
    // console.log(document.getElementsByTagName('li'));

    // use querySelector and querySelectorAll

    // const items = document.querySelectorAll('.item');

    // items.forEach((item) => console.log(item));
    
//=== Manipulating the DOM ===

    // const ul = document.querySelector('.items');

    // ul.remove();
    // ul.lastElementChild.remove();
    // ul.firstElementChild.textContent = 'Hello';
    // ul.children[1].innerText = 'Brad';
    // ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

    // const btn = document.querySelector('.btn');
    // btn.style.background = 'red';

//=== Events ===
    // btn.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     console.log('click');
    //     console.log(e.target.value);
    //     btn.style.background = 'green';
    //     document.querySelector('#my-form').style.background = '#ccc';
    // });

//=== Form Script ===

    const myForm = document.querySelector('#my-form');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const msg = document.querySelector('.msg');
    const userList = document.querySelector('#users');

    myForm.addEventListener('submit', onSubmit);

    function onSubmit(e){
        e.preventDefault();

        if(nameInput.value === '' || emailInput===''){
            msg.classList.add('error');
            msg.innerHTML = 'Please enter all fields';

            setTimeout(() => msg.remove(), 3000); // trigger in 3 seconds
        } else{
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
            userList.appendChild(li);

            // Clear fields
            nameInput.value = '';
            emailInput.value = '';
            console.log('success');
        }
    }

