addEventListener('DOMContentLoaded', () => {
    // Set Container
    let resultContainer = document.getElementsByClassName('result');
    let resultContainerArr = Array.from(resultContainer);

    // Set Value
    let magicNumber = 0;
    let guessCounter = 0;

    // Initialize
    function initialize() {
        callReset();
        eventHandler();
    }

    function eventHandler() {
        addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('button_guess')) {
                callGuess(target, event);
            } else if (target.classList.contains('button_reset')) {
                callReset(target, event);
            }
        });
    }

    function callGuess(target, event) {
        let targetParent = target.parentElement;
        let input_guess = targetParent.getElementsByClassName('input_guess');
        let input_guessArr = Array.from(input_guess);

        let guessNumber = input_guessArr[0].value;
        let resultValue = '';
        if (!guessNumber || isNaN(guessNumber) || guessNumber <= 0 || guessNumber > 100) return alert('1에서 100까지의 숫자 중 하나를 입력해주세요.');
        guessNumber = parseInt(guessNumber);
        if (guessNumber === magicNumber) {
            resultValue = '정답 : ' + magicNumber;
        } else if (guessNumber < magicNumber) {
            resultValue = 'Up : ' + guessNumber;
        } else if (guessNumber > magicNumber) {
            resultValue = 'Down : ' + guessNumber;
        }
        guessCounter++

        resultContainerArr.forEach((array) => {
            let inputCounter = array.getElementsByClassName('input_counter');
            let inputResult = array.getElementsByClassName('input_result');

            inputCounter[0].value = '추측횟수 : ' + guessCounter;
            inputResult[0].value = resultValue;
        });
    }

    function callReset(target, event) {
        magicNumber = Math.ceil(Math.random() * 100);
        if (magicNumber === 0) magicNumber = 1;
        guessCounter = 0;

        resultContainerArr.forEach((array) => {
            let inputCounter = array.getElementsByClassName('input_counter');
            let inputResult = array.getElementsByClassName('input_result');

            inputCounter[0].value = 'Clear';
            inputResult[0].value = 'Clear';
        });
    }

    // Initnialize
    initialize();
});