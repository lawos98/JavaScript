let counterInput = document.getElementById("counter");
let counter = counterInput.value;

let spans = document.querySelectorAll("span");

let decrement = function () {
  spans.forEach((element) => {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    const node = document.createTextNode(counter);
    element.appendChild(node)})
  if (counter > 0){
    counter--;
  }
  if (counter === 0 && counterInput.value!=="0"){
    counterInput.value = "0";
  }
};
window.setInterval(decrement, 1000);

counterInput.addEventListener("input", function (e) {
  counter = e.target.value;
});
