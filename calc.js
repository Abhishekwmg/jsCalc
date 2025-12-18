const calcBtns = document.querySelectorAll('.calc-buttons');
const calcUpperText = document.querySelector('.calc-display-upper-nums')
const calcLowerText = document.querySelector('.calc-display-lower-nums')

let calcNum = [];
let calcStr = "";

calcBtns.forEach((btns) => {
    btns.addEventListener('click', (e) => {
        // console.log(e);
        let calcValue = e.target.dataset.value;
        let calcOperator = e.target.dataset.operator;
        calcUpperText.textContent = calcValue ? calcValue : calcOperator;

        [calcValue, calcOperator].forEach((v) => {
            if (v !== undefined) calcNum.push(v);
        })

        if (calcOperator === "=") {
            performOperation(calcNum);
            calcNum = [];
        }

    })
})

const performOperation = (numArr) => {
    numArr.pop();
    let evaluate = "";
    numArr.map((arr) => evaluate += arr);
    let result = eval(evaluate);
    calcLowerText.textContent = result;
}

// let num = 1 + 2 + 3 + 4;
// console.log(num);

/*
Plan for a Calculator.

Now I have all the inputs from the calculator into a set of array
[1,2,3,+,5];

*/