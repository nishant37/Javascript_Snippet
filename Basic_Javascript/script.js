//console.log('Javascript from external js file');

/************************************************************

/*
           Variables and datatypes


var firstName = 'Rajan';
console.log(firstName);

var lastName = 'Narula';
var age = 48;

var fullAge = true;

var job;
 */

/************************************************************

 /*
 Variable mutation and type coercion
 */

 /*

 var firstName = 'Rajan';
 var age = 48;



 console.log(firstName + ' '+ age);



 var job, married;
 job = 'businessman';
 married = true;

 console.log(firstName + ' is '+ age + ' years old. He is a '+job +'. Is he married? '+ married);


 age = 'forty eight';
 job = 'father';

 alert(firstName + ' is '+ age + ' years old. He is a '+job +'. Is he married? '+ married);

 var lastName = prompt('What is your last name?');
 console.log(firstName + ' '+ lastName);

 */
/************************************************************


 /*

 Operators in Javascript

 */

 /*
 var firstName = 'Rajan';
 var ageRajan = 48;
 var friendRajan;
 var ageFriend = 33;


 var currentYear = 2018;
 var yearRajan = currentYear- ageRajan;
 friendRajan = currentYear - ageFriend;

 console.log(yearRajan);



 console.log(currentYear+2);

 console.log(currentYear*2);

 console.log(currentYear/2);


  var older = ageRajan > ageFriend;
  console.log(older);


  console.log(typeOf(older));

*/

/************************************************************
/*

Operator Precedence in javascript
*/
/*
var now = 2018;
var yearRajan = 1970;
var fullAge = 21;

// Multiple Operators
var isFullAge = now - yearRajan >= fullAge;
console.log(isFullAge);  // true

// Grouping
var ageRajan = now - yearRajan;
var ageFriend = 35;
var average = (ageRajan + ageFriend) /2;
console.log(average);

// Multiple Assignments
var x,y;
x = y = (3+5) * 4 -6; // 8 * 4 -6 // 32 - 6 // 26
console.log(x, y);

// More Operators
x = x*2;
x*=2;
// Both the operators above are exactly same.
x+=2;
x++;
*/

/************************************************************

/*
If Else Statement

*/

/*

var firstName = 'Rajan';
var status = 'single';

if(status === 'married'){
  console.log(firstName + ' is married');
} else{
  console.log(firstName+ ' will hopefully marry soon');
}

var isMarried = true;
if(isMarried){
  console.log(firstName + ' is married');
} else{
  console.log(firstName+ ' will hopefully marry soon');
}

*/

/************************************************************

/*
Boolean Logic

*/

/*
var firstName = 'Rajan';
var age = 16;

if(age<13){
  console.log(firstName+' is a boy.');
} else if (age >=13 && age < 20) {
    console.log(firstName+' is a teenager.');
} else if (age >=20 && age < 30){
  console.log(firstName+' is a young man.');
}


else {
  console.log(firstName+' is a man.');
}
*/

/************************************************************

/*
Ternary Operator and switch Statement

*/

/*var firstName = 'Rajan';
var age = 16;

// Ternary Operator
age >=25 ? console.log(firstName+ ' drinks beer.')
: console.log(firstName+' drinks Juice.');

var drink = age > =18 ? 'beer' : 'juice';

// Switch Statement
var job = 'businessman';
switch (job) {
  case 'businessman':
  case 'business':
      console.log(firstName+ ' is a businessman' );
    break;
  case 'driver':
       console.log(firstName+ ' is a driver');
    break;

  default:
     console.log(firstName+' does something else');
}*/

/************************************************************

/*
Truth and False Values and Equality OPerators

*/

/*
var height;
// Handy way of testing if the variable exists or not
if (height) {
  console.log('Variable is defined');
}else {
  // height variable is Undefined
  console.log('Variable has not been defined');
}

height =23;
// Variable is defined now
if (height) {
  console.log('Variable is defined');
}else {
  console.log('Variable has not been defined');
}

height = 0;
// We check if variable exists or it is equal to 0
if (height || height ===0) {
  console.log('Variable is defined');
}else {
  console.log('Variable has not been defined');
}  */

/************************************************************

/*
functions

*/

/*
function calculateAge(birthYear){
   return 2018 - birthYear;
}
// ageRajan is a variable name used to store the output from the function called
var ageRajan = calculateAge(1970);
var ageMike = calculateAge(1975);
var ageIndependence = calculateAge(1947);
//console.log(ageRajan, ageMike, ageIndependence);


   function yearsUntilRetirement(year, firstName){
   var age = calculateAge(year);
   var retirement = 65 - age;
   if (retirement > 0) {
          console.log(firstName + ' retires in '+ retirement+ ' years.');
   } else{
     console.log(firstName + ' is already retired');
   }

}
yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
*/
