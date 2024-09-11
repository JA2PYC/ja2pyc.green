addEventListener('DOMContentLoaded', () => {
    function initialize() {
        eventHandler();
    }

    function eventHandler() {
        addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('button_factorial')) {
                factorial(target, event);
            }
        });

    }

    function factorial(target, event) {
        let factorialNumber = prompt('숫자를 입력해 주세요.', '임의의 양수를 입력해주세요.');

        if (factorialNumber <= 0) return alert('음수 또는 0은 사용할 수 없습니다.');

        let targetParent = target.parentElement;
        let input_factorial = targetParent.getElementsByClassName('input_factorial');
        let input_factorialArr = Array.from(input_factorial);
        
        let factorialResult = 1;
        for (let i = factorialNumber; i > 0; i--) {
            factorialResult *= i;
        }
        input_factorialArr.forEach((array) => {
            array.value = 'Factorial ' + factorialNumber + ' : ' +factorialResult;
        });
    }

    initialize();
});