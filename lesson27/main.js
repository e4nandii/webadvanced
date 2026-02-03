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

