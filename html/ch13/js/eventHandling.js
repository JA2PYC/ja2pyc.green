addEventListener('DOMContentLoaded', () => {
    function initialize() {
        eventHandler()
    }

    function eventHandler() {
        addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('button_plus') || target.classList.contains('button_minus')) {
                callQuantityCounter(event, target);
            } else if (target.classList.contains('button_hobbyChecker')) {
                callHobbyChecker(event, target);
            } else if (target.classList.contains('button_calc_total')) {
                callTotalPriceCalculator(event, target);
            }
        });

        let text_limit = document.querySelector('.text_limit');
        if (text_limit) {
            let textarea_limit = text_limit.querySelector('textarea');
            textarea_limit.addEventListener('input', (changeEvent) => callTextlimitChecker(changeEvent));
        }

        let formsAll = document.forms;
        Array.from(formsAll).forEach((form) => {
            let inputAll = form.querySelectorAll('input');
            Array.from(inputAll).forEach((input) => {
                if (input.disabled === false) {
                    console.log(input)
                    // input.addEventListener('input', callRegExpChecker(input));
                }
            })

            form.addEventListener('submit', (submitEvent) => {
                submitEvent.preventDefault();

                let isValidArr = [];
                Array.from(submitEvent.target).forEach((array) => {
                    if (array.tagName === 'INPUT' && array.disabled === false) {
                        isValidArr.push(callRegExpChecker(array));
                    }
                });

                let validResult = isValidArr.every((validValue) => {
                    return validValue;
                });

                if (validResult) {
                    submitEvent.target.submit();
                }
            });
        })
    }

    function callQuantityCounter(event, target) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');

        let quantityValue = parseInt(result.value);
        if (target.classList.contains('button_plus')) {
            quantityValue += 1;
        } else {
            quantityValue -= 1;
            if (quantityValue < 1) quantityValue = 1;
        }

        result.value = quantityValue;
    }

    function callHobbyChecker(event, target) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');

        let inputAll = targetParent.querySelectorAll('.hobby');

        let hobbyResult = '';
        inputAll.forEach((array) => {
            if (array.checked) {
                hobbyResult += array.value + ', ';
            }
        })

        hobbyResult = String(hobbyResult).trim().toUpperCase()
        if (hobbyResult.endsWith(',')) hobbyResult = hobbyResult.slice(0, -1);
        result.value = hobbyResult;
    }

    function callTextlimitChecker(event) {
        let target = event.target;
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');

        let textLenght = target.value.length;
        if (textLenght > 100) {
            textCheckResult = '글자수 : ' + textLenght + '/100 // 글자수 초과ㄹㅇㄴ';
        } else {
            textCheckResult = '글자수 : ' + textLenght + '/100';
        }

        result.value = textCheckResult
    }

    function callTotalPriceCalculator(event, target) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');
        let priceAll = targetParent.querySelectorAll('.price');
        let quantity = targetParent.querySelector('.quantity');
        let coupon = targetParent.querySelector('.coupon');
        let checkAll = targetParent.querySelectorAll('.check');

        let priceSum = 0;
        priceAll.forEach((array) => {
            priceSum += parseInt(array.value);
        });

        let checkedPrice = 0;
        checkAll.forEach((array) => {
            if (array.checked) {
                checkedPrice += parseInt(array.value);
            }
        });

        let totalPriceValue = (parseInt(priceSum) * parseInt(quantity.value) * (1 - parseFloat(coupon.value)) + parseInt(checkedPrice));
        result.value = '총 가격 : ' + totalPriceValue;
    }

    function callFormValidator(event, target) {

    }

    function callRegExpChecker(target) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');

        if (!target.value) {
            result.value = '검증 대상이 없습니다.';
            return false;
        }

        let regExp;
        if (target.type === 'text') {
            if (target.name === 'input_id') {
                regExp = /^[a-zA-Z]+[a-zA-Z0-9~!@#$%^&*()\-_=+]{5,25}$/;
            } else {
                regExp = /^[a-zA-Z]+$/;
            }
        } else if (target.type === 'password') {
            regExp = /(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()\-_+=])[a-zA-Z0-9~!@#$%^&*()\-_=+]{12,32}$/;
        }

        let regResult = regExp.test(target.value);
        if (regResult) {
            result.value = '검증통과';
        } else {
            result.value = '검증실패';
        }

        return regResult;
    }

    initialize();
});