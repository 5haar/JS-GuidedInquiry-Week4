
const tomHeight = 9;
const tomMass = 8;
const jerryHeight = 10;
const jerryMass = 45;

const tomBMI = (tomMass/(Math.pow(tomHeight, 2)));
const jerryBMI = (jerryMass/(Math.pow(jerryHeight, 2)));

const greater =  tomBMI > jerryBMI;

console.log(`Is Tom's BMI higher than Jerry's? ${greater}`);
