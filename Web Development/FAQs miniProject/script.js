const accordion = document.querySelectorAll(".accordian");

accordion.forEach(accordion =>{
    const icon = accordion.querySelector(".icon");
    const answer = accordion.querySelector(".answer");

    accordion.addEventListener("click", () =>{
        icon.classList.toggle("active");
        answer.classList.toggle("active"); 
    });
});