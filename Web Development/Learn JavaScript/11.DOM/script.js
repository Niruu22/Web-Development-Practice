const box1 = document.getElementById("box-1");
box1.innerHTML = "Niraj";
box1.style.backgroundColor="orange";

//modifying class 
// box1.classList.add("round-border");


const boxes = document.getElementsByClassName("box");

for(let i=0; i<boxes.length; i++) {
    boxes[i].classList.add("round-border");
}

box1.classList.remove("round-border");


const para = document.createElement("p");
para.innerHTML = "Saraf";
para.classList.add("box");

const container = document.getElementById("container");
container.appendChild(para);






// const myBody =document.body;
// // myBody.style.backgroundColor="orange";
// console.log(myBody);

// //getElementById
// const box2 =document.getElementById("box-2");
// console.log(box2);

// //getElementByTag
// const div_tag = document.getElementsByTagName("div");
// const p_tag = document.getElementsByTagName("p");
// console.log(div_tag);
// console.log(p_tag);

// //getElementByClassName
// const className =document.getElementsByClassName("random");
// console.log(className);

// //Css Selectors (querySelectorAll)
// const query = document.querySelector('.container .random');
// console.log(query);
