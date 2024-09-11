addEventListener('DOMContentLoaded', function () {

    function initialize() {
        eventHandler();
    }

    function callContinue(target, event) {
        let targetParent = target.parentElement;
        let inputContinue = targetParent.getElementsByClassName('input_continue');
        let inputContinueArr = Array.from(inputContinue);
        inputContinueArr.forEach((array) => {
            let continueCounter = 0;
            let randomNumber = 0;
            do {
                randomNumber = Math.floor(Math.random() * 100);
                array.value = randomNumber;
                if (randomNumber < 50) {
                    continueCounter++
                    continue;
                } else {
                    array.value = 'Counter : ' + continueCounter + ', Value : ' + randomNumber;
                    break;
                }
            } while (randomNumber < 100)
        });

    }

    function callBreak(target, event) {
        let targetParent = target.parentElement;
        let inputBreak = targetParent.getElementsByClassName('input_break');
        let inputBreakArr = Array.from(inputBreak);
        inputBreakArr.forEach((array) => {
            let breakCounter = 0;
            let randomNumber = 0;

            while (randomNumber < 95) {
                randomNumber = Math.floor(Math.random() * 100);
                array.value = randomNumber;
                breakCounter++
                if (randomNumber >= 95) {
                    array.value = 'Counter : ' + breakCounter + ', Value : ' + randomNumber;
                    break;
                }
            }


        })
    }

    function callInterval(target, event) {
        let targetParent = target.parentElement;
        let inputInterval = targetParent.getElementsByClassName('input_interval');
        let inputIntervalArr = Array.from(inputInterval);

        let intervalIds = new Set();
        let resultMap = new Map();
        inputIntervalArr.forEach((array) => {
            let intervalCounter = 0;
            let randomNumber = 0;
            let intervalId = setInterval(() => {
                randomNumber = Math.floor(Math.random() * 100);
                array.value = 'Value : ' + randomNumber;
                intervalCounter++;

                if (randomNumber > 95) {
                    array.value = 'Counter : ' + intervalCounter + ', Value : ' + randomNumber;
                    intervalIds.delete(intervalId);
                    array.setAttribute('data-counter', intervalCounter)
                    array.setAttribute('data-value', randomNumber)
                    clearInterval(intervalId);
                }
            }, 50);

            intervalIds.add(intervalId);

            // // Chat GPT
            // // 0.1초(100ms)마다 실행
            // let intervalId = setInterval(() => {
            //     randomNumber = Math.floor(Math.random() * 100);
            //     array.value = randomNumber;
            //     breakCounter++;

            //     // 랜덤 숫자가 95 이상일 때 멈춤
            //     if (randomNumber >= 95) {
            //         array.value = 'Counter : ' + breakCounter + ', Value : ' + randomNumber;
            //         clearInterval(intervalId); // 타이머 종료
            //     }
            // }, 50);  // 100ms 텀
        });

        let intervalManagerId = setInterval(() => {
            console.log(intervalIds);
            console.log(intervalIds.size);
            if (intervalIds.size === 0) {
                let maxIndex = 0;
                let maxCounter = 0;
                let maxValue = 0;
                inputIntervalArr.forEach((array, i) => {
                    let currentCounter = parseInt(array.getAttribute('data-counter'));
                    let currentValue = parseInt(array.getAttribute('data-value'));

                    if (currentCounter > maxCounter) {
                        console.log(i);
                        console.log(currentCounter);
                        console.log(currentValue);
                        maxIndex = i;
                        maxCounter = currentCounter;
                        maxValue = currentValue;
                    }
                });

                console.log(maxIndex);
                console.log(maxCounter);
                console.log(maxValue);
                inputIntervalArr[maxIndex].classList.add('max_counter')
                clearInterval(intervalManagerId);
            }
        }, 500);
    }

    function eventHandler() {
        addEventListener('click', function (event) {
            let target = event.target;

            if (target.classList.contains('button_continue')) {
                callContinue(target, event);
            } else if (target.classList.contains('button_break')) {
                callBreak(target, event);
            } else if (target.classList.contains('button_interval')) {
                callInterval(target, event);
            }
        })
    }

    // Initialize
    initialize();
})