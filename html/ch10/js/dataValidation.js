addEventListener('DOMContentLoaded', () => {
    function initialize() {
        eventHandler();
    }

    function eventHandler() {
        addEventListener('change', (event) => {
            let target = event.target;

            if (target.tagName && target.tagName === 'INPUT') {
                callRegExpChecker(target, event);
            }
        });

        addEventListener('submit', (event) => {
            event.preventDefault();
            console.log('submit');
            console.log(event);

            console.log(Array.from(event.target));

            let isValidArr = [];
            Array.from(event.target).forEach((array) => {
                if (array.tagName === 'INPUT' && array.disabled === false) {
                    isValidArr.push(callRegExpChecker(array))
                }
            });

            let validResult = isValidArr.every((validValue) => {
                return validValue;
            });

            console.log(isValidArr);
            console.log(validResult);

            if (validResult) {
                // 검증이 통과된 경우에만 폼을 전송
                event.target.submit();
            }
        });
    }

    function callRegExpChecker(target, event) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');

        if (!target.value) {
            result.value = '값을 입력해주세요.'; 
            return false;
        }

        let regExp;
        if (target.type === 'text') {
            if (target.name === 'input_id') {
                regExp = /^[a-zA-Z]+[a-zA-Z0-9~!@#$%^&*()\-_=+]{5,25}$/;
            } else if (target.name === 'input_name') {
                regExp = /^[가-힣]+$/;
            }
            else {
                regExp = /^[a-zA-Z0-9]/;
            }
        } else if (target.type === 'password') {
            regExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#\$%\^&\*\(\)\-_\+=])[a-zA-Z0-9~!@#\$%\^&\*\(\)\-_\+=]{12,128}$/;
        } else if (target.type === 'date') {
            regExp = /^\d{4}\-\d{2}\-\d{2}$/;
            // regExp = /\d+/;
        } else if (target.type === 'number') {
            if (target.name === 'input_tel') {
                regExp = /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}/;
            } else {
                regExp = /\d+/;
            }
        } else if (target.type === 'email') {
            regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        } else {
            regExp = /^[a-zA-Z0-9]/;
        }

        if (!regExp) {
            result.value = '검증식을 불러오지 못했습니다.';
            return false;
        }

        // console.log(target.name)
        // console.log(regExp)
        // console.log(target.value)
        // console.log(String(target.value).match(regExp));
        // console.log(regExp.test(target.value));

        let regResult = String(target.value).match(regExp);
        if (regResult) {
            result.value = '검증결과 : ' + regResult;
        } else {
            result.value = `검증결과 : 검증실패 (${regResult})`;
        }

        return regExp.test(target.value);
    }

    initialize();
});