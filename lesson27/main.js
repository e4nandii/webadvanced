function functionName(Parametri1, Parametri2){
    // code that needs to be executed
}

function showMessage(){
    alert("This message is inside the function")
}

showMessage();

function sum(sumber1, number2){
    return number1 +number2;
}

console.log(sum(25.5));

var result = toCelsius(54);

console.log("54 fahrenheit is equal to "+result+"celsius")

function toCelsius(f){
    return (5/9) * (f-32;)
}

console.log("54 fahrenheit is equal to "+toCelsius(54)+"celsius")

var arrowFunction = () => alert("Hello world");
arrowFunction();

var arrowFunction = name => alert('Hello ${name}');
arrowFunction("John Doe")

function newFunction(){
    var localVar = "This is a local variable";
    alert(localvar);
}

//kjo punon
newFunction();


//kjo nuk punon
alert(localVar);


function toSeconds(minutat){
    return minutat * 60;
}

console.log(toSeconds(60));


//objektet


var car = { 
    name:"AUDI", 
    color:"black", 
    year:2022, 
    kilometers:20000
    startengine : function(){
        alert("Vroom");
    }
    getKilometers(){
        return this.kilometers
    }
    set setKilometers(km){
        this.kilometers = km;
    }
};

car.startengine();

var school = {
    name:"Digital School"
    subject:"Programming"
    students:5,
    year:2026
};

alert(car.name);

alert(car['color']);


var computer = new Object();

computer.name = "Nvidia";
computer.CPU = "Intel i7-14900KF";
computer.RAM = "32GB";
computer.GPU = "nVidia GeForce RTX 5070"


computer.type = function () {
    return this.name + ", " + this.CPU + ", " + this.RAM + ", " + this.GPU
};

delete computer.GPU;

console.log(car.getKilometers);
car.setKilometers = 100;
console.log(car.getKilometers);