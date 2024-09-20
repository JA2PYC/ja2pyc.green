addEventListener('DOMContentLoaded', () => {
    function initialize() {
        eventHandler();

    }

    function eventHandler() {
        addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('button_id')) {
                callIdChecker(target, event);
            }
        })

        let input_id = document.querySelector('.input_id');
        input_id.addEventListener('blur', (event) => {
            let target = event.target;

            if (target.classList.contains('input_id')) {
                callIdCheckerBlur(target, event);
            }
        });
    }

    function callIdChecker(target, event) {
        let targetParent = target.parentElement;
        let input_id = targetParent.querySelector('.input_id');
        let input_result = targetParent.querySelector('.input_result');

        let userInput = input_id.value;
        if (userInput.length < 6) {
            input_result.value = '아이디는 6글자 이상이어야 합니다.';
        } else {
            input_result.value = '검사성공';
        }
    }

    function callIdCheckerBlur(target, event) {
        let targetParent = target.parentElement;
        let input_id = targetParent.querySelector('.input_id');
        let input_result_blur = targetParent.querySelector('.input_result_blur');

        let userInput = input_id.value;
        if (userInput.length < 6) {
            input_result_blur.value = '아이디는 6글자 이상이어야 합니다.'
        } else {
            input_result_blur.value = '블러검사성공';
        }
    }

    initialize();
});