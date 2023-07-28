function calc() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    total = parseFloat(num1) + parseFloat(num2);
    document.getElementById("result").innerHTML = total;
}