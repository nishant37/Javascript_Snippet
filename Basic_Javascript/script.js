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

var firstName = 'Rajan';
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
}
