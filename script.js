
  function greetUser() {
    let name = document.getElementById("username").value;
    let msg = document.getElementById("greet-msg");

    if (name === "") {
      msg.innerText = "Please enter your name 🙂";
    } else {
      msg.innerText = "Hello " + name + "! Welcome to ReSto 🍔";
    }
  }


//   for calculator

function addNumbers() {
  const num1 = parseFloat(document.getElementById('num1').value) || 0;
  const num2 = parseFloat(document.getElementById('num2').value) || 0;
  const result = document.getElementById('result');
  result.textContent = (num1 + num2).toFixed(2);
}
