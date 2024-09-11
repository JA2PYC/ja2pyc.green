addEventListener('DOMContentLoaded', () => {
    function initialize() {
        eventHandler();
    }

    function eventHandler() {
        addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('button_regexp')) {
                callRegexp(target, event);
            } else if (target.classList.contains('button_divide')) {
                callDivide(target, event);
            } else if (target.classList.contains('button_distinguish')) {
                callDistinguish(target, event);
            } else if (target.classList.contains('button_average')) {
                callAverage(target, event);
            } else if (target.classList.contains('button_reg_loop')) {
                callRegLoop(target, event);
            } else if (target.classList.contains('button_sum')) {
                callSum(target, event);
            } else if (target.classList.contains('button_sum_custom')) {
                callSumCustom(target, event);
            }
        });
    }

    function callRegexp(target, event) {
        let userInput = prompt('메시지를 입력하세요', '안녕하세요.');
        let regHello = /안녕/;
        let regGoodNight = /잘자/;

        let targetParent = target.parentElement;
        let input_result = targetParent.querySelector('.input_result');

        if (regHello.test(userInput)) {
            input_result.value = '안녕하세요.'
        } else if (regGoodNight.test(userInput)) {
            input_result.value = '안녕히 주무세요.'
        } else {
            input_result.value = '???'
        }
    }

    function callDivide(target, event) {
        let targetParent = target.parentElement;
        let input_result = targetParent.querySelector('.input_result');
        let input_divide = targetParent.querySelector('.input_divide');

        if (input_result && input_divide) {
            let userInput = input_divide.value;
            if (!userInput || isNaN(userInput)) return alert('숫자를 입력해 주세요.');

            let inputNumber = parseFloat(userInput);
            let divideResult = inputNumber % 4;
            if (divideResult === 0) {
                input_result.value = '나머지 : ' + divideResult;
            } else {
                input_result.value = '나머지 : ' + divideResult;
            }
        }

    }

    function callDistinguish(target, event) {
        let targetParent = target.parentElement;
        let input_result = targetParent.querySelector('.input_result');
        let input_distinguish = targetParent.querySelector('.input_distinguish');

        if (input_result && input_distinguish) {
            let userInput = input_distinguish.value;
            if (!userInput || isNaN(userInput)) return alert('숫자를 입력해 주세요.');

            let inputNumber = parseFloat(userInput);
            if (inputNumber > 0) {
                input_result.value = '양수 : ' + inputNumber;
            } else if (inputNumber < 0) {
                input_result.value = '음수 : ' + inputNumber;
            } else if (inputNumber === 0) {
                input_result.value = '0 : ' + inputNumber;
            } else {
                input_result.value = '오류';
            }
        }
    }

    function callAverage(target, event) {
        let targetParent = target.parentElement;
        let input_result = targetParent.querySelector('.input_result');
        let input_average = targetParent.querySelector('.input_average');

        if (input_result && input_average) {
            let userInput = input_average.value;
            if (!userInput || isNaN(userInput)) return alert('숫자를 입력해주세요.');

            let inputNumber = parseInt(userInput);
            let targetNumber = [];
            for (let i = 0; i < inputNumber; i++) {
                let promptNumber = prompt('숫자를 입력해주세요.');
                if (!promptNumber || isNaN(promptNumber)) return alert('숫자를 입력해주세요.');
                targetNumber.push(promptNumber)
            }

            if (targetNumber.length === inputNumber) {
                let sumNumber = 0;
                let averageNumber = 0;
                targetNumber.forEach((target) => {
                    sumNumber += parseInt(target);
                });

                averageNumber = sumNumber / inputNumber;
                input_result.value = '평균값 : ' + averageNumber;
            } else {
                input_result.value = '오류';
            }
        }
    }

    function callRegLoop(target, event) {
        let targetParent = target.parentElement;
        let input_result = targetParent.querySelector('.input_result');

        if (input_result) {
            let loopBreaker = false;
            let loopCounter = 0;
            let regHello = /안녕/;
            let regGoodNight = /잘자/;
            let regGoodbye = /잘 있어/;

            do {
                let userInput = prompt('메시지를 입력하세요.', '안녕하세요.')

                if (regHello.test(userInput)) {
                    input_result.value = '안녕하세요.';
                    alert('안녕하세요.');
                } else if (regGoodNight.test(userInput)) {
                    input_result.value = '안녕히 주무세요.';
                    alert('안녕히 주무세요.');
                } else if (regGoodbye.test(userInput)) {
                    input_result.value = '다음에 또 봐요.'
                    alert('다음에 또 봐요.');
                    loopBreaker = true;
                }

                loopCounter++
                if (loopCounter > 10) {
                    input_result.value = '다음에 다시 오세요.'
                    alert('다음에 다시 오세요.')
                    loopBreaker = true;
                    break;
                }
            } while (!loopBreaker)
        }
    }

    function callSum(target, event) {
        let targetParent = target.parentElement;
        let input_result = targetParent.querySelector('.input_result');
        let input_sum = targetParent.querySelector('.input_sum');

        if (input_result && input_sum) {
            let userInput = input_sum.value;
            if (!userInput || isNaN(userInput)) return alert('숫자를 입력해주세요.');

            let inputNumber = parseInt(userInput);
            if (inputNumber <= 0) return alert('임의의 양수를 입력해주세요.');

            let result = 0;
            for (let i = 0; i < inputNumber; i++) {
                result += i + 1;
            }

            input_result.value = `1부터 ${inputNumber} 까지의 합 : ` + result;
        }
    }

    function callSumCustom(target, event) {
        let targetParent = target.parentElement;
        let input_result = targetParent.querySelector('.input_result');

        if (input_result) {
            let userInput1 = prompt('숫자를 입력해주세요.', '숫자를 입력해주세요.');
            if (!userInput1 || isNaN(userInput1)) return alert('숫자를 입력해주세요.');
            let userNumber1 = parseInt(userInput1);

            let userInput2 = prompt('숫자를 입력해주세요.');
            if (!userInput2 || isNaN(userInput2)) return alert('숫자를 입력해주세요.');
            let userNumber2 = parseInt(userInput2);

            if (userNumber1 > userNumber2) return alert('두번째 숫자는 첫번째 숫자보다 커야합니다.');

            let result = 0;
            for (let i = userNumber1; i < userNumber2 + 1; i++) {
                console.log(i);
                result += i;
            }

            input_result.value = '합계 : ' + result;
        }

    }

    // Initialize
    initialize();
});