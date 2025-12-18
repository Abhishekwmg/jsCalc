const calcBtns = document.querySelectorAll('.calc-buttons');
const calcUpperText = document.querySelector('.calc-display-upper-nums')
const calcLowerText = document.querySelector('.calc-display-lower-nums')

calcBtns.forEach((btns) => {
    btns.addEventListener('click', (e) => {
        let calcValue = e.target.dataset.value;
        let calcOperator = e.target.dataset.operator;
        let calcNum = [];
        calcUpperText.textContent = calcValue ? calcValue : calcOperator;

        if (calcValue || calcOperator) {
            calcNum.push(calcValue || calcOperator)
            return calcNum;
        }

        console.log(calcNum)

    })
})

/*
Plan for a Calculator.
each button has the calc number and operator
im looping through all the button in the calc with foreach and attaching an eventlistener
once the button is clicked I am targeting e.target.dataset.value
this way I am getting the value
and I am taking a variable
in that calcNum variable I am attaching each value as I click the buttons including operators and the values
so in my mind I have calcNum  = "88+2/9";
once I have this calcNum
ill then send this to a function performCalcOperation(calcNum)
in the function ill simply return calcNum; but with the help of operators ill perform the operation
and return the result in the calc display in the UI
*/