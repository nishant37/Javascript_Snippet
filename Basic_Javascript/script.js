//console.log('Javascript from external js file');

/*
           Variables and datatypes


var firstName = 'Rajan';
console.log(firstName);

var lastName = 'Narula';
var age = 48;

var fullAge = true;

var job;
 */


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

/*

Operator Precedence in javascript
*/

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
