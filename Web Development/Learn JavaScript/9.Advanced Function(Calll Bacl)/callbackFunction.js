function greet(name , callback){
    console.log("Hi", " ", name);
    callback();
}

// callback function

function callme (){
    console.log("Im a future cricket");
}

// passing function as argument
greet("Niraj",callme);



// arrow function

const calculate = (a , b , operation) =>{
    return operation(a,b);
}

const addition =  (a,b) =>{
    return a +b;
}

console.log(calculate(5,5,addition)); 