let operator = "";
let num1 = 0;
let num2 = 0;


const screen01 = document.getElementById("screen01");
screen01.textContent = " ";


function operate(operator, num1, num2) {
    switch (operator) {
        case '+': return (num1 + num2);
        case '-': return (num1 - num2);
        case '*': return (num1 * num2);
        case '/': return (num1 / num2);
    }
}

// const total = calculate("-",34,2);
// console.log("🚀 ~ file: script.js:11 ~ total:", total)

// console.log("asdasd");






const gridContainer = document.querySelector('.gridContainer')

const buttons = gridContainer.querySelectorAll('.grid-item');

buttons.forEach(button => button.addEventListener('click', updateScreen));


function updateScreen(e) {
    const screen01 = document.getElementById("screen01");
    screen01.textContent = screen01.textContent + e.target.textContent;
}