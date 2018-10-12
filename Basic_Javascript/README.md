Basics of Javascript

**Index.html**
In HTML we can add Javascript either by using Inline Script or by the external JS file.

**Variables and Datatypes**
Variable in JS is initialized with the var keyword.
This explains the variables used in the Javascript. If the variable used in JS is a
string then the value of string is in single colons.
Different data types in JS
1. Number
2. String
3. Boolean
4. Undefined
5. Null

Best practice is to give variables meaningful names.

Camel case notation is preferred in JS.

Variables cannot start with numbers and variables except for a $ sign or _ (underscore).

Cannot use Javascript reserved keywords as variable names.  

In Javascript there are two types of comments:-
1. Single Line Comments (//)
2. Multi Line Comment (/*     */)

**variable_mutation**

Javascript uses type coercion method to automatically convert datatypes to String
to join them together as one string.


Javascript automatically converts types from one another as it is needed.

Prompt is used in Javascript to get the values from user. The value from prompt can be stored in the variable.

**Operators**
Operators are functions that are written in a special way in Javascript.

Mathematical operators
1. - (Subtraction)
2. + (Addition)
3. * (Multiplication)
4. / (Division)

Logical Operators
1. ==  equal to
2. === equal value and equal type
3. != not equal
4. !== not equal value or equal type
5. > greater than
6. < less than
7. >= greater than or equal to
8. <= less than or equal to

TypeOf Operator
Tells us the type of operator

**Operator_Precedence**
1. Assignment and Exponent operators work from right-to-left
2. Math operators work from left-to-right


**If Else Statement**
1. In Javascript if Statement (===) is used to compare value as well as type.
2. If the boolean variable is used in if Statement then we don't have to write a condition.

**Boolean Logic**
Boolean Logic deals with true and false.

Several Logical Operators:
1. AND (&&) => true if all are true
2. OR (||) => true if one is true
3. NOT (!) => inverts true/false value

**Ternary Operator and Switch Statement**
In the ternary operator there is condition first then the if block and then there is else block.

Switch Statement is used to perform different actions based on different conditions.

There can be multiple case clauses for the same code to be executed.

**Truthy and Falsy Values**
Falsy Values in Javascript includes 'Undefined', 'null', '0', ''(Empty Strings), 'Not a Number(NaN)'

Truthy Values: NOT Falsy Values

If/Else is the handy way to describe if value of variable is defined or not

**Functions**
Functions are like containers that hold some kind of code and we can pass arguments into the functions and then they can return the value.

For writing a function we write:

function function_name()

Functions helps us to not repeat our code again and again

We can call one function from another function.

.**Function Statements and Expressions**

When we start writing function Expression we use function keyword and then put arguments list and then we can assign the variable to the function.

When we use the return Statement in switch Statement we do not use break Statement

Return keyword not only returns the values but also end the function.

**Difference between Statement and Expression**

Javascript Expressions are piece of code that always produces values. It doesn't matter how long they are as long as the code results in a single value then it is an Expression.

Statement performs actions. They do things but they do not produce intermediate results.

**Arrays**

Arrays are collection of variables which can have different data types.

**Creating an Array**

1. Using an array literal
  var array_name = [item1,item2,item3,...]

2. Using a new keywords
 var array_name = new Array(item1,item2,item3);

 **Access Elements**
 We can access elements of an array by referring to its index number.
 var name = array_name[0];
 This Statement access the value of the first element in array_name.

 **Length**
 To get the length of an array we use array_name.length function

 **Mutate Array**
 If we write array_name[element_name]='new_value' then we can see that new value in the array.
 array_name[1] = item5;

 We can have different data types in a single data structure.

**Methods to add Elements to an array**

 push method adds an element to the end of array.

 unshift method is similar to push method but instead of adding to end of an array it adds to the beginning.

 **Methods to delete Elements from an array**

pop method deletes an element from the end in an array.

shift method removes an element from beginning in an array.

indexOf method returns the position of an element that we pass in the square brackets.
If the element is present in array it will return the position of the element
else it will return -1

**Objects and Properties**

Objects can be used to group together different variables that belong together and have no particular order.

Objects in JS are created using literal.

Ex: var value = {
  key : 'data',
  key1 : 'data1'
};

We can put all type of different data types in Javascript objects.

We can even put arrays in objects.

**Access Properties of object**

First is using the dot operator

In javascript Properties of object are accessed using the dot notation.
For example: (value.data) to access the property of above object.

Second is using the square brackets []
For example: value['data1'] access the second key of the object created

**Mutate Objects**

We can mutate data using dot operator or square brackets same as an arrays
value.key = data2;
value[key1] = data3;

**To create empty object**

var var_name = new object();
var_name.key = value;


**Difference between arrays and Objects**

In arrays order matters a lot whereas in object it does not matter at all.
