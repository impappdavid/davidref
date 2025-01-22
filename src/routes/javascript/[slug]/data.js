export const data = [

    //Comments
    {
        sectionTitle: "Comments",
        littleTitle: "",
        description: "Comments improve code readability and maintainability by explaining complex logic and providing context, making it easier for others (or yourself) to understand and update the code.",
        littleSections: [
            {
                name: "Single line comment",
                descriptions: [
                    {
                        desc: "To comment a single line, you can use the // symbol. This is useful for quickly adding notes or explanations to your code.",
                    },
                ],
                code: `
//This code write out: Hello World!
console.log("Hello World!")

`,
                output: "Hello World!",
            },
            {
                name: "Multiple line comment",
                descriptions: [
                    {
                        desc: "To comment multiple lines, you can use the /* symbol. To end the comment, you can use the */ symbol.",
                    },
                ],
                code: `
/*
This code write out: Hello World!
console.log("Hello World!")
*/

`,
                output: "",
            },
        ],

    },

    //Variables
    {
        sectionTitle: "Variables",
        littleTitle: "",
        description: "Variables should have clear, descriptive names that reflect their purpose, using consistent naming conventions like camelCase for readability.",
        littleSections: [
            {
                name: "Let",
                descriptions: [
                    {
                        desc: "he let keyword in JavaScript is used to declare a variable that can be reassigned later. It's block-scoped, meaning it only exists within the block (like a function or loop) where it's defined.",
                    },
                ],
                code: `
let age = 25;
age = 26; // reassignment is allowed
console.log(age);

`,
                output: "26",
            },
            {
                name: "Const",
                descriptions: [
                    {
                        desc: "The const keyword in JavaScript is used to declare a variable that cannot be reassigned after it's initialized. It's also block-scoped. However, if the variable is an object or array, its contents can still be changed.",
                    },
                ],
                code: `
const pi = 3.14;
pi = 3.14159; // Error: reassignment is not allowed

const person = { name: 'John' };
person.name = 'Jane'; // Allowed: object content can change

`,
                output: "",
            },
            {
                name: "Var",
                descriptions: [
                    {
                        desc: "The var keyword in JavaScript is used to declare a variable that is function-scoped or globally scoped (if declared outside a function). Unlike let and const, var allows variable redeclaration and reassignment. However, it has some quirks, like being hoisted to the top of its scope.",
                    },
                ],
                code: `
var age = 25;
age = 26; // reassignment is allowed

var age = 30; // redeclaration is allowed (not recommended)
console.log(age);

`,
                output: "30",
            },
        ],

    },

    //Operators
    {
        sectionTitle: "Operators",
        littleTitle: "",
        description: "Operators in JavaScript are symbols that perform operations on values or variables.",
        littleSections: [
            {
                name: "Arithmetic Operators",
                descriptions: [
                    {
                        desc: "Perform basic math operations.",
                    },
                ],
                code: `
+ //addition
- //subtraction
* //multiplication
/ //division
% //modulus
++ //increment
-- //decrement  

`,
                output: "",
            },
            {
                name: "Assignment Operators",
                descriptions: [
                    {
                        desc: "Assign values to variables.",
                    },
                ],
                code: `
= //assign
+= //add and assign
-= //subtract and assign
*= //multiply and assign
/= //divide and assign
%= //modulus and assign

`,
                output: "",
            },
            {
                name: "Comparison Operators",
                descriptions: [
                    {
                        desc: "Compare values.",
                    },
                ],
                code: `
== //equal
=== //strict equal
!= //not equal
!== //strict not equal
> //greater than
< //less than
>= //greater than or equal to
<= //less than or equal to

`,
                output: "",
            },
            {
                name: "Logical Operators",
                descriptions: [
                    {
                        desc: "Combine multiple conditions.",
                    },
                ],
                code: `
&& //AND
|| //OR
! //NOT

`,
                output: "",
            },
            {
                name: "Conditional (Ternary) Operator",
                descriptions: [
                    {
                        desc: "A shorthand for if-else.",
                    },
                ],
                code: `
//condition ? expr1 : expr2

let active = true;
let status = active ? "Active" : "Inactive";
console.log(status);

`,
                output: "Active",
            },

        ],

    },

    //Data Types
    {
        sectionTitle: "Data Types",
        littleTitle: "",
        description: "Data types in JavaScript are the different types of values that can be stored in variables.",
        littleSections: [
            {
                name: "String",
                descriptions: [
                    {
                        desc: "Represents text, enclosed in single or double quotes.",
                    },
                ],
                code: `
let firstName = "John";
let lastName = 'Doe';

`,
                output: "",
            },
            {
                name: "Number",
                descriptions: [
                    {
                        desc: "Represents both integer and floating-point numbers.",
                    },
                ],
                code: `
let stock = 25;
let price = 19.99;

`,
                output: "",
            },
            {
                name: "BigInt",
                descriptions: [
                    {
                        desc: "Represents very large integers.",
                    },
                ],
                code: `
let bigNumber = 1234567890123456789012345678901234567890n;

`,
                output: "",
            },
            {
                name: "Boolean",
                descriptions: [
                    {
                        desc: "Represents true or false.",
                    },
                ],
                code: `
let isActive = true;
let isLoggedIn = false;

`,
                output: "",
            },
            {
                name: "Undefined",
                descriptions: [
                    {
                        desc: "Represents a variable that has been declared but not assigned a value.",
                    },
                ],
                code: `
let age;
console.log(age);

`,
                output: "undefined",
            },
            {
                name: "Null",
                descriptions: [
                    {
                        desc: "Represents the intentional absence of any object value.",
                    },
                ],
                code: `
let user = null;

`,
                output: "",
            },

        ],

    },

    //Functions
    {
        sectionTitle: "Functions",
        littleTitle: "",
        description: "Functions in JavaScript are blocks of code that perform a specific task. They can be used to encapsulate logic and reuse it throughout a program.",
        littleSections: [
            {
                name: "Function Declaration",
                descriptions: [
                    {
                        desc: "Defines a function with a name and a body.",
                    },
                ],
                code: `
function greet(name) {
    return "Hello, " + name;
}

let result = greet("John");
console.log(result);

`,
                output: "Hello, John",
            },
            {
                name: "Function Expression",
                descriptions: [
                    {
                        desc: "Assigns a function to a variable.",
                    },
                ],
                code: `
let greet = function(name) {
    return "Hello, " + name;
}

let result = greet("John");
console.log(result);

`,
                output: "Hello, John",
            },
            {
                name: "Arrow Function",
                descriptions: [
                    {
                        desc: "A concise way to define functions.",
                    },
                ],
                code: `
let greet = (name) => {
    return "Hello, " + name;
}

let result = greet("John");
console.log(result);

`,
                output: "Hello, John",
            },
            {
                name: "Default Parameters",
                descriptions: [
                    {
                        desc: "Provide default values for function parameters.",
                    },
                ],
                code: `
function greet(name = "Guest") {
    return "Hello, " + name;
}

let result = greet();
console.log(result);

`,
                output: "Hello, Guest",
            },
            {
                name: "Rest Parameters",
                descriptions: [
                    {
                        desc: "Collects multiple arguments into an array.",
                    },
                ],
                code: `
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

let result = sum(1, 2, 3, 4, 5);
console.log(result);

`,
                output: "15",
            },
            {
                name: "Higher-Order Functions",
                descriptions: [
                    {
                        desc: "Functions that take other functions as arguments or return functions.",
                    },
                ],
                code: `
function add(a, b) {
  return a + b;
}

function operate(fn, a, b) {
  return fn(a, b);
}

operate(add, 3, 4);

`,
                output: "7",
            },
           

        ],

    },

    //Objects
    {
        sectionTitle: "Objects",
        littleTitle: "",
        description: "In JavaScript, objects are collections of key-value pairs, where each key (also called a property) is a string, and the value can be any data type. Objects are useful for storing related data together.",
        littleSections: [
            {
                name: "Creating an Object",
                descriptions: [
                    {
                        desc: "You can create an object using either the object literal syntax or the new Object() syntax.",
                    },
                ],
                code: `
const person = new Object();
person.name = 'John';
person.age = 30;
person.greet = function() {
  console.log('Hello!');
};

`,
                output: "",
            },
            {
                name: "Object Literal Syntax",
                descriptions: [
                    {
                        desc: "Assigns a function to a variable.",
                    },
                ],
                code: `
const person = {
  name: 'John',
  age: 30,
  greet: function() {
    console.log('Hello!');
  }
};

`,
                output: "",
            },
        ],
    },

    //Object properties
    {
        sectionTitle: "Object properties",
        littleTitle: "",
        description: "Object properties are the key-value pairs that define the characteristics of an object. Each property has a name (key) and a value.",
        littleSections: [
            {
                name: "Accessing Properties",
                descriptions: [
                    {
                        desc: "You can access an object's properties using dot notation or bracket notation.",
                    },
                ],
                code: `
const person = {
  name: 'John',
  age: 30,
  greet: function() {
    console.log('Hello!');
  }
};

console.log(person.name); // Accessing property using dot notation
console.log(person['name']); // Accessing property using bracket notation

`,
                output: "John",
            },
            {
                name: "Adding or Updating Properties",
                descriptions: [
                    {
                        desc: "You can also access an object's properties using bracket notation.",
                    },
                ],
                code: `
const person = {
  name: 'John',
  age: 30,
};

person.name = 'Jane';  // Update property
person.city = 'New York';  // Add new property

console.log(person.name, person.city); 

`,
                output: "Jane New York",
            },
            {
                name: " Deleting Properties",
                descriptions: [
                    {
                        desc: "You can remove properties from an object using the delete keyword.",
                    },
                ],
                code: `
const person = {
  name: 'John',
  age: 30,
};

delete person.age;

`,
                output: "",
            },
            {
                name: "Nested Objects",
                descriptions: [
                    {
                        desc: "Objects can contain other objects as values.",
                    },
                ],
                code: `
const person = {
  name: 'John',
  address: {
    street: '123 Main St',
    city: 'New York'
  }
};

console.log(person.address.city); 

`,
                output: "New York",
            },
           

        ],

    },

    //Object methods
    {
        sectionTitle: "Object Methods",
        littleTitle: "",
        description: "Objects can contain functions as values, called methods.",
        littleSections: [
            {
                name: "Creating an Object Method",
                descriptions: [
                    {
                        desc: "You can create an object method by assigning a function to a property.",
                    },
                ],
                code: `
const person = {
  name: 'John',
  age: 30,
  greet: function() {
    console.log('Hello!');
  }
};

`,
                output: "",
            },
            {
                name: "Accessing Object Methods",
                descriptions: [
                    {
                        desc: "You can access an object's methods using dot notation or bracket notation.",
                    },
                ],
                code: `
const person = {
  name: 'John',
  age: 30,
  greet: function() {
    console.log('Hello!');
  }
};

person.greet();

`,
                output: "Hello!",
            },
           
           

        ],

    },

    //Object Constructors
    {
        sectionTitle: "Object Constructors",
        littleTitle: "",
        description: "Object constructors are functions that create objects.",
        littleSections: [
            {
                name: "Creating an Object Constructor",
                descriptions: [
                    {
                        desc: "You can create an object constructor by using the new keyword.",
                    },
                ],
                code: `
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person('John', 30);
console.log(person1.name);


`,
                output: "John",
            },
        ],

    },

    //Strings
    {
        sectionTitle: "Strings",
        littleTitle: "",
        description: "Strings are used to represent text in JavaScript. They can be enclosed in single or double quotes.",
        littleSections: [
            {
                name: "String Concatenation",
                descriptions: [
                    {
                        desc: "To concatenate strings, you can use the + operator.",
                    },
                ],
                code: `
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName);

`,
                output: "John Doe",
            },
            {
                name: "String Length",
                descriptions: [
                    {
                        desc: "To get the length of a string, you can use the length property.",
                    },
                ],
                code: `
let message = "Hello, World!";
console.log(message.length);

`,
                output: "13",
            },
            {
                name: "Quotes Inside Quotes",
                descriptions: [
                    {
                        desc: "You can use single quotes inside double quotes or double quotes inside single quotes.",
                    },
                ],
                code: `
let message = "He said, 'Hello!'";
console.log(message);

`,
                output: "He said, 'Hello!'",
            },
            {
                name: "Escape Characters",
                descriptions: [
                    {
                        desc: "You can use escape characters to include special characters in a string.",
                    },
                ],
                code: `
/*
Examples

\\b - Backspace
\\t - Tab
\\n - New line
\\r - Carriage return
\\' - Single quote
\\" - Double quote
\\ - Backslash
*/

let message = "He said, \\'Hello!\\'";
console.log(message);

`,
                output: "He said, 'Hello!'",
            },
            {
                name: "Breaking Long Lines",
                descriptions: [
                    {
                        desc: "You can use the backslash character to break a long line into multiple lines.",
                    },
                ],
                code: `
document.getElementById("demo").innerHTML =
"Hello Dolly!";

document.getElementById("demo").innerHTML = "Hello " +
"Dolly!";

`,
                output: "This is a long message that needs to be broken into multiple lines.",
            },

            {
                name: "Template Strings",
                descriptions: [
                    {
                        desc: "Template strings are a way to create strings with variables.",
                    },
                ],
                code: `
let text =
\`The quick
brown fox
jumps over
the lazy dog\`;

`,
                output: "The quick brown fox jumps over the lazy dog",
            },
            
        ],

    },

    //String Methods
    {
        sectionTitle: "String Methods",
        littleTitle: "",
        description: "JavaScript provides various string methods to manipulate and work with strings.",
        littleSections: [
            {
                name: "length",
                descriptions: [
                    {
                        desc: "Returns the length of a string.",
                    },
                ],
                code: `
const str = "Hello";
console.log(str.length);

`,
                output: "5",
            },
            {
                name: "toUpperCase()",
                descriptions: [
                    {
                        desc: "Converts the string to uppercase.",
                    },
                ],
                code: `
const str = "hello";
console.log(str.toUpperCase());

`,
                output: "HELLO",
            },
            {
                name: "toLowerCase()",
                descriptions: [
                    {
                        desc: "Converts the string to lowercase.",
                    },
                ],
                code: `
const str = "HELLO";
console.log(str.toLowerCase());

`,
                output: "hello",
            },
            {
                name: "charAt(index)",
                descriptions: [
                    {
                        desc: "Returns the character at a specified index.",
                    },
                ],
                code: `
const str = "Hello";
console.log(str.charAt(1)); 

`,
                output: "e",
            },
            {
                name: "indexOf(substring)",
                descriptions: [
                    {
                        desc: "Returns the index of the first occurrence of the specified substring, or -1 if not found.",
                    },
                ],
                code: `
const str = "Hello World";
console.log(str.indexOf("World")); 

`,
                output: "6",
            },
            {
                name: "lastIndexOf(substring)",
                descriptions: [
                    {
                        desc: "Finds the last occurrence of a specified substring in a string. Returns the index of the last match or -1 if not found.",
                    },
                ],
                code: `
const str = "Hello World, Hello JavaScript!";
console.log(str.lastIndexOf("Hello")); // 13
console.log(str.lastIndexOf("Python")); // -1

`,
                output: "",
            },

            {
                name: "includes(substring)",
                descriptions: [
                    {
                        desc: "Checks if the string contains a specified substring, returning true or false.",
                    },
                ],
                code: `
const str = "Hello World";
console.log(str.includes("World"));

`,
                output: "true",
            },
            {
                name: "slice(start, end)",
                descriptions: [
                    {
                        desc: "Extracts a portion of the string from the start index to (but not including) the end index.",
                    },
                ],
                code: `
const str = "Hello World";
console.log(str.slice(0, 5)); 

`,
                output: "Hello",
            },
            {
                name: "substring(start, end)",
                descriptions: [
                    {
                        desc: "Similar to slice, but does not accept negative indices.",
                    },
                ],
                code: `
const str = "Hello World";
console.log(str.substring(0, 5));

`,
                output: "Hello",
            },
            {
                name: "trim()",
                descriptions: [
                    {
                        desc: "Removes whitespace from both ends of the string.",
                    },
                ],
                code: `
const str = "   Hello World   ";
console.log(str.trim()); // "Hello World"

`,
                output: "Hello World",
            },
            {
                name: "replace(searchValue, newValue)",
                descriptions: [
                    {
                        desc: "Replaces the first occurrence of a substring with a new value.",
                    },
                ],
                code: `
const str = "Hello World";
console.log(str.replace("World", "JavaScript"));
`,
                output: "Hello JavaScript",
            },
            {
                name: "split(delimiter)",
                descriptions: [
                    {
                        desc: "Splits a string into an array of substrings based on the specified delimiter.",
                    },
                ],
                code: `
const str = "apple,banana,grape";
console.log(str.split(","));

`,
                output: '["apple", "banana", "grape"]',
            },
            {
                name: "concat(...strings)",
                descriptions: [
                    {
                        desc: "Joins two or more strings and returns a new string.",
                    },
                ],
                code: `
const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(" ", str2)); 

`,
                output: 'Hello World',
            },
            {
                name: "startsWith(substring)",
                descriptions: [
                    {
                        desc: "Checks if the string starts with the specified substring.",
                    },
                ],
                code: `
const str = "Hello World";
console.log(str.startsWith("Hello"));

`,
                output: 'true',
            },
            {
                name: "endsWith(substring)",
                descriptions: [
                    {
                        desc: "Checks if the string ends with the specified substring.",
                    },
                ],
                code: `
const str = "Hello World";
console.log(str.endsWith("World"));

`,
                output: 'true',
            },
            {
                name: "repeat(count)",
                descriptions: [
                    {
                        desc: "Repeats the string count times.",
                    },
                ],
                code: `
const str = "Hello";
console.log(str.repeat(3)); 

`,
                output: 'HelloHelloHello',
            },
            {
                name: "padStart(targetLength, padString)",
                descriptions: [
                    {
                        desc: "Pads the string at the start to reach the target length.",
                    },
                ],
                code: `
const str = "5";
console.log(str.padStart(3, "0"));

`,
                output: '005',
            },
            {
                name: "padEnd(targetLength, padString)",
                descriptions: [
                    {
                        desc: "Pads the string at the end to reach the target length.",
                    },
                ],
                code: `
const str = "5";
console.log(str.padEnd(3, "0"));

`,
                output: '500',
            },
            {
                name: "search(regExp)",
                descriptions: [
                    {
                        desc: "Searches for a substring or matches a regular expression in a string. Returns the index of the first match, or -1 if not found.",
                    },
                ],
                code: `
const str = "Hello JavaScript!";
console.log(str.search("JavaScript")); // 6
console.log(str.search(/script/i));    // 10 (case-insensitive)

`,
                output: '',
            },
            {
                name: "match(regExp)",
                descriptions: [
                    {
                        desc: "Matches a regular expression against a string. ",
                    },
                ],
                code: `
const str = "cat, bat, mat";
console.log(str.match(/at/));       // ["at"] (first match only)
console.log(str.match(/at/g));     // ["at", "at", "at"] (global matches)
console.log(str.match(/dog/));     // null (no match)

`,
                output: '',
            },
            {
                name: "matchAll(regExp)",
                descriptions: [
                    {
                        desc: "Returns an iterator of all matches (useful for advanced patterns or accessing groups). Requires the g (global) flag in the regular expression. ",
                    },
                ],
                code: `
const str = "cat, bat, mat";
const matches = str.matchAll(/(b|m)at/g);

for (const match of matches) {
  console.log(match);
}
// Output:
// ["bat", "b"]
// ["mat", "m"]

`,
                output: '',
            },
            
        ],

    },

    

];