export const data = [
    {
        sectionTitle: "Introduction",
        littleTitle: "",
        description: "JavaScript is a programming language...",
        littleSections: [
            {
                name: "What Makes JavaScript Special?",
                descriptions: [
                    {
                        name: "Works in the Browser",
                        desc: "JavaScript runs directly in the web browser, so you don't need to install anything extra to use it.",
                    },
                    {
                        name: "Interactive",
                        desc: "It helps websites respond to user actions, like clicking a button or typing in a form.",
                    },
                    {
                        name: "Easy to Start",
                        desc: "JavaScript is easy to begin with, especially if you're already familiar with HTML and CSS.",
                    },
                    {
                        name: "Flexible",
                        desc: "You can use JavaScript for small tasks on websites or even to build entire web applications.",
                    },
                    {
                        name: "Runs Everywhere",
                        desc: "You can use JavaScript on both the front-end (what you see on the website) and the back-end (the server side) using tools like Node.js.",
                    },
                ]
            },
            {
                name: "Where JavaScript is Used?",
                descriptions: [
                    {
                        name: "Websites",
                        desc: "Making things interactive like menus, pop-ups, and form validations.",
                    },
                    {
                        name: "Apps",
                        desc: "Creating web applications like Gmail or Facebook.",
                    },
                    {
                        name: "Games",
                        desc: "Building simple browser-based games.",
                    },
                ]
            },
        ],
        code: `
function greet() {
    console.log("Hello from Introduction!");
}
greet();`,
        output: "Hello from Introduction!"
    },
    {
        sectionTitle: "Setting up",
        littleTitle: "",
        description: "Setting up a project to practice",
        littleSections: [
            {
                name: "NodeJs",
                descriptions: [
                    {
                        name: "Install",
                        desc: "Install NodeJs from their website",
                    },
                    {
                        name: "Code editor",
                        desc: "Choose a code editor its up to you which one you use",
                    },
                    {
                        name: "Make a js file",
                        desc: "At the first time you can call the file helloWorld.js",
                    },
                    {
                        name: "Coding",
                        desc: "At first you can try with a simple code like console.log('Hello World!')",
                    },
                    {
                        name: "Terminal",
                        desc: "In the code editor open the terminal",
                    },
                    {
                        name: "Run the code",
                        desc: "In the terminal write this: node helloWorld.js",
                    },

                ]
            },
        ],
        // No code property for this section, so CodeCard won't show
    },
    {
        sectionTitle: "Comments",
        littleTitle: "",
        description: "Its very recommended to comment your code to later you and others can understand easier",
        littleSections: [
            {
                name: "Example",
                descriptions: [
                    {
                        desc: "You can comment by just 1 line using this //. And you can use multiple line comment with using this /**/",
                    },
                ]
            },
        ],
        code: `
//This code write out: Hello World!
console.log("Hello World!")
/*
This is a
multiple line comment
*/

`,}
];