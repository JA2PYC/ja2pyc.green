$(document).ready(() => {
    function initialize() {
        eventHandler();
    }

    function eventHandler() {
        let $documentForms = $(document.forms);
        // Set Input Checker
        $documentForms.each((formIndex, formTarget) => {
            $(formTarget).on('input', (inputEvent) => {
                callRegExpChecker($(inputEvent.target))
            });

            let passwordArr = [];
            let formElements = $(formTarget).prop('elements');
            $(formElements).each((elementIndex, elementTarget) => {
                if ($(elementTarget).attr('type') === 'password') {
                    passwordArr.push(elementTarget);
                }
            });

            if (passwordArr.length >= 2) {
                $(passwordArr).on('input', (inputEvent) => {
                    callVerifyPassword($(passwordArr));
                })
            }

        });

        // Set Form Submitter
        $documentForms.on('submit', (submitEvent) => {
            submitEvent.preventDefault();

            // Set Elements
            let formElements = $(submitEvent.target).prop('elements');

            // Check Data Validation
            let isvalidArr = [];
            let passwordArr = [];
            isvalidArr = $(formElements).map((elementIndex, elementTarget) => {
                if ($(elementTarget).attr('type') === 'password') {
                    passwordArr.push(elementTarget);
                }
                return callRegExpChecker($(elementTarget));
            }).get();

            // Check Password Validation
            if (passwordArr.length >= 2) {
                isvalidArr.push(callVerifyPassword($(passwordArr)));
            }

            console.log(isvalidArr)
            // Check Validation Result
            let validResult = isvalidArr.every(Boolean);

            if (validResult) {
                submitEvent.target.submit();
            }
        })
    }

    function callVerifyPassword($targetArr) {
        if (!$($targetArr[0]).val()) return false;

        let verifyResult = $($targetArr[$targetArr.length - 1]).parent().find('.verify_result');

        let verifyArr = $targetArr.map((passwordIndex, passwordField) => {
            return passwordField.value === $($targetArr[0]).val();
        }).get();

        let verifyPasswordResult = verifyArr.every(Boolean);

        if (verifyPasswordResult) {
            verifyResult && ($(verifyResult).text('비밀번호가 일치합니다.'));
        } else {
            verifyResult && ($(verifyResult).text('비밀번호가 일치하지 않습니다.'));
        }

        return verifyPasswordResult;
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
            tel: /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
        },
        TEXTAREA: /^[a-zA-Z0-9`~!@#$%^&*()\-_=+\\|/.{}[\]'";:,?<>\n\t]+$/,
    }

    // Reg Expression Checker
    function callRegExpChecker($target) {
        let $targetParent = $target.parent();
        let $regResult = $targetParent.find('.reg_result');

        if ($target.attr('type') === 'submit' && !$target.attr('name')) {
            return true;
        } else if (!$target.val()) {
            $regResult && ($regResult.text('검증 대상이 없습니다.'));
            return false;
        }

        let regExp;
        if ($target.prop('tagName') === 'INPUT') {
            if ($target.attr('type') === 'text') {
                regExp = regExps[$target.prop('tagName')][$target.attr('type')][$target.attr('name')] || regExps[$target.prop('tagName')][$target.attr('type')].default;
            } else {
                regExp = regExps[$target.prop('tagName')][$target.attr('type')];
            }
        } else if ($target.prop('tagName') === 'TEXTAREA') {
            regExp = regExps[$target.prop('tagName')];
        }

        if (!regExp) {
            $regResult && ($regResult.text('검증식을 불러오지 못했습니다.'));
            return false;
        }

        let regExpResult = regExp.test($target.val());
        if (regExpResult) {
            $regResult && ($regResult.text('검증성공'));
        } else {
            $regResult && ($regResult.text('검증실패'));
        }

        return regExpResult;
    }

    initialize();
});