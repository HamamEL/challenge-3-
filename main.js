// remember to relax and ask for help when you need it (only from staff)
// YOU CAN ONLY USE MDN AS A RESOURCE
// https://developer.mozilla.org/en-US/docs/Web/JavaScript

// NOTE: you are accountable for your styling, so make sure your styling is good.
// ANOTHER NOTE: please use the console to test your code :)


//==============================================================================
/*                              Q1                                            */
//==============================================================================
//lets make an employee profile using closures

function employee(name, salary) {
    return {
        name: name,
        salary: salary
    }
}

var employeeA = employee("jack", 100);
var employeeB = employee("Mark", 200);
var employeeC = employee("Sara", 150);


//create a function when invoked returns the name of that employee.

// employeeA.sayMyName(); // "jack"
// employeeB.sayMyName(); // "Mark"
sayMyName: function(){
            return employeeName;
        },


//now modify that closure and add a function that says hello to the employee name;

// employeeA.sayHello(); // hello jack
// employeeB.sayHello(); // hello Mark

sayHello: function(){
            return 'hello'+  employeeName;
        },

//modify your closure and add function increaseSalary that increases the salary for the employee by n value and return it.
//employeeA.increaseSalary(50); // "your salary is 150$"
increaseSalary: function(n){
            employeeSalary =  n;
            return "Your salary is $"+  employeeSalary;
        },

//how about we let jack and mark meet togther!
//modify your closure and add function addFriend that accepts an object as a parameter, and let jack meets his friends.

// employeeA.addFriend(employeeB); // "you just became friend with Mark"
// employeeA.addFriend(employeeC); // "you just became friend with Mark and Sara"
addFriend: function(employee){
            friends.push(employee);
            return "You just became friends with "+ this.displayFriends();

//modify your closure to tell mark how many friends does he have.
displayFriends: function(){
            if(friends.length < 1) 
                return "You have no friends";
            displayFriends: function(){
            if(friends.length > 1) 
                return "You have more than one friends";


//=============================================================================
/*                                  Q2                                       */
//=============================================================================
//lets create a pet class using OOP concept,
// a - we need to create the pets (lets create only one for now), the invocation should take the name of the pet. 

// var pet1 = Pet("doggy");

// b - we need function to add the other info for the pet, called addInfo function. Make sure your functions unneeded memory space

// pet1.addInfo(age, owner, gender, species);

// c- create another function to increase the pet age by n value.

// d - create a variable called availability with the default state as false, then create another function to check the pet state, returns true if the pet is available and false if it's not

// f- in order to change the state of the pet, create a function called changeState, when called it will make the pet avaliablity true,
//    and when called again it will make it false.


// Write your code here .....


// Now, to make sure that you are actually reading, make a comment below this and type: Yes I am


// Yes I am
function makePet(petName){
    return {
        name: petName,
        available: false,
        ageUp: ageUp,
        addInfo: addInfo,
        availablity: availability,
        toggle: toggle,
    }
}

//=============================================================================
/*                                  Q3                                       */
//=============================================================================
function each(coll, f) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            f(coll[i], i);
        }
    } else {
        for (var key in coll) {
            f(coll[key], key);
        }
    }
}

function reduce(array, f, acc) {
    if (acc === undefined) {
        acc = array[0];
        array = array.slice(1);
    }
    each(array, function (element, i) {
        acc = f(acc, element, i);
    });
    return acc;
}

// Use the updated version of reduce to write a function max that returns the maximum number in an array of numbers. 

// Write your code here .....
function max(numbers) {
    var max = numbers[0];
    return reduce(numbers, function(acc, elem){
        if (max< elem){
           return max = elem;
        }else{
            return max;
        }
    }, 0)
}




//================================================================================
/*                              Q4                                              */
//================================================================================

// you can only use MDN as a resource in case you need one (https://developer.mozilla.org/en-US/docs/Learn/HTML). 
 // 1-Create a new html file called html_yourname.html and do the following:

 //    a. Change the title to : My easy Assessment.
 //    d. Add horizital line.
 //    e. Create a new div with id myInfo.
 //        1. Add header : HTML is Eazy
 //        2. Add the following paragraph: 
 //            HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications. 

 //    f. create an input text and a button called Add.


// Create css file and link it to your HTML file, and write css code for the following: 
//     a. Change the background color for the whole page.
//     b. Change the font family for the header of the page.  
//     c. Enlarge the input text (both: width & height).

// 2. Connect jQuery library to the HTML file.

// 3. Write javascript function when user type text inside the input text and click the "Add" 
//     button it will add the text to the ul element.



                              //  Good Luck :)) 