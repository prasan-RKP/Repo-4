const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const outputText = document.getElementById("counter");

let counterVal = outputText.textContent;


decrementBtn.addEventListener("click",(e)=> {
  if(counterVal > 0){
    outputText.textContent = --counterVal;
  }
})