const btn = document.getElementById("counter-btn");
const textNum = document.getElementById("num");

let textVal = textNum.innerText;

console.log(textVal);
btn.addEventListener("click", (e) => {
  textNum.textContent = ++textVal;
});
