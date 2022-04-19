
const tomHeight = 9;
const tomMass = 8;
const jerryHeight = 10;
const jerryMass = 45;

const tomBMI = (tomMass/(Math.pow(tomHeight, 2)));
const jerryBMI = (jerryMass/(Math.pow(jerryHeight, 2)));

let greater;
if (tomBMI > jerryBMI) {
    greater = true;
} else {
    greater
}

console.log(`Is Tom's BMI higher than Jerry's? ${greater}`);
