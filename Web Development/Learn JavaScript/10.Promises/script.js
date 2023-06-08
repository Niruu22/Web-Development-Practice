const ticket = new Promise (function (resolve, reject) {
    const isBordered = true;
    if(isBordered){
        resolve("You are in flight");
    }else{
        reject("YOu flight has been canceled");
    }
});

ticket.then((data) => {
    console.log("wohoo", data);
}).catch((data) => {
    console.log("oh no", data);
}).finally(() => {
    console.log("I will always execute");
});