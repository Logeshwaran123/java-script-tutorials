console.log("Index HTML and Script JS was working fine.");

// Regular Functions
function myRegularFn() {
  console.log("Regular Function");
}

myRegularFn();
myRegularFn();
myRegularFn();
myRegularFn();
myRegularFn();

function bmiCalc() {
  let wgt = prompt("Enter your weight:") * 1;
  let hgt = prompt("Enter your height:");
  let bmi = wgt / hgt ** 2;
  console.log(`BMI is ${bmi}`);
  return Math.floor(bmi);
}

console.log(bmiCalc());
