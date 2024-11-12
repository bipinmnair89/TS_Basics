console.log("first");

const personDetails = {
    name : "John",
    age : 25,   
    city : "New York"
};
console.log(personDetails.name);

let personName : string = "Tony Stark";
console.log(personName);
// personName = 7;  //not possible as personName is type of string

// *** Type Inference ***
//Below we are specifying the type of a variable as number
let numericValue : number = 2;
console.log(numericValue);

//Below we are not specifying the type of a variable
let numericNumber = 3;
console.log(numericNumber);
// numericNumber = "Value"; //not possible even if type is not explicitly mentioned
//TS has type inference, means it can understand the type of the variable on the basis of its value
//It is not a good practice to always mention the type of the variable as type inference is anyway present.


//checking if downleveling is present by giving template strings (check JS file - downleveling is present)
//by default TS points to ES5. use tsc --target es2015 tsbasics/basics.ts to point to other versions.
console.log(`The variable numericValue has value as - ${numericValue}`);

//Below is a function accepting an object as argument
function techData(technicalDetails : {language : string,
                                      framework : string,
                                      database? : string})
 {
    console.log(`The language is ${technicalDetails.language}`);
    console.log(`The framework is ${technicalDetails.framework}`);
    console.log(`The database is ${technicalDetails.database}`);
}

const technicalDetails = {
    language : "TypeScript",
    framework : "Angular",
    database : "MySQL"
}

techData(technicalDetails)

//Union
let unionType : number| string;
// unionType.toLowerCase(); //this wont work as this method is not available for number.
//the solution is using typeof and narrowing.

//Type Alias - used when the same type needs to be used more than once
//Type alias can also be used with intersection
//can be used with union
//cant be used for declaration merging
type carDetails = {
        carName : string,
        carCategory : string,
        carFuel : string
};

const tesla : carDetails = {
    carName : "Tesla",
    carCategory : "SUV",
    carFuel : "Electric"
};

const tata : carDetails = {
    carName : "Tata",
    carCategory : "SUV",
    carFuel : "Petrol",
    // carYear : 2000  //not possible
};
console.log(tesla);
console.log(tata)

//Interface - primarily used with classes and objects.
//can be extended and implemented by classes.
//can be used with intersection
//cannot be used with Union type
//can be used for declaration merging.


interface carDetailsInterface {
    carNameIn : string,
    carCategoryIn : string,
    carFuelIn : string
};


//literal types with Unions

function printPersonRecord(name :string, technology : "Java" | "Python" | "C") {
    console.log(`Name is ${name} and technology is ${technology}`);
}
printPersonRecord("John", "Java");
// printPersonRecord("Mike", "Javascript"); //cannot be assigned


//literal Inference
const colorTypeA = "blue";  //const is inferred as the value itself 
let colorTypeB = "red"; //let is inferred in a broader way as string (hover on variable name)

//In below code as assignedColor is declared as let, TSC will infer it as a string
//but getColor will accept only "blue" or "red"
//Solution 1 - to make the variable assignedColor as const
//Solution 2 - to implement Type assertion while passing the argument.
function getColor(color : "blue" | "red") {
    console.log(color);
}
let assignedColor = "blue";
getColor(assignedColor as "blue");