/* --- Narrowing example -> TS takes narrowing as Type Guard---
       Below is an example of how typeof narrowing can be used
       Narrowing helps TS to improve the code quality and reduce the number of errors.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function testTypeOfNarrowing(carRegNumber) {
    // carRegNumber.     //here we get methods applicable for both number and string
    if (typeof carRegNumber === "string") {
        console.log("This is a string");
        // carRegNumber.     //here we get methods applicable for string
    }
    else {
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
function testTruthyNarrowing(carRegNumber) {
    if (carRegNumber) {
        console.log("This is a truthy value - ".concat(carRegNumber));
        // carRegNumber.     //here we get methods applicable for both number and string
    }
    else {
        console.log("This is a falsy value");
    }
}
testTruthyNarrowing("WDN109");
testTruthyNarrowing(899);
testTruthyNarrowing(null);
/* Equality Narrowing
    - TS also uses equality checks like ===, ==, !==, != to narrow down the type
    - While checking something == null, it also checks for undefined and vice versa
*/
function testEqualityNarrowing(carCompanyA, carCompanyB) {
    if (carCompanyA === carCompanyB) {
        console.log("Company names are equal");
    }
    else {
        console.log("Company names are not equal");
    }
}
testEqualityNarrowing("Tesla", "Tesla");
testEqualityNarrowing("Tesla", "Tata");
function testInNarrowingWithUnion(car) {
    if ("electric" in car) {
        console.log("This is a Tesla car");
    }
    else {
        console.log("This is a BMW car");
    }
}
var teslaCar = { electric: function () { return console.log('Tesla is electric'); } };
var bmwCar = { petrol: function () { return console.log('BMW is petrol'); } };
testInNarrowingWithUnion(teslaCar);
function testInNarrowingWithOptionalParameters(car) {
    if ("carFuel" in car) {
        console.log("This is a Land Rover car with fuel type - ".concat(car.carFuel));
    }
    else {
        console.log("This is a Land Rover car without fuel type");
    }
}
var rangeRover = {
    carName: "Range Rover Velar",
    carCategory: "SUV"
};
testInNarrowingWithOptionalParameters(rangeRover);
/* instanceof Narrowing
    - helps to check if an object is an instance of a class or constructor function
    - works with inheritance as well
    - cannot be used with anything apart from Classes and constructor functions like - interfaces, types, unions with primitive types etc.
*/
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.startCar = function () {
        console.log("Car is starting");
    };
    return Car;
}());
var Mercedes = /** @class */ (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mercedes.prototype.topSpeed = function () {
        console.log("This is a Mercedes car with top speed of 200kmph");
    };
    return Mercedes;
}(Car));
function testInstanceOfNarrowing(car) {
    if (car instanceof Mercedes) {
        car.topSpeed();
    }
    else {
        car.startCar();
    }
}
var mercedes = new Mercedes();
testInstanceOfNarrowing(mercedes);
/*  Control flow analysis
    - process of using different type guards and narrowing -
    - type guards like equality, typeof, in, instanceof etc
*/
function handleInput(input) {
    if (!input) {
        console.log("No input provided."); // Narrowed to null or undefined (truthiness check)
    }
    else if (typeof input === "string") {
        console.log(input.toUpperCase()); // Narrowed to string
    }
    else {
        console.log(input.toFixed(2)); // Narrowed to number
    }
}
/* Type Predicates
    - used to write custom type guards
    - logic must be written in simple terms
    - we are creating a function that returns a boolean value and has return type as -  parameter is Type
*/
function isTypePredicate(value) {
    return typeof value === "string";
}
function testNumberOrString(value) {
    if (isTypePredicate(value)) {
        console.log("Value is a string and transformed to uppercase - ".concat(value.toUpperCase()));
    }
    else {
        console.log("Value is a number");
    }
}
testNumberOrString("ABC");
