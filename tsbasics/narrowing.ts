
/* --- Narrowing example -> TS takes narrowing as Type Guard---
       Below is an example of how typeof narrowing can be used
       Narrowing helps TS to improve the code quality and reduce the number of errors.
*/

function testTypeOfNarrowing(carRegNumber : string | number) {
    // carRegNumber.     //here we get methods applicable for both number and string
    if(typeof carRegNumber === "string") {
        console.log("This is a string");
        // carRegNumber.     //here we get methods applicable for string
    } else {
        console.log("This is a number");
        // carRegNumber.     //here we get methods applicable for number
    }
}
testTypeOfNarrowing("ABC123");
testTypeOfNarrowing(123);

/* Truthiness Narrowing
    - helps to differentiate between truthy values and falsy values
    - helps to check if optional values are present
    - cannot distinguish between different falsy values
    - helps us to filter out null or undefined that we are not aware of.(check TS docs)
*/
function testTruthyNarrowing(carRegNumber : string | number | undefined) {
    if(carRegNumber) {
        console.log(`This is a truthy value - ${carRegNumber}`);
        // carRegNumber.     //here we get methods applicable for both number and string
    }else{
        console.log(`This is a falsy value`);
    }
} 
testTruthyNarrowing("WDN109");
testTruthyNarrowing(899);
testTruthyNarrowing(null);

/* Equality Narrowing
    - TS also uses equality checks like ===, ==, !==, != to narrow down the type
    - While checking something == null, it also checks for undefined and vice versa
*/
function testEqualityNarrowing(carCompanyA : string, carCompanyB : string) {
    if(carCompanyA === carCompanyB) {
        console.log(`Company names are equal`);
    }else{
        console.log(`Company names are not equal`);
    }
}

testEqualityNarrowing(`Tesla`, `Tesla`);
testEqualityNarrowing(`Tesla`, `Tata`);

/* in operator Narrowing
    - powerful narrowing feature in TS
    - usage -> to narrow down Union types, to check optional values are defined, along with Discriminated Union
    - disadvantage - cannot be used with primitive types, like number, string, boolean.
                   - cannot be used to check the values, can only be used to check properties.
*/

//Below is an example of how 'in' operator can be used with Union Types

type TeslaCar = { electric : () => void };
type BMWCar =   { petrol : () => void };

function testInNarrowingWithUnion(car : TeslaCar | BMWCar) {
    if("electric" in car) {
        console.log(`This is a Tesla car`);
    }else{
        console.log(`This is a BMW car`);
    }
}

const teslaCar: TeslaCar = { electric: () => console.log('Tesla is electric') };
const bmwCar: BMWCar = { petrol: () => console.log('BMW is petrol') };

testInNarrowingWithUnion(teslaCar);

//Below is an example of how 'in' operator can be used with Optional Values

type LandRoverCars = {
    carName : string;
    carCategory : string;
    carFuel? : string;
}

function testInNarrowingWithOptionalParameters(car : LandRoverCars) {
    if("carFuel" in car) {
        console.log(`This is a Land Rover car with fuel type - ${car.carFuel}`);
    }else{
        console.log(`This is a Land Rover car without fuel type`);
    }
}

const rangeRover : LandRoverCars = {
    carName : "Range Rover Velar",
    carCategory : "SUV"
}
testInNarrowingWithOptionalParameters(rangeRover);


/* instanceof Narrowing
    - helps to check if an object is an instance of a class or constructor function
    - works with inheritance as well
    - cannot be used with anything apart from Classes and constructor functions like - interfaces, types, unions with primitive types etc.
*/

class Car {
    startCar() {
        console.log(`Car is starting`);
    }
}

class Mercedes extends Car {
    topSpeed() {
        console.log(`This is a Mercedes car with top speed of 200kmph`); 
    }
}

function testInstanceOfNarrowing(car : Car) {
    if(car instanceof Mercedes) {
        car.topSpeed();
    }else {
        car.startCar();
    }
}

const mercedes : Mercedes = new Mercedes();
testInstanceOfNarrowing(mercedes);

/*  Control flow analysis
    - process of using different type guards and narrowing - 
    - type guards like equality, typeof, in, instanceof etc
*/

function handleInput(input: string | number | null) {
    if (!input) {
      console.log("No input provided."); // Narrowed to null or undefined (truthiness check)
    } else if (typeof input === "string") {
      console.log(input.toUpperCase()); // Narrowed to string
    } else {
      console.log(input.toFixed(2)); // Narrowed to number
    }
}

/* Type Predicates
    - used to write custom type guards
    - logic must be written in simple terms
    - we are creating a function that returns a boolean value and has return type as -  parameter is Type
*/


function isTypePredicate(value : unknown) : value is string {
    return typeof value === "string";
}

function testNumberOrString(value : unknown) {
    if(isTypePredicate(value)) {
        console.log(`Value is a string and transformed to uppercase - ${value.toUpperCase()}`);
    }else {
        console.log(`Not a String`);
    }
}

testNumberOrString(`ABC`);

/* Discriminated Union and Exhaustiveness Checking using never
*/
