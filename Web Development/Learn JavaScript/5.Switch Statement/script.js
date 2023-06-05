// const grade = "C";

// switch(grade){
//     case "A":
//         console.log("Good grade");
//         break;
//     case "B":
//         console.log("nice grade");
//         break;
//     case "C":
//         console.log("you need to improve");        
//         break;
//     case "C":
//        console.log("you need to improve");        
//          break;   
//     default:
//         console.log("Invalid grade");          
// }


let a = 20;
let b = 15;

let result =0;
const operations = "/";

switch(operations){
    case "+":
        result = a + b;
        
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
        result = a / b;
        break;    
    default:
        console.log("invalid operation");

          
}

console.log(result);  