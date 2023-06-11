let students = [
  { id: "1", name: "niraj", sports: "Cricket" },
  { id: "2", name: "sagar", sports: "basketball" },
  { id: "3", name: "nitin", sports: "BGMI" },
  { id: "4", name: "vaibhav", sports: "basketball" },
  { id: "5", name: "chinmay", sports: "baseball" },
];

//filters

// const newArray = students.filter((curValue) =>{
//     if(curValue.id % 2 == 0){
//         return true;
//     }else{
//         return false;
//     }
// });

// console.log("New Array");
// console.log(newArray);

//Maps
const names = students
  .filter((curValue) => curValue.sports == "basketball")

  .map((curValue, index, array) => {
    return `<li> ${curValue.name} </li>`;
  });

console.log(names);

const div = document.getElementById("container");

div.innerHTML = `<ul> ${names.join(" ")} </ul>`;
