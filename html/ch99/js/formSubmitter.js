addEventListener('DOMContentLoaded', () => {
    // Initializer
    function initialize() {
        eventHandler();
    }

    // Event Handler
    function eventHandler() {
        // Set Forms
        let formsArr = (document.forms);
        if (formsArr) {
            Array.from(formsArr).forEach((formData) => {
                let formDataArr = Array.from(formData);
                let inputPasswordArr = [];
                // Set Input Checker
                formDataArr.forEach((inputTarget, index) => {
                    inputTarget.addEventListener('input', (inputEvent) => callRegExpChecker(inputEvent.target));

                    if (inputTarget.type === 'password') inputPasswordArr.push(inputTarget);
                });

                // Set Password Verifier
                if (inputPasswordArr.length >= 2) {
                    inputPasswordArr[inputPasswordArr.length - 1].addEventListener('input', (inputEvent) => callVerifyPassword(inputPasswordArr));
                }

                // Set Form Submitter
                formData.addEventListener('submit', (submitEvent) => {
                    // Prevent Submit
                    submitEvent.preventDefault();

                    let isValidArr = [];

                    // Call RegExp Checker
                    formDataArr.forEach((inputTarget) => {
                        isValidArr.push(callRegExpChecker(inputTarget))
                    });

                    // Call Passwor Verifier
                    isValidArr.push(callVerifyPassword(inputPasswordArr));

                    // Check Valid Result
                    let validResult = isValidArr.every(Boolean);
                    if (validResult) {
                        // Submit Form Data
                        submitEvent.target.submit();
                    }
                });
            });
        }
    }

    // Verify Password Input
    function callVerifyPassword(target) {
        if (!Array.isArray(target)) return;
        let targetArr = Array.from(target);
        let verifyResult = targetArr[targetArr.length - 1].parentNode.querySelector('.verify_result');

        if (!targetArr[0].value) return false;

        console.log(targetArr)
        let verifyTestResult = targetArr.every((field) => {
            return field.value === targetArr[0].value;
        });

        if (verifyTestResult) {
            verifyResult && (verifyResult.textContent = '비밀번호가 일치합니다.');
        } else {
            verifyResult && (verifyResult.textContent = '비밀번호가 일치하지 않습니다.');
        }
        return verifyTestResult;
    }

    // Set Regular Expressions
    const regExps = {
        INPUT: {
            text: {
                input_id: /^[a-zA-Z0-9`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]{6,32}$/,
                input_name: /^[가-힣]{2,32}$/,
                default: /^[a-zA-Z0-9`~!@#$%^&*()\-_=+\\|/.{}[\]'";:,?<>]+$/,
            },
            password: /(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?])[a-zA-Z0-9`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]{12,32}$/,
            email: /^[a-zA-Z0-9%\-_+.]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/,
            date: /^\d{4,6}\-?\d{1,2}\-?\d{1,2}$/,
            number: /\d+/,
            tel: /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/
        },
        TEXTAREA: /^[a-zA-Z0-9`~!@#$%^&*()\-_=+\\|/.{}[\]'";:,?<>\n\t]+$/
    };


    // Reg Expression Checker
    function callRegExpChecker(target) {
        let targetParent = target.parentNode;
        let regResult = targetParent.querySelector('.reg_result');

        if (!target.value) {
            regResult && (regResult.textContent = '검증 대상이 없습니다.');
            return false;
        } else if (target.type === 'submit' && !target.name) {
            return true;
        }

        let regExp;
        if (target.tagName === 'INPUT') {
            if (target.type === 'text') {
                regExp = regExps[target.tagName][target.type][target.name] || regExps[target.tagName][target.type].default;
            } else {
                regExp = regExps[target.tagName][target.type];
            }
        } else if (target.tagName === 'TEXTAREA') {
            regExp = regExps[target.tagName]
        }

        if (!regExp) {
            regResult && (regResult.textContent = '검증식을 불러오지 못했습니다.');
            return false;
        }

        let regExpTestResult = regExp.test(target.value);
        if (regExpTestResult) {
            regResult && (regResult.textContent = '검증성공');
        } else {
            regResult && (regResult.textContent = '검증실패');
        }

        return regExpTestResult;
    }

    // Initialize
    initialize();
});