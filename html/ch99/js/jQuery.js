$(document).ready(function () {
    function initialize() {
        eventHandler();
    }

    function eventHandler() {
        // On Click Event Handler 1
        $(document).on('click', (event) => {
            let target = event.target;

            if ($(target).hasClass('target1')) {
                callBackFunction(event, $(target));
            } else if ($(target).hasClass('button_plus') || $(target).hasClass('button_minus')) {
                callQuantityCounter(event, $(target));
            } else if ($(target).hasClass('button_hobby_checker')) {
                callHobbyChecker(event, $(target));
            } else if ($(target).hasClass('button_calc_total')) {
                callSumCalculator(event, $(target));
            }
        });

        // On Click Event Handler 2
        $(document).on('click', '.target2', (event) => {
            callBackFunction(event, $(event.target));
        });

        $(document).find('textarea#textarea_limit').on('input', (event) => {
            callTextLimitChecker(event, $(event.target));
        })
    }

    function callBackFunction(event, $target) {
        $target.css('color', 'red');
        $target.parent().find('.result').val($target.attr('class'));
        setTimeout(() => $target.css('color', ''), 1000);
    }

    function callQuantityCounter(event, $target) {
        let $targetParent = $target.parent();
        let $result = $targetParent.find('.result');

        if ($target.hasClass('button_plus')) {
            $result.val(parseInt(result.val()) + 1);
        } else {
            $result.val(parseInt(result.val()) - 1);
        }
    }

    function callHobbyChecker(event, $target) {
        let $targetParent = $target.parent();
        let $result = $targetParent.find('.result');
        let $inputAll = $targetParent.find('input.hobby:checked');

        let checkedValues = $inputAll.map((index, input) => {
            return $(input).val().toUpperCase();
        }).get();

        $result.val(checkedValues.join(', '));
    }

    function callTextLimitChecker(event, $target) {
        let $targetParent = $target.parent();
        let $result = $targetParent.find('.result');

        if ($target.val().length > 100) {
            $result.val('문자 제한을 초과했습니다. ' + $target.val().length + '/100')
        } else {
            $result.val('');
        }
    }

    function callSumCalculator(event, $target) {
        let $targetParent = $target.parent();
        let $result = $targetParent.find('.result');

        let price1 = parseInt($targetParent.find('input#price1').val()) || 0;
        let price2 = parseInt($targetParent.find('input#price2').val()) || 0;
        let quantity = parseInt($targetParent.find('input#quantity').val()) || 1;
        let coupon = parseFloat($targetParent.find('input#coupon').val()) || 0;
        let $checkedInput = $targetParent.find('input.check:checked');


        let setPrice = (price1 + price2) * quantity * (1 - coupon);
        let checkedPrice = 0;
        $checkedInput.each((index, checked) => {
            checkedPrice += parseInt($(checked).val()) || 0;
        });

        let totalSum = setPrice + checkedPrice;

        $result.val(totalSum);
    }

    initialize();
});

// Simple From Submitter 
addEventListener('DOMContentLoaded', () => {
    // Initializer
    function initialize() {
        handleForms();
    }

    // Handle Forms
    function handleForms() {
        Array.from(document.forms).forEach((form) => {
            let passwordFields = Array.from(form).filter(input => input.type === 'password');

            // Attach input event listener for all fields
            form.addEventListener('input', (e) => handleInput(e.target));

            // Attach submit event listener
            form.addEventListener('submit', (e) => handleSubmit(e, passwordFields));

            // Attach password verifier if more than one password field exists
            if (passwordFields.length >= 2) {
                passwordFields[passwordFields.length - 1].addEventListener('input', () => verifyPasswords(passwordFields));
            }
        });
    }

    // Handle Input
    function handleInput(target) {
        validateInput(target);
    }

    // Handle Submit
    function handleSubmit(event, passwordFields) {
        event.preventDefault();

        let formIsValid = Array.from(event.target).every(input => validateInput(input)) &&
            verifyPasswords(passwordFields);

        if (formIsValid) {
            event.target.submit();
        }
    }

    // Verify Passwords
    function verifyPasswords(passwordFields) {
        if (!passwordFields.length) return false;

        let isValid = passwordFields.every(field => field.value === passwordFields[0].value);
        let resultElement = passwordFields[passwordFields.length - 1].parentNode.querySelector('.verify_result');

        if (resultElement) {
            resultElement.textContent = isValid ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.';
        }
        return isValid;
    }

    // Validate Input with Regular Expressions
    function validateInput(input) {
        if (!input.value) return false;

        let regExp = getRegExpForInput(input);
        let isValid = regExp && regExp.test(input.value);
        let resultElement = input.parentNode.querySelector('.reg_result');

        if (resultElement) {
            resultElement.textContent = isValid ? '검증성공' : '검증실패';
        }

        return isValid;
    }

    // Get Regular Expression for Input
    function getRegExpForInput(input) {
        const regExps = {
            text: {
                input_id: /^[a-zA-Z0-9`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]{6,32}$/,
                input_name: /^[가-힣]{2,32}$/,
                default: /^[a-zA-Z0-9`~!@#$%^&*()\-_=+\\|/.{}[\]'";:,?<>]+$/
            },
            password: /(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?])[a-zA-Z0-9`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]{12,32}$/,
            email: /^[a-zA-Z0-9%\-_+.]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/,
            date: /^\d{4,6}\-?\d{1,2}\-?\d{1,2}$/,
            number: /\d+/,
            tel: /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/
        };

        if (input.tagName === 'INPUT') {
            if (input.type === 'text') {
                return regExps[input.type][input.name] || regExps[input.type].default;
            }
            return regExps[input.type];
        } else if (input.tagName === 'TEXTAREA') {
            return /^[a-zA-Z0-9`~!@#$%^&*()\-_=+\\|/.{}[\]'";:,?<>\n\t]+$/;
        }
    }

    // Initialize
    initialize();
});
