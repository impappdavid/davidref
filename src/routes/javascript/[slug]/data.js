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
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
//This code write out: Hello World!
console.log("Hello World!")

`,
                output: ["Hello World!"],
            },
            {
                name: "Multiple line comment",
                descriptions: [
                    {
                        desc: "To comment multiple lines, you can use the /* symbol. To end the comment, you can use the */ symbol.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
/*
This code write out: Hello World!
console.log("Hello World!")
*/

`,
                output: [],
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
                        desc: "The let keyword in JavaScript is used to declare a variable that can be reassigned later. It's block-scoped, meaning it only exists within the block (like a function or loop) where it's defined.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let age = 25;
age = 26; // reassignment is allowed
console.log(age);

`,
                output: ["26"],
            },
            {
                name: "Const",
                descriptions: [
                    {
                        desc: "The const keyword in JavaScript is used to declare a variable that cannot be reassigned after it's initialized. It's also block-scoped. However, if the variable is an object or array, its contents can still be changed.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const pi = 3.14;
pi = 3.14159; // Error: reassignment is not allowed

const person = { name: 'John' };
person.name = 'Jane'; // Allowed: object content can change
console.log(person.name);

`,
                output: ['Jane'],
            },
            {
                name: "Var",
                descriptions: [
                    {
                        desc: "The var keyword in JavaScript is used to declare a variable that is function-scoped or globally scoped (if declared outside a function). Unlike let and const, var allows variable redeclaration and reassignment. However, it has some quirks, like being hoisted to the top of its scope.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
var age = 25;
age = 26; // reassignment is allowed

var age = 30; // redeclaration is allowed (not recommended)
console.log(age);

`,
                output: ["30"],
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
                table: [
                    {
                        header: [],
                        body: [],
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
                output: [],
            },
            {
                name: "Assignment Operators",
                descriptions: [
                    {
                        desc: "Assign values to variables.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
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
                output: [],
            },
            {
                name: "Comparison Operators",
                descriptions: [
                    {
                        desc: "Compare values.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
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
                output: [],
            },
            {
                name: "Logical Operators",
                descriptions: [
                    {
                        desc: "Combine multiple conditions.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
&& //AND
|| //OR
! //NOT

`,
                output: [],
            },
            {
                name: "Conditional (Ternary) Operator",
                descriptions: [
                    {
                        desc: "A shorthand for if-else.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
//condition ? expr1 : expr2

let active = true;
let status = active ? "Active" : "Inactive";
console.log(status);

`,
                output: ["Active"],
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
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let firstName = "John";
let lastName = 'Doe';

`,
                output: [],
            },
            {
                name: "Number",
                descriptions: [
                    {
                        desc: "Represents both integer and floating-point numbers.",
                    },
                ],

                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let stock = 25;
let price = 19.99;

`,
                output: [],
            },
            {
                name: "BigInt",
                descriptions: [
                    {
                        desc: "Represents very large integers.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let bigNumber = 1234567890123456789012345678901234567890n;

`,
                output: [],
            },
            {
                name: "Boolean",
                descriptions: [
                    {
                        desc: "Represents true or false.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let isActive = true;
let isLoggedIn = false;

`,
                output: [],
            },
            {
                name: "Undefined",
                descriptions: [
                    {
                        desc: "Represents a variable that has been declared but not assigned a value.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let age;
console.log(age);

`,
                output: ["undefined"],
            },
            {
                name: "Null",
                descriptions: [
                    {
                        desc: "Represents the intentional absence of any object value.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
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
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
function greet(name) {
    return "Hello, " + name;
}

let result = greet("John");
console.log(result);

`,
                output: ["Hello, John"],
            },
            {
                name: "Function Expression",
                descriptions: [
                    {
                        desc: "Assigns a function to a variable.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let greet = function(name) {
    return "Hello, " + name;
}

let result = greet("John");
console.log(result);

`,
                output: ["Hello, John"],
            },
            {
                name: "Arrow Function",
                descriptions: [
                    {
                        desc: "A concise way to define functions.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let greet = (name) => {
    return "Hello, " + name;
}

let result = greet("John");
console.log(result);

`,
                output: ["Hello, John"],
            },
            {
                name: "Default Parameters",
                descriptions: [
                    {
                        desc: "Provide default values for function parameters.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
function greet(name = "Guest") {
    return "Hello, " + name;
}

let result = greet();
console.log(result);

`,
                output: ["Hello, Guest"],
            },
            {
                name: "Rest Parameters",
                descriptions: [
                    {
                        desc: "Collects multiple arguments into an array.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

let result = sum(1, 2, 3, 4, 5);
console.log(result);

`,
                output: ["15"],
            },
            {
                name: "Higher-Order Functions",
                descriptions: [
                    {
                        desc: "Functions that take other functions as arguments or return functions.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
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
                output: [],
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
                table: [
                    {
                        header: [],
                        body: [],
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
                output: [],
            },
            {
                name: "Object Literal Syntax",
                descriptions: [
                    {
                        desc: "Assigns a function to a variable.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
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
                output: [],
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
                table: [
                    {
                        header: [],
                        body: [],
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
                output: ["John", "John"],
            },
            {
                name: "Adding or Updating Properties",
                descriptions: [
                    {
                        desc: "You can also access an object's properties using bracket notation.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
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
                output: ["Jane New York"],
            },
            {
                name: " Deleting Properties",
                descriptions: [
                    {
                        desc: "You can remove properties from an object using the delete keyword.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const person = {
  name: 'John',
  age: 30,
};

delete person.age;

console.log(person);
`,
                output: ["{ name: 'John' }"],
            },
            {
                name: "Nested Objects",
                descriptions: [
                    {
                        desc: "Objects can contain other objects as values.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
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
                output: ["New York"],
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
                table: [
                    {
                        header: [],
                        body: [],
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
                output: ["Hello!"],
            },
            {
                name: "Accessing Object Methods",
                descriptions: [
                    {
                        desc: "You can access an object's methods using dot notation or bracket notation.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
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
                output: ["Hello!"],
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
                table: [
                    {
                        header: [],
                        body: [],
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
                output: ["John"],
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
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName);

`,
                output: ["John Doe"],
            },
            {
                name: "String Length",
                descriptions: [
                    {
                        desc: "To get the length of a string, you can use the length property.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let message = "Hello, World!";
console.log(message.length);

`,
                output: ["13"],
            },
            {
                name: "Quotes Inside Quotes",
                descriptions: [
                    {
                        desc: "You can use single quotes inside double quotes or double quotes inside single quotes.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let message = "He said, 'Hello!'";
console.log(message);

`,
                output: ["He said, 'Hello!'"],
            },
            {
                name: "Escape Characters",
                descriptions: [
                    {
                        desc: "You can use escape characters to include special characters in a string.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
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
                output: ["He said, 'Hello!'"],
            },
            {
                name: "Breaking Long Lines",
                descriptions: [
                    {
                        desc: "You can use the backslash character to break a long line into multiple lines.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
document.getElementById("demo").innerHTML =
"Hello Dolly!";

document.getElementById("demo").innerHTML = "Hello " +
"Dolly!";

`,
                output: ["This is a long message that needs to be broken into multiple lines."],
            },

            {
                name: "Template Strings",
                descriptions: [
                    {
                        desc: "Template strings are a way to create strings with variables.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let text =
\`The quick
brown fox
jumps over
the lazy dog\`;

`,
                output: ["The quick brown fox jumps over the lazy dog"],
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
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const str = "Hello";
console.log(str.length);

`,
                output: ["5"],
            },
            {
                name: "toUpperCase()",
                descriptions: [
                    {
                        desc: "Converts the string to uppercase.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const str = "hello";
console.log(str.toUpperCase());

`,
                output: ["HELLO"],
            },
            {
                name: "toLowerCase()",
                descriptions: [
                    {
                        desc: "Converts the string to lowercase.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const str = "HELLO";
console.log(str.toLowerCase());

`,
                output: ["hello"],
            },
            {
                name: "charAt(index)",
                descriptions: [
                    {
                        desc: "Returns the character at a specified index.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const str = "Hello";
console.log(str.charAt(1)); 

`,
                output: ["e"],
            },
            {
                name: "indexOf(substring)",
                descriptions: [
                    {
                        desc: "Returns the index of the first occurrence of the specified substring, or -1 if not found.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const str = "Hello World";
console.log(str.indexOf("World")); 

`,
                output: ["6"],
            },
            {
                name: "lastIndexOf(substring)",
                descriptions: [
                    {
                        desc: "Finds the last occurrence of a specified substring in a string. Returns the index of the last match or -1 if not found.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const str = "Hello World, Hello JavaScript!";
console.log(str.lastIndexOf("Hello")); // 13
console.log(str.lastIndexOf("Python")); // -1

`,
                output: [13, -1],
            },

            {
                name: "includes(substring)",
                descriptions: [
                    {
                        desc: "Checks if the string contains a specified substring, returning true or false.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const str = "Hello World";
console.log(str.includes("World"));

`,
                output: ["true"],
            },
            {
                name: "slice(start, end)",
                descriptions: [
                    {
                        desc: "Extracts a portion of the string from the start index to (but not including) the end index.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const str = "Hello World";
console.log(str.slice(0, 5)); 

`,
                output: ["Hello"],
            },
            {
                name: "substring(start, end)",
                descriptions: [
                    {
                        desc: "Similar to slice, but does not accept negative indices.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const str = "Hello World";
console.log(str.substring(0, 5));

`,
                output: ["Hello"],
            },
            {
                name: "trim()",
                descriptions: [
                    {
                        desc: "Removes whitespace from both ends of the string.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const str = "   Hello World   ";
console.log(str.trim()); // "Hello World"

`,
                output: ["Hello World"],
            },
            {
                name: "replace(searchValue, newValue)",
                descriptions: [
                    {
                        desc: "Replaces the first occurrence of a substring with a new value.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const str = "Hello World";
console.log(str.replace("World", "JavaScript"));
`,
                output: ["Hello JavaScript"],
            },
            {
                name: "split(delimiter)",
                descriptions: [
                    {
                        desc: "Splits a string into an array of substrings based on the specified delimiter.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const str = "apple,banana,grape";
console.log(str.split(","));

`,
                output: ['["apple", "banana", "grape"]'],
            },
            {
                name: "concat(...strings)",
                descriptions: [
                    {
                        desc: "Joins two or more strings and returns a new string.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(" ", str2)); 

`,
                output: ['Hello World'],
            },
            {
                name: "startsWith(substring)",
                descriptions: [
                    {
                        desc: "Checks if the string starts with the specified substring.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
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
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const str = "Hello World";
console.log(str.endsWith("World"));

`,
                output: ['true'],
            },
            {
                name: "repeat(count)",
                descriptions: [
                    {
                        desc: "Repeats the string count times.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
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
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const str = "5";
console.log(str.padStart(3, "0"));

`,
                output: ['005'],
            },
            {
                name: "padEnd(targetLength, padString)",
                descriptions: [
                    {
                        desc: "Pads the string at the end to reach the target length.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const str = "5";
console.log(str.padEnd(3, "0"));

`,
                output: ['500'],
            },
            {
                name: "search(regExp)",
                descriptions: [
                    {
                        desc: "Searches for a substring or matches a regular expression in a string. Returns the index of the first match, or -1 if not found.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
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
                table: [
                    {
                        header: [],
                        body: [],
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
                table: [
                    {
                        header: [],
                        body: [],
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

    //Numbers
    {
        sectionTitle: "Numbers",
        littleTitle: "",
        description: "In JavaScript, numbers are used to represent numeric values. They can be integers or floating-point numbers.",
        littleSections: [
            {
                name: "Integer Precision",
                descriptions: [
                    {
                        desc: "Integers (numbers without a period or exponent notation) are accurate up to 15 digits",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let x = 999999999999999;   // x will be 999999999999999
let y = 9999999999999999;  // y will be 10000000000000000

`,
                output: "",
            },
            {
                name: "Floating Precision",
                descriptions: [
                    {
                        desc: "",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
//Floating point arithmetic is not always 100% accurate:
let x = 0.2 + 0.1;  // x will be 0.30000000000000004

//To solve the problem above, it helps to multiply and divide:
let z = (0.2 * 10 + 0.1 * 10) / 10; // z will be 0.3

`,
                output: "",
            },
            {
                name: "NaN - Not a Number",
                descriptions: [
                    {
                        desc: "NaN is a JavaScript value that represents Not-a-Number. It is a special value that indicates an invalid or undefined number.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let x = 100 / "Apple";
console.log(x); 

//However, if the string is numeric, the result will be a number:
let y = 100 / "10";
console.log(y); 

`,
                output: ["NaN", "10"],
            },
            {
                name: "isNaN()",
                descriptions: [
                    {
                        desc: "Checks if a value is NaN.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let x = 100 / "Apple";
console.log(isNaN(x));

`,
                output: ["true"],
            },
            {
                name: "typeof NaN",
                descriptions: [
                    {
                        desc: "Returns the type of a value.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let x = 100 / "Apple";
console.log(typeof x);

`,
                output: ["number"],
            },
            {
                name: "Infinity",
                descriptions: [
                    {
                        desc: "Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number. Infinity is a number.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
//Division by 0 (zero) also generates Infinity:
let x = 100 / 0;
console.log(x);

`,
                output: ["Infinity"],
            },
            {
                name: "Hexadecimal",
                descriptions: [
                    {
                        desc: "Hexadecimal is a base-16 number system. It uses 16 symbols: the numbers 0-9 and the letters A-F.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let x = 0xFF;
console.log(x);

`,
                output: ["255"],
            },
        ],
    },

    //Bigint
    {
        sectionTitle: "BigInt",
        littleTitle: "",
        description: "BigInt is a new data type (ES2020) that allows you to represent integers larger than 2^53 - 1.",
        littleSections: [
            {
                name: "How to Create a BigInt",
                descriptions: [
                    {
                        desc: "To create a BigInt, append n to the end of an integer or call BigInt()",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345)

`,
                output: "",
            },
            {
                name: "BigInt Decimals",
                descriptions: [
                    {
                        desc: "A BigInt can not have decimals.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let x = 5n;
let y = x / 2;
// Error: Cannot mix BigInt and other types, use explicit conversion.

`,
                output: "",
            },
            {
                name: "BigInt Hex, Octal and Binary",
                descriptions: [
                    {
                        desc: "BigInt can also be written in hexadecimal, octal, or binary notation",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let hex = 0x20000000000003n;
let oct = 0o400000000000000003n;
let bin = 0b100000000000000000000000000000000000000000000000000011n;

`,
                output: [],
            },
            {
                name: "Minimum and Maximum Safe Integers",
                descriptions: [
                    {
                        desc: ".",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let x = Number.MAX_SAFE_INTEGER;
let y = Number.MIN_SAFE_INTEGER;

console.log(x);
console.log(y);

`,
                output: [9007199254740991, -9007199254740991],
            },
            {
                name: "Number.isInteger()",
                descriptions: [
                    {
                        desc: "The Number.isInteger() method returns true if the argument is an integer.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
Number.isInteger(10);
Number.isInteger(10.5);

`,
                output: [true, false],
            },
            {
                name: "Number.isSafeInteger()",
                descriptions: [
                    {
                        desc: "A safe integer is an integer that can be exactly represented as a double precision number. The Number.isSafeInteger() method returns true if the argument is a safe integer.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
Number.isSafeInteger(10);
Number.isSafeInteger(12345678901234567890);

`,
                output: [true, false],
            },
        ],
    },

    //Number Methods
    {
        sectionTitle: "Number Methods",
        littleTitle: "",
        description: "These number methods can be used on all JavaScript numbers",
        littleSections: [
            {
                name: "toString()",
                descriptions: [
                    {
                        desc: "The toString() method returns a number as a string.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let x = 123;
x.toString();
x + 456;

`,
                output: ["123456"],
            },
            {
                name: "toExponential()",
                descriptions: [
                    {
                        desc: "The toExponential() method returns a string, with a number rounded and written using exponential notation.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let x = 9.656;
x.toExponential(2);
x.toExponential(4);
x.toExponential(6);

`,
                output: ["9.66e+0", "9.656e+0", "9.6560e+0"],
            },
            {
                name: "toFixed()",
                descriptions: [
                    {
                        desc: "The toFixed() method formats a number using fixed-point notation.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let x = 9.656;
x.toFixed(0);
x.toFixed(2);
x.toFixed(4);
x.toFixed(6);

`,
                output: ["10", "9.66", "9.6560", "9.656000"],
            },
            {
                name: "toPrecision()",
                descriptions: [
                    {
                        desc: "The toPrecision() method returns a string, with a number rounded to a specified precision.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let x = 9.656;
x.toPrecision(2);
x.toPrecision(4);
x.toPrecision(6);

`,
                output: ["9.7", "9.656", "9.6560"],
            },
            {
                name: "valueOf()",
                descriptions: [
                    {
                        desc: "valueOf() returns a number as a number.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let x = 123;
console.log(x.valueOf());

`,
                output: [123],
            },
            {
                name: "Number()",
                descriptions: [
                    {
                        desc: "The Number() method can be used to convert JavaScript variables to numbers.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
console.log(Number(true));
console.log(Number(false));
console.log(Number("10"));
console.log(Number("John"));

`,
                output: [1, 0, 10, NaN],
            },
            {
                name: "parseInt()",
                descriptions: [
                    {
                        desc: "parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
console.log(parseInt("-10.33"));
console.log(parseInt("10.33"));
console.log(parseInt("10 20 30"));
console.log(parseInt("10 years"));
console.log(parseInt("years 10"));

`,
                output: [-10, 10, 10, 10, NaN],
            },
            {
                name: "parseFloat()",
                descriptions: [
                    {
                        desc: "parseFloat() parses a string and returns a floating point number. Spaces are allowed. Only the first number is returned",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
console.log(parseFloat("-10.33"));
console.log(parseFloat("10.33"));
console.log(parseFloat("10 20 30"));
console.log(parseFloat("10 years"));
console.log(parseFloat("years 10"));

`,
                output: [-10, 10.33, 10, 10, NaN],
            },
        ],
    },

    //Number Properties
    {
        sectionTitle: "Number Properties",
        littleTitle: "",
        description: "These number properties can be used on all JavaScript numbers",
        littleSections: [
            {
                name: "EPSILON",
                descriptions: [
                    {
                        desc: "Number.EPSILON is the difference between the smallest floating point number greater than 1 and 1.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let x = Number.EPSILON;
console.log(x);

`,
                output: [2.220446049250313e-16],
            },
            {
                name: "MAX_VALUE",
                descriptions: [
                    {
                        desc: "Number.MAX_VALUE is a constant representing the largest possible number in JavaScript.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let x = Number.MAX_VALUE;
console.log(x);

`,
                output: [1.7976931348623157e+308],
            },
            {
                name: "MIN_VALUE",
                descriptions: [
                    {
                        desc: "Number.MIN_VALUE is a constant representing the lowest possible number in JavaScript.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let x = Number.MIN_VALUE;
console.log(x);

`,
                output: [5e-324],
            },
            {
                name: "MAX_SAFE_INTEGER",
                descriptions: [
                    {
                        desc: "Number.MAX_SAFE_INTEGER represents the maximum safe integer in JavaScript",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let x = Number.MAX_SAFE_INTEGER;
console.log(x);

`,
                output: [9007199254740991],
            },
            {
                name: "MIN_SAFE_INTEGER",
                descriptions: [
                    {
                        desc: "Number.MIN_SAFE_INTEGER represents the minimum safe integer in JavaScript",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let x = Number.MIN_SAFE_INTEGER;
console.log(x);

`,
                output: [-9007199254740991],
            },
            {
                name: "POSITIVE_INFINITY",
                descriptions: [
                    {
                        desc: "Number.POSITIVE_INFINITY is a constant representing the positive infinity value.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let x = Number.POSITIVE_INFINITY;
console.log(x);

`,
                output: [Infinity],
            },
            {
                name: "NEGATIVE_INFINITY",
                descriptions: [
                    {
                        desc: "Number.NEGATIVE_INFINITY is a constant representing the negative infinity value.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
let x = Number.NEGATIVE_INFINITY;
console.log(x);

`,
                output: [-Infinity],
            },
        ],
    },

    //Arrays
    {
        sectionTitle: "Arrays",
        littleTitle: "",
        description: "Arrays are used to store multiple values in a single variable.",
        littleSections: [
            {
                name: "Creating an Array",
                descriptions: [
                    {
                        desc: "You can create an array by using the new keyword or by using an array literal.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const array_name = [item1, item2, ...]; 

const cars = [
  "Saab",
  "Volvo",
  "BMW"
];

`,
                output: [],
            },
            {
                name: "Accessing Array Elements",
                descriptions: [
                    {
                        desc: "You can access an array element by referring to its index number.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];

console.log(car);

`,
                output: ["Saab"],
            },
            {
                name: "Changing an Array Element",
                descriptions: [
                    {
                        desc: "You can change an array element by referring to its index number.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";

console.log(cars);

`,
                output: ["[ Opel, Volvo, BMW ]"],
            },
            {
                name: "Arrays are Objects",
                descriptions: [
                    {
                        desc: "Arrays are a special type of objects. The typeof operator in JavaScript returns object for arrays.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(typeof fruits);

`,
                output: ["object"],
            },
            {
                name: "Nested Arrays and Objects",
                descriptions: [
                    {
                        desc: "You can create an array containing arrays or objects.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}

`,
                output: [],
            },
            {
                name: "",
                descriptions: [
                    {
                        desc: "To access arrays inside arrays, use a for-in loop for each array",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
for (let i in myObj.cars) {
  if(myObj.cars[i].name === "BMW") {
    for (let j in myObj.cars[i].models) {
      console.log(myObj.cars[i].models[j]);
    }
  }
}

`,
                output: ["320", "X3", "X5"],
            },

        ],
    },

    //Array Methods
    {
        sectionTitle: "Array Methods",
        littleTitle: "",
        description: "JavaScript provides methods that allow you to manipulate arrays.",
        littleSections: [
            {
                name: "Length",
                descriptions: [
                    {
                        desc: "The length property returns the length of an array.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const cars = ["Saab", "Volvo", "BMW"];
let length = cars.length;

console.log(length);

`,
                output: [3],
            },
            {
                name: "toString()",
                descriptions: [
                    {
                        desc: "The toString() method returns a string with all the array values, separated by commas.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const cars = ["Saab", "Volvo", "BMW"];
let text = cars.toString();

console.log(text);

`,
                output: ["Saab,Volvo,BMW"],
            },
            {
                name: "at()",
                descriptions: [
                    {
                        desc: "The at() method returns the last element of an array.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const cars = ["Saab", "Volvo", "BMW"];
let last = cars.at(-1);

console.log(last);

`,
                output: ["BMW"],
            },
            {
                name: "join()",
                descriptions: [
                    {
                        desc: "The join() method joins all array elements into a string.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join(" * ");

console.log(text);

`,
                output: ["Banana * Orange * Apple * Mango"],
            },
            {
                name: "pop()",
                descriptions: [
                    {
                        desc: "The pop() method removes the last element of an array, and returns that element.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();

console.log(fruit);

`,
                output: ["Mango"],
            },
            {
                name: "push()",
                descriptions: [
                    {
                        desc: "The push() method adds a new element to an array (at the end).",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");

console.log(fruits);


`,
                output: ["Banana,Orange,Apple,Mango,Kiwi"],
            },
            {
                name: "shift()",
                descriptions: [
                    {
                        desc: "The shift() method removes the first element of an array, and returns that element.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift();

console.log(fruit);


`,
                output: ["Banana,Orange,Apple,Mango,Kiwi"],
            },
            {
                name: "unshift()",
                descriptions: [
                    {
                        desc: "The unshift() method adds a new element to an array (at the beginning), and returns the new length.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.unshift("Kiwi");

console.log(fruits);


`,
                output: ["Kiwi,Banana,Orange,Apple,Mango"],
            },
            {
                name: "delete()",
                descriptions: [
                    {
                        desc: "The delete() method deletes an element from an array.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];

console.log(fruits);


`,
                output: ["[ Orange,Apple,Mango ]"],
            },
            {
                name: "concat()",
                descriptions: [
                    {
                        desc: "The concat() method joins two or more arrays, and returns a new array.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruits2 = ["Kiwi", "Pear", "Grape"];
const fruits3 = fruits.concat(fruits2);

console.log(fruits3);


`,
                output: ["[ Banana,Orange,Apple,Mango,Kiwi,Pear,Grape ]"],
            },
            {
                name: "copyWithin()",
                descriptions: [
                    {
                        desc: "The copyWithin() method copies array elements to another position in the array, overwriting the existing values.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);

console.log(fruits);


`,
                output: ["[ Banana,Orange,Banana,Orange,Apple,Mango ]"],
            },
            {
                name: "flat()",
                descriptions: [
                    {
                        desc: "The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const myArr = [[1,2], [3,4], [5,6]];
const newArr = myArr.flat();

console.log(newArr);


`,
                output: ["[ 1, 2, 3, 4, 5, 6 ]"],
            },
            {
                name: "flatMap()",
                descriptions: [
                    {
                        desc: "The flatMap() method first maps each element using a mapping function, then flattens the result into a new array.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const myArr = [1,2,3,4,5,6];
const newArr = myArr.flatMap(x => x + 10);

console.log(newArr);


`,
                output: ["[ 11, 12, 13, 14, 15, 16 ]"],
            },
            {
                name: "splice()",
                descriptions: [
                    {
                        desc: "The splice() method adds/removes items to/from an array, and returns the removed item(s).",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const myArr = [1,2,3,4,5,6];
myArr.splice(2, 0, "a", "b");

console.log(myArr);


`,
                output: ["[ 1, 2, a, b, 3, 4, 5, 6 ]"],
            },
            {
                name: "toSpliced()",
                descriptions: [
                    {
                        desc: "The toSpliced() method adds/removes items to/from an array, and returns the removed item(s).",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);

console.log(spliced);


`,
                output: ["[ Feb,Mar,Apr ]"],
            },
            {
                name: "slice()",
                descriptions: [
                    {
                        desc: "The slice() method returns selected elements in an array, as a new array.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const months = ["Jan", "Feb", "Mar", "Apr"];
const sliced = months.slice(1, 3);

console.log(sliced);


`,
                output: ["[ Feb,Mar ]"],
            },
        ],
    },

    //Array Search
    {
        sectionTitle: "Array Search",
        littleTitle: "",
        description: "JavaScript provides methods that allow you to search arrays.",
        littleSections: [
            {
                name: "indexOf()",
                descriptions: [
                    {
                        desc: "The indexOf() method returns the index of the first occurrence of a value in an array.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const cars = ["Saab", "Volvo", "BMW"];
let index = cars.indexOf("Volvo");

console.log(index);

`,
                output: [1],
            },
            {
                name: "lastIndexOf()",
                descriptions: [
                    {
                        desc: "The lastIndexOf() method returns the index of the last occurrence of a value in an array.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const cars = ["Saab", "Volvo", "BMW"];
let index = cars.lastIndexOf("Volvo");

console.log(index);

`,
                output: [1],
            },
            {
                name: "includes()",
                descriptions: [
                    {
                        desc: "The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const cars = ["Saab", "Volvo", "BMW"];
let result = cars.includes("Volvo");

console.log(result);

`,
                output: [true],
            },
            {
                name: "find()",
                descriptions: [
                    {
                        desc: "The find() method returns the value of the first element in an array that satisfies the provided testing function.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const fruits = [1,2,3,4,5,6];
let result = fruits.find(x => x > 3);

console.log(result);

`,
                output: [4],
            },
            {
                name: "findIndex()",
                descriptions: [
                    {
                        desc: "The findIndex() method returns the index of the first element in an array that satisfies the provided testing function.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = fruits.findIndex(x => x === "Apple");

console.log(index);

`,
                output: [2],
            },
            {
                name: "findLast()",
                descriptions: [
                    {
                        desc: "The findLast() method returns the value of the last element in an array that satisfies the provided testing function.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let result = fruits.findLast(x => x === "Apple");

console.log(result);


`,
                output: [4],
            },
            {
                name: "findLastIndex()",
                descriptions: [
                    {
                        desc: "The findLastIndex() method returns the index of the last element in an array that satisfies the provided testing function.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = fruits.findLastIndex(x => x === "Apple");

console.log(index);


`,
                output: [3],
            },

        ],
    },

    //Array Sort
    {
        sectionTitle: "Array Sort",
        littleTitle: "",
        description: "JavaScript provides methods that allow you to sort arrays.",
        littleSections: [
            {
                name: "sort()",
                descriptions: [
                    {
                        desc: "The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const cars = ["Saab", "Volvo", "BMW"];
let sorted = cars.sort();

console.log(sorted);

`,
                output: ["[ BMW,Saab,Volvo ]"],
            },
            {
                name: "reverse()",
                descriptions: [
                    {
                        desc: "The reverse() method reverses the order of the elements in an array.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const cars = ["Saab", "Volvo", "BMW"];
let reversed = cars.reverse();

console.log(reversed);

`,
                output: ["[ BMW,Volvo,Saab ]"],
            },
            {
                name: "toSorted()",
                descriptions: [
                    {
                        desc: "The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const cars = ["Saab", "Volvo", "BMW"];
let sorted = cars.toSorted();

console.log(sorted);

`,
                output: ["[ BMW,Saab,Volvo ]"],
            },
            {
                name: "toReversed()",
                descriptions: [
                    {
                        desc: "The toReversed() method returns a new array with the elements in reverse order.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const fruits = [1,2,3,4,5,6];
let reversed = fruits.toReversed();

console.log(reversed);

`,
                output: ["[ 6, 5, 4, 3, 2, 1 ]"],
            },
            {
                name: "Numeric Sort",
                descriptions: [
                    {
                        desc: 'By default, the sort() function sorts values as strings. This works well for strings ("Apple" comes before "Banana"). If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1". Because of this, the sort() method will produce incorrect result when sorting numbers. You can fix this by providing a compare function',
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort(function(a, b){return a - b});

console.log(numbers);

`,
                output: ["[ 1, 5, 10, 25, 40, 100 ]"],
            },
            {
                name: "Compare Function",
                descriptions: [
                    {
                        desc: "The compare function can sort numbers in an array in ascending or descending order.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const numbers = [40, 100, 1, 5, 25, 10];
//Ascending
numbers.sort(function(a, b){return a - b});

console.log(numbers);

//Descending    
numbers.sort(function(a, b){return b - a});

console.log(numbers);

`,
                output: ["[ 1, 5, 10, 25, 40, 100 ]", "[ 100, 40, 25, 10, 5, 1 ]"],
            },
            {
                name: "Fisher Yates Method",
                descriptions: [
                    {
                        desc: "The Fisher Yates method is a way to shuffle an array in random order.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}

console.log(points);

`,
                output: ["[ 100, 40, 1, 5, 25, 10 ]"],
            },
            {
                name: "Math.min()",
                descriptions: [
                    {
                        desc: "The Math.min() method returns the smallest of zero or more numbers.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const points = [40, 100, 1, 5, 25, 10];
let min = Math.min(...points);

console.log(min);

`,
                output: ["1"],
            },
            {
                name: "Math.max()",
                descriptions: [
                    {
                        desc: "The Math.max() method returns the largest of zero or more numbers.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const points = [40, 100, 1, 5, 25, 10];
let max = Math.max(...points);

console.log(max);

`,
                output: ["100"],
            },
            {
                name: "Sorting Object Arrays",
                descriptions: [
                    {
                        desc: "The sort() method can be used to sort an array of objects.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

cars.sort(function(a, b){return a.year - b.year});

console.log(cars);

`,
                output: ["[ { type: 'Saab', year: 2001 }, { type: 'BMW', year: 2010 }, { type: 'Volvo', year: 2016 } ]"],
            },

        ],
    },

    //Array Iteration
    {
        sectionTitle: "Array Iteration",
        littleTitle: "",
        description: "JavaScript provides methods that allow you to iterate over arrays.",
        littleSections: [
            {
                name: "forEach()",
                descriptions: [
                    {
                        desc: "The forEach method in JavaScript is used to loop through an array and run a function on each item. It doesn’t return anything, just executes the function for every element.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const numbers = [1, 2, 3];  
numbers.forEach(num => console.log(num * 2));  

`,
                output: ["2", "4", "6"],
            },
            {
                name: "map()",
                descriptions: [
                    {
                        desc: "The map method in JavaScript is used to create a new array by applying a function to each element of an existing array. It does not change the original array.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const numbers = [1, 2, 3];  
const doubled = numbers.map(num => num * 2);  

console.log(doubled); 

`,
                output: ["[ 2, 4, 6 ]"],
            },
            {
                name: "flatMap()",
                descriptions: [
                    {
                        desc: "The flatMap method in JavaScript is like map, but it flattens the result by one level. It is useful when each element maps to an array and you want a single, flat array instead of nested arrays.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const numbers = [1, 2, 3];  
const result = numbers.flatMap(num => [num, num * 2]);  

console.log(result);  

`,
                output: ["[ 1, 2, 2, 4, 3, 6 ]"],
            },
            {
                name: "filter()",
                descriptions: [
                    {
                        desc: "The filter method in JavaScript is used to create a new array containing only the elements that meet a certain condition. It does not modify the original array.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const numbers = [1, 2, 3, 4, 5];  
const evenNumbers = numbers.filter(num => num % 2 === 0);  

console.log(evenNumbers); 

`,
                output: ["[ 2, 4 ]"],
            },
            {
                name: "reduce()",
                descriptions: [
                    {
                        desc: 'The reduce method in JavaScript is used to process an array and return a single value (such as a sum, product, or object). It takes a callback function that runs on each element and an initial value.',
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
/*
How It Works:
 - acc (accumulator) starts at 0 (the initial value).
 - Each num is added to acc.
 - The final result is 10.
*/
const numbers = [1, 2, 3, 4];  
const sum = numbers.reduce((acc, num) => acc + num, 0);  

console.log(sum); 

`,
                output: ["10"],
            },
            {
                name: "reduceRight()",
                descriptions: [
                    {
                        desc: "The reduceRight method in JavaScript works just like reduce, but it processes the array from right to left instead of left to right. It’s useful when the order matters, such as reversing strings or nested structures.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const words = ["world", "hello"];  
const sentence = words.reduceRight((acc, word) => acc + " " + word);  

console.log(sentence); 

`,
                output: ["hello world"],
            },
            {
                name: "every()",
                descriptions: [
                    {
                        desc: "The every method in JavaScript checks if all elements in an array meet a certain condition. It returns true if every element passes the test; otherwise, it returns false.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const numbers = [2, 4, 6, 8];  
const allPositive = numbers.every(num => num > 0);  

console.log(allPositive); 

`,
                output: ["true"],
            },
            {
                name: "some()",
                descriptions: [
                    {
                        desc: "The some method in JavaScript checks if at least one element in an array meets a certain condition. It returns true if any element passes the test; otherwise, it returns false. Stops as soon as it finds a matching element.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const numbers = [1, 3, 5, 7, 8];  
const hasEven = numbers.some(num => num % 2 === 0);  

console.log(hasEven);

`,
                output: ["true"],
            },
            {
                name: "Array.from()",
                descriptions: [
                    {
                        desc: "The Array.from method in JavaScript creates a new array from an iterable (like a string, Set, Map, or NodeList) or from an array-like object.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const letters = Array.from("hello");  
console.log(letters); 

`,
                output: ["[ 'h', 'e', 'l', 'l', 'o' ]"],
            },
            {
                name: "keys()",
                descriptions: [
                    {
                        desc: "The keys() method in JavaScript returns an iterator for the index keys of an array. It doesn’t return the values, just the keys (indexes).",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const numbers = [10, 20, 30];  
const keysIterator = numbers.keys();  

for (let key of keysIterator) {  
  console.log(key);  
}  

`,
                output: ["0", "1", "2"],
            },
            {
                name: "entries()",
                descriptions: [
                    {
                        desc: "The entries() method in JavaScript returns an iterator that contains key-value pairs for each element in an array. Each pair consists of the index (key) and the element (value).",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const fruits = ["apple", "banana", "cherry"];  
const entriesIterator = fruits.entries();  

for (let [index, fruit] of entriesIterator) {  
  console.log(index, fruit);  
}  

`,
                output: ["0 apple", "1 banana", "2 cherry"],
            },
            {
                name: "Spread (...)",
                descriptions: [
                    {
                        desc: "The spread syntax (...) in JavaScript is used to unpack elements from an array or properties from an object. It allows you to copy, merge, or expand arrays and objects in a concise and flexible way.",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const arr = [1, 2, 3];  
const newArr = [...arr];  
console.log(newArr);   

`,
                output: ["[ 1, 2, 3 ]"],
            },
            {
                name: "",
                descriptions: [
                    {
                        desc: "Merging Arrays",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const arr1 = [1, 2];  
const arr2 = [3, 4];  
const mergedArr = [...arr1, ...arr2];  
console.log(mergedArr);   

`,
                output: ["[ 1, 2, 3, 4 ]"],
            },

        ],
    },

    //Dates
    {
        sectionTitle: "Dates",
        littleTitle: "",
        description: "The Date object in JavaScript is used to work with dates and times.",
        littleSections: [
            {
                name: "Creating a Date Object",
                descriptions: [
                    {
                        desc: "",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const now = new Date();  // Current date and time
console.log(now); 

`,
                output: [new Date()],
            },
            {
                name: "You can also create a specific date",
                descriptions: [
                    {
                        desc: "",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const specificDate = new Date(2024, 0, 15); 
console.log(specificDate);

`,
                output: ["Mon Jan 15 2024 00:00:00 GMT+0000 (Coordinated Universal Time)"],
            },
            {
                name: "Or use a date string",
                descriptions: [
                    {
                        desc: "",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const fromString = new Date("2024-01-15T10:30:00");
console.log(fromString);

`,
                output: ["Mon Jan 15 2024 00:00:00 GMT+0000 (Coordinated Universal Time)"],
            },


        ],
    },

    //Date Formats
    {
        sectionTitle: "Date Formats",
        littleTitle: "",
        description: "JavaScript dates can be formatted in different ways.",
        littleSections: [
            {
                name: "ISO Format (YYYY-MM-DDTHH:MM:SSZ)",
                descriptions: [
                    {
                        desc: "",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const isoDate = new Date().toISOString();
console.log(isoDate);

`,
                output: [new Date().toISOString()],
            },
            {
                name: "UTC Format",
                descriptions: [
                    {
                        desc: "",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const utcDate = new Date().toUTCString();
console.log(utcDate); 

`,
                output: [new Date().toUTCString()],
            },
            {
                name: "Locale String Format",
                descriptions: [
                    {
                        desc: "",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const localeDate = new Date().toLocaleString("en-US");
console.log(localeDate);  

`,
                output: [new Date().toLocaleString("en-US")],
            },


        ],
    },

    //Date Get Methods
    {
        sectionTitle: "Date Get Methods",
        littleTitle: "",
        description: "These methods retrieve information from a Date object.",
        littleSections: [
            {
                name: "Date Get Methods",
                descriptions: [
                    {
                        desc: "",

                    },
                ],
                table: [
                    {
                        header: ["Method", "Syntax", "Description"],
                        body: [
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>getFullYear()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.getFullYear()</span>", "Gets the 4-digit year"],
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>getMonth()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.getMonth()</span>", "Gets the month (0-11) where 0 = January"],
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>getDate()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.getDate()</span>", "Gets the day of the month (1-31)"],
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>getDay()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.getDay()</span>", "Gets the day of the week (0-6) where 0 = Sunday"],
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>getHours()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.getHours()</span>", "Gets the hour (0-23)"],
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>getMinutes()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.getMinutes()</span>", "Gets the minutes (0-59)"],
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>getSeconds()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.getSeconds()</span>", "Gets the seconds (0-59)"],
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>getMilliseconds()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.getMilliseconds()</span>", "Gets the milliseconds (0-999)"],
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>getTime()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.getTime()</span>", "Gets the timestamp (milliseconds since Jan 1, 1970)"],
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>getUTCFullYear()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.getUTCFullYear()</span>", "Gets the UTC year"],
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>getUTCMonth()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.getUTCMonth()</span>", "Gets the UTC month (0-11)"],
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>getUTCDate()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.getUTCDate()</span>", "Gets the UTC day of the month"],
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>getUTCDay()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.getUTCDay()</span>", "Gets the UTC day of the week (0-6)"],
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>getUTCHours()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.getUTCHours()</span>", "Gets the UTC hour (0-23)"],
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>getUTCMinutes()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.getUTCMinutes()</span>", "Gets the UTC minutes (0-59)"],
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>getUTCSeconds()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.getUTCSeconds()</span>", "Gets the UTC seconds (0-59)"],
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>getUTCMilliseconds()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.getUTCMilliseconds()</span>", "Gets the UTC milliseconds (0-999)"]

                        ],


                    },

                ],
                code: ``,
                output: [],
            },
            {
                name: "getFullYear()",
                descriptions: [
                    {
                        desc: "Gets the 4-digit year",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const date = new Date();
console.log(date.getFullYear());

`,
                output: [new Date().getFullYear()],
            },
            {
                name: "getMonth()",
                descriptions: [
                    {
                        desc: "Gets the month (0-11, where 0 = January)",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const date = new Date();       
console.log(date.getMonth());

`,
                output: [new Date().getMonth()],
            },
            {
                name: "getDate()",
                descriptions: [
                    {
                        desc: "Gets the day of the month (1-31)",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const date = new Date();  
console.log(date.getDate());

`,
                output: [new Date().getDate()],
            },
            {
                name: "getDay()",
                descriptions: [
                    {
                        desc: "Gets the day of the week (0-6, where 0 = Sunday)",
                    },
                ],
                table: [
                    {
                        header: [""],
                        body: [],
                    },
                ],
                code: `
const date = new Date();  
console.log(date.getDay()); 

`,
                output: [new Date().getDay()],
            },
            {
                name: "getHours()",
                descriptions: [
                    {
                        desc: "Gets the hour (0-23)",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const date = new Date();  
console.log(date.getHours()); 

`,
                output: [new Date().getHours()],
            },
            {
                name: "getMinutes()",
                descriptions: [
                    {
                        desc: "Gets the minutes (0-59)",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const date = new Date();  
console.log(date.getMinutes()); 

`,
                output: [new Date().getMinutes()],
            },
            {
                name: "getSeconds()",
                descriptions: [
                    {
                        desc: "Gets the seconds (0-59)",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const date = new Date();  
console.log(date.getSeconds()); 

`,
                output: [new Date().getSeconds()],
            },
            {
                name: "getMilliseconds()",
                descriptions: [
                    {
                        desc: "Gets the milliseconds (0-999)",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const date = new Date();  
console.log(date.getMilliseconds()); 

`,
                output: [new Date().getMilliseconds()],
            },
            {
                name: "getTime()",
                descriptions: [
                    {
                        desc: "Gets the time in milliseconds since January 1, 1970",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const date = new Date();  
console.log(date.getTime()); 

`,
                output: [new Date().getTime()],
            },
            {
                name: "getUTCFullYear()",
                descriptions: [
                    {
                        desc: "Gets the 4-digit year in UTC",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const date = new Date();  
console.log(date.getUTCFullYear()); 

`,
                output: [new Date().getUTCFullYear()],
            },
            {
                name: "getUTCMonth()",
                descriptions: [
                    {
                        desc: "Gets the month in UTC (0-11, where 0 = January)",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const date = new Date();  
console.log(date.getUTCMonth()); 

`,
                output: [new Date().getUTCMonth()],
            },
            {
                name: "getUTCDate()",
                descriptions: [
                    {
                        desc: "Gets the day of the month in UTC (1-31)",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const date = new Date();  
console.log(date.getUTCDate()); 

`,
                output: [new Date().getUTCDate()],
            },
            {
                name: "getUTCDay()",
                descriptions: [
                    {
                        desc: "Gets the day of the week in UTC (0-6, where 0 = Sunday)",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const date = new Date();  
console.log(date.getUTCDay()); 

`,
                output: [new Date().getUTCDay()],
            },
            {
                name: "getUTCHours()",
                descriptions: [
                    {
                        desc: "Gets the hour in UTC (0-23)",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const date = new Date();  
console.log(date.getUTCHours()); 

`,
                output: [new Date().getUTCHours()],
            },
            {
                name: "getUTCMinutes()",
                descriptions: [
                    {
                        desc: "Gets the minutes in UTC (0-59)",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const date = new Date();  
console.log(date.getUTCMinutes()); 

`,
                output: [new Date().getUTCMinutes()],
            },
            {
                name: "getUTCSeconds()",
                descriptions: [
                    {
                        desc: "Gets the seconds in UTC (0-59)",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const date = new Date();  
console.log(date.getUTCSeconds()); 

`,
                output: [new Date().getUTCSeconds()],
            },
            {
                name: "getUTCMilliseconds()",
                descriptions: [
                    {
                        desc: "Gets the milliseconds in UTC (0-999)",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const date = new Date();  
console.log(date.getUTCMilliseconds()); 

`,
                output: [new Date().getUTCMilliseconds()],
            },


        ],
    },

    //Date Set Methods
    {
        sectionTitle: "Date Set Methods",
        littleTitle: "",
        description: "These methods set information in a Date object.",
        littleSections: [
            {
                name: "Date Get Methods",
                descriptions: [
                    {
                        desc: "",

                    },
                ],
                table: [
                    {
                        header: ["Method", "Syntax"],
                        body: [
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>setFullYear()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.setFullYear(year, month, day)</span>" ],
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>setMonth()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.setMonth(month, day)</span>"],
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>setDate()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.setDate(day)</span>"],
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>setHours()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.setHours(hours, min, sec, ms)</span>"],
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>setMinutes()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.setMinutes(minutes, sec, ms)</span>"],
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>setSeconds()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.setSeconds(seconds, ms)</span>"],
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>setMilliseconds()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.setMilliseconds(ms)</span>"],
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>setTime()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.setTime(milliseconds)</span>"],
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>setUTCFullYear()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.setUTCFullYear(year, month, day)</span>"],
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>setUTCMonth()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.setUTCMonth(month, day)</span>"],
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>setUTCDate()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.setUTCDate(day)</span>"],
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>setUTCHours()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.setUTCHours(hours, min, sec, ms)</span>"],
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>setUTCMinutes()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.setUTCMinutes(minutes, sec, ms)</span>"],
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>setUTCSeconds()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.setUTCSeconds(seconds, ms)</span>"],
                            ["<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>setUTCMilliseconds()</span>", "<span class='px-2 py-0.5 rounded-md bg-slate-900/50 text-zinc-300 dark:bg-zinc-800'>date.setUTCMilliseconds(ms)</span>"]
                          
                        ],


                    },

                ],
                code: ``,
                output: [],
            },
            {
                name: "setFullYear()",
                descriptions: [
                    {
                        desc: "Sets the 4-digit year",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const date = new Date();
date.setFullYear(2025);

`,
                output: [],
            },
            {
                name: "setMonth()",
                descriptions: [
                    {
                        desc: "Sets the month (0-11, where 0 = January)",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const date = new Date();       
date.setMonth(1);

`,
                output: [],
            },
            {
                name: "setDate()",
                descriptions: [
                    {
                        desc: "Sets the day of the month (1-31)",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const date = new Date();  
date.setDate(1);

`,
                output: [],
            },

            {
                name: "setHours()",
                descriptions: [
                    {
                        desc: "Sets the hour (0-23)",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const date = new Date();  
date.setHours(1);

`,
                output: [],
            },
            {
                name: "getMinutes()",
                descriptions: [
                    {
                        desc: "Gets the minutes (0-59)",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const date = new Date();  
date.setMinutes(1);

`,
                output: [],
            },
            {
                name: "getSeconds()",
                descriptions: [
                    {
                        desc: "Gets the seconds (0-59)",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const date = new Date();  
date.setSeconds(1);

`,
                output: [],
            },
            {
                name: "getMilliseconds()",
                descriptions: [
                    {
                        desc: "Gets the milliseconds (0-999)",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const date = new Date();  
date.setMilliseconds(1);

`,
                output: [],
            },
            {
                name: "getTime()",
                descriptions: [
                    {
                        desc: "Gets the time in milliseconds since January 1, 1970",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const date = new Date();  
date.setTime(1);

`,
                output: [],
            },
            {
                name: "getUTCFullYear()",
                descriptions: [
                    {
                        desc: "Gets the 4-digit year in UTC",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const date = new Date();  
date.setUTCFullYear(2025);

`,
                output: [],
            },
            {
                name: "getUTCMonth()",
                descriptions: [
                    {
                        desc: "Gets the month in UTC (0-11, where 0 = January)",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const date = new Date();  
date.setUTCMonth(1);

`,
                output: [],
            },
            {
                name: "getUTCDate()",
                descriptions: [
                    {
                        desc: "Gets the day of the month in UTC (1-31)",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const date = new Date();  
date.setUTCDate(1);

`,
                output: [],
            },
            {
                name: "getUTCHours()",
                descriptions: [
                    {
                        desc: "Gets the hour in UTC (0-23)",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const date = new Date();  

date.setUTCHours(1);

`,
                output: [],
            },
            {
                name: "getUTCMinutes()",
                descriptions: [
                    {
                        desc: "Gets the minutes in UTC (0-59)",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const date = new Date();  
date.setUTCMinutes(1);

`,
                output: [],
            },
            {
                name: "getUTCSeconds()",
                descriptions: [
                    {
                        desc: "Gets the seconds in UTC (0-59)",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const date = new Date();  
date.setUTCSeconds(1);

`,
                output: [],
            },
            {
                name: "getUTCMilliseconds()",
                descriptions: [
                    {
                        desc: "Gets the milliseconds in UTC (0-999)",
                    },
                ],
                table: [
                    {
                        header: [],
                        body: [],
                    },
                ],
                code: `
const date = new Date();  
date.setUTCMilliseconds(1);

`,
                output: [],
            },


        ],
    },
];