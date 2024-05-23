const questions = [
    {
        question: "Which of these is not a feature of Java?",
        choices: [
            { text: "Object-oriented", answer: false },
            { text: "Compiled", answer: true },
            { text: "Platform-independent", answer: false },
            { text: "Interpreted language", answer: false },
        ],
    },
    {
        question: "Which component of Java is responsible for running the compiled Java bytecode?",
        choices: [
            { text: "JVM", answer: true },
            { text: "JDK", answer: false },
            { text: "JIT", answer: false },
            { text: "JRE", answer: false },
        ],
    },
    {
        question: "What is the range of the short data type in Java?",
        choices: [
            { text: "-128 to 127", answer: false },
            { text: "0 to 65535", answer: false },
            { text: "-32768 to 32767", answer: true },
            { text: "-2147483648 to 2147483647", answer: false },
        ],
    },
    {
        question: "What will be the output of the following code snippet: int a = 10; int b = 20;System.out.println(a + b);",
        choices: [
            { text: "30", answer: true },
            { text: "Error", answer: false },
            { text: "20", answer: false },
            { text: "10", answer: false },
        ],
    },
    {
        question: "What does the following Java code print?int x = 5;int y = x++;System.out.println(y);",
        choices: [
            { text: "6", answer: false },
            { text: "Syntax Error", answer: false },
            { text: "5", answer: true },
            { text: "None of the above", answer: false },
        ],
    },
    {
        question: "What is the output of this pseudocode?SET x = 10IF x > 5THEN PRINT 'Greater' ELSE PRINT 'Lesser'",
        choices: [
            { text: "No output", answer: false },
            { text: "Greater", answer: true },
            { text: "Error", answer: false },
            { text: "Lesser", answer: false },
        ],
    },
    {
        question: "Evaluate this pseudocode: SET a = 3 SET b = 4 PRINT a * b",
        choices: [
            { text: "7", answer: false },
            { text: "None of the above", answer: false },
            { text: "Error", answer: false },
            { text: "12", answer: true },
        ],
    },
    {
        question: "Identify the error in this code:int[] nums = new int[2]; nums[0] = 1; nums[1] = 2; nums[2] = 3;",
        choices: [
            { text: "Incorrect array declaration", answer: false },
            { text: "Array index out of bounds", answer: true },
            { text: "Syntax error", answer: false },
            { text: "No error", answer: false },
        ],
    },
    {
        question: "Which control structure is used to execute a block of code multiple times?",
        choices: [
            { text: "if", answer: false },
            { text: "switch-case", answer: false },
            { text: "for", answer: true },
            { text: "try-catch", answer: false },
        ],
    },
    {
        question: "In a 'switch-case' statement, what is the role of the 'break' keyword?",
        choices: [
            { text: "To terminate the case block", answer: true },
            { text: "To repeat the case block", answer: false },
            { text: "To pause the execution", answer: false },
            { text: "To skip to the next case", answer: false },
        ],
    },
  ];
  
  export default questions;