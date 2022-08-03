const myColor = document.getElementById("myColor");
let currentColor = myColor.value;
let counter = 0;

const colorChange = () => {
  let newColor = myColor.value;
  console.log(newColor);
  counter++;
};
console.log(currentColor);

setTimeout(colorChange, 2000);
