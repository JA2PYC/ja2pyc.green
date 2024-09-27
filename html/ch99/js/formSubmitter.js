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
                    callVerifyPassword(inputPasswordArr);
                }

                // Set Form Submitter
                formData.addEventListener('submit', (submitEvent) => {
                    // Prevent Submit
                    submitEvent.preventDefault();

                    let isValidArr = [];

                    // Call RegExp Checker
                    Array.from(formDataArr).forEach((inputTarget) => {
                        isValidArr.push(callRegExpChecker(inputTarget))
                    });

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
   
        targetArr.forEach((inputField) => {
            inputField.addEventListener('input', () => {
                const allMatch = targetArr.every(field => field.value === targetArr[0].value);
                if (!allMatch) {
                    alert("비밀번호가 일치하지 않습니다.");
                } else {
                    alert("비밀번호가 일치합니다.");
                }
            });
        });
    }

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
                if (target.name === 'input_id') {
                    regExp = /^[a-zA-Z0-9`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]{6,32}$/;
                } else if (target.name === 'input_name') {
                    regExp = /^[가-힣]{2,32}$/;
                } else {
                    regExp = /^[a-zA-Z0-9`~!@#$%^&*()\-_=+\\|/.{}[\]'";:,?<>]+$/;
                }
            } else if (target.type === 'password') {
                regExp = /(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?])[a-zA-Z0-9`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]{12,32}$/;
            } else if (target.type === 'email') {
                regExp = /^[a-zA-Z0-9%\-_+.]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
            } else if (target.type === 'date') {
                regExp = /^\d{4,6}\-?\d{1,2}\-?\d{1,2}$/;
            } else if (target.type === 'number') {
                regExp = /\d+/;
            } else if (target.type === 'tel') {
                regExp = /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
            }
        } else if (target.tagName === 'TEXTAREA') {
            regExp = /^[a-zA-Z0-9`~!@#$%^&*()\-_=+\\|/.{}[\]'";:,?<>\n\t]+$/;
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