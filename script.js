const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const outputText = document.getElementById("counter");

let counterVal = outputText.textContent;


// 'func1' branch code starts here...

incrementBtn.addEventListener("click",(e)=> {
  outputText.textContent = ++counterVal;
})