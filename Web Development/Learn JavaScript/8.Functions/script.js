const a = 10;
const b = 20;
sum(a, b);

const c = 29;
const d = 20;
sum(c, d);

function sum(a, b) {
  const sum = a + b;
  console.log("result is " ,sum);
}


// Function expression

const areaOfCircle =function (r) {
    const result = (3.14 * r * r);
    return result;
}

console.log(areaOfCircle);
console.log(areaOfCircle(2));