export const data = [
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

    }
];