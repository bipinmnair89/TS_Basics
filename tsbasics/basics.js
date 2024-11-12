console.log("first");
var personDetails = {
    name: "John",
    age: 25,
    city: "New York"
};
console.log(personDetails.name);
var personName = "Tony Stark";
console.log(personName);
// personName = 7;  //not possible as personName is type of string
// *** Type Inference ***
//Below we are specifying the type of a variable as number
var numericValue = 2;
console.log(numericValue);
//Below we are not specifying the type of a variable
var numericNumber = 3;
console.log(numericNumber);
// numericNumber = "Value"; //not possible even if type is not explicitly mentioned
//TS has type inference, means it can understand the type of the variable on the basis of its value
//It is not a good practice to always mention the type of the variable as type inference is anyway present.
//checking if downleveling is present by giving template strings (check JS file - downleveling is present)
//by default TS points to ES5. use tsc --target es2015 tsbasics/basics.ts to point to other versions.
console.log("The variable numericValue has value as - ".concat(numericValue));
//Below is a function accepting an object as argument
function techData(technicalDetails) {
    console.log("The language is ".concat(technicalDetails.language));
    console.log("The framework is ".concat(technicalDetails.framework));
    console.log("The database is ".concat(technicalDetails.database));
}
var technicalDetails = {
    language: "TypeScript",
    framework: "Angular",
    database: "MySQL"
};
techData(technicalDetails);
//Union
var unionType;
var tesla = {
    carName: "Tesla",
    carCategory: "SUV",
    carFuel: "Electric"
};
var tata = {
    carName: "Tata",
    carCategory: "SUV",
    carFuel: "Petrol",
    // carYear : 2000  //not possible
};
console.log(tesla);
console.log(tata);
;
//literal types with Unions
function printPersonRecord(name, technology) {
    console.log("Name is ".concat(name, " and technology is ").concat(technology));
}
printPersonRecord("John", "Java");
// printPersonRecord("Mike", "Javascript"); //cannot be assigned
