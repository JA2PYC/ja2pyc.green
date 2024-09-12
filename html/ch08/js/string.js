addEventListener('DOMContentLoaded', () => {
    function initialize() {
        eventHandler();
    }

    function eventHandler() {
        addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('button_str_method')) {
                callStrMethod(target, event);
            } else if (target.classList.contains('button_str_number')) {
                callStrNumber(target, event);
            }
        });
    }

    function callStrMethod(target, event) {
        let targetParent = target.parentElement;
        let textarea_result = targetParent.querySelector('.textarea_result');
        let input_str_method = targetParent.querySelector('.input_str_method');
        let userInput = input_str_method.value;
        if (!userInput) {
            userInput = 'JAVA!SCRIPT!!?'
        }

        let targetStr = new String(userInput);
        let regexp = /\!\?/;

        textarea_result.value = '';
        textarea_result.value += 'String : ' + targetStr + '\n';
        textarea_result.value += 'Target : ' + targetStr[targetStr.length - 1] + '\n';
        textarea_result.value += 'charAt(targetStr.length -1) : ' + targetStr.charAt(targetStr.length - 1) + '\n';
        textarea_result.value += 'indexOf : ' + targetStr.indexOf(targetStr.charAt(targetStr.length - 1), 0) + '\n';
        textarea_result.value += 'replace(Target, "!") : ' + targetStr.replace(targetStr.charAt(targetStr.length - 1), '!') + '\n';
        textarea_result.value += 'match(regexp) : ' + targetStr.match(regexp) + '\n';
        textarea_result.value += 'slice(1, 5) : ' + targetStr.slice(1, 5) + '\n';
        textarea_result.value += 'split("!", 4) : ' + targetStr.split('!', 4) + '\n';
        textarea_result.value += 'substring(5, 11) : ' + targetStr.substring(5, 11) + '\n';
        textarea_result.value += 'toUpperCase() : ' + targetStr.toUpperCase() + '\n';
        textarea_result.value += 'toLowerCase() : ' + targetStr.toLowerCase() + '\n';
        textarea_result.value += 'valueOf() : ' + targetStr.valueOf() + '\n';
        textarea_result.value += 'new Date().valueOf() : ' + new Date().valueOf() + '\n';
    }

    function callStrNumber(target, event) {
        let targetParent = target.parentElement;
        let input_result = targetParent.querySelector('.input_result');
        let input_number1 = targetParent.querySelector('.input_number1');
        let input_number2 = targetParent.querySelector('.input_number2');

        let valueNumber1 = input_number1.value;
        let valueNumber2 = input_number2.value;

        let totalValue = valueNumber1 + valueNumber2;

        console.log(totalValue.length)
        if (totalValue.length === 9) {
            if (totalValue[8] === '1' || totalValue[8] === '3') {
                input_result.value = '남성 입니다.';
            } else if (totalValue[8] === '2' || totalValue[8] === '4') {
                input_result.value = '여성 입니다.';
            } else {
                input_result.value = '오류';
            }
        } else {
            input_result.value = '정확한 번호를 입력해주세요.';
        }
    }
    initialize();
});