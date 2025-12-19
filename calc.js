const calcBtns = document.querySelectorAll('.calc-buttons');
const calcUpperText = document.querySelector('.calc-display-upper-nums')
const calcLowerText = document.querySelector('.calc-display-lower-nums')

let calcNum = [];
let calcStr = "";

calcBtns.forEach((btns) => {
    btns.addEventListener('click', (e) => {

        const { value, operator } = e.target.dataset;

        if (value === 'reset') {
            calcNum = [];
            calcUpperText.textContent = "0";
            calcLowerText.textContent = "0";
            return;
        }

        if (value === "delete") {
            calcNum.pop();
            calcUpperText.textContent = calcNum.join("") || 0;
            return;
        }

        if (operator === "=") {
            if (calcNum.length < 3) return;
            performOperation(calcNum);
            calcNum = [];
            return;
        }

        if (value) {
            let last = calcNum[calcNum.length - 1];
            if (value === "." && last?.includes?.(".")) return;

            calcNum.push(value);
        }

        if (operator) {
            let last = calcNum[calcNum.length - 1];

            if (!calcNum.length) return;


            if (["+", "-", "*", "/"].includes(last)) {
                calcNum[calcNum.length - 1] = operator;
            } else {
                calcNum.push(operator);
            }
        }

        calcUpperText.textContent = calcNum.join("");

    })
})

const performOperation = (numArr) => {
    const expression = numArr.join("");
    calcUpperText.textContent = expression;

    try {
        const result = Function(`return ${expression}`)();
        calcLowerText.textContent = Number.isInteger(result) ? result : result.toFixed(3);
    } catch {
        calcLowerText.textContent = "Error";
    }
}