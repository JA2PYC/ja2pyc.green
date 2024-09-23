addEventListener('DOMContentLoaded', () => {
    function initialize() {
        eventHandler();
    }

    function eventHandler() {
        addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('button_input_value')) {
                callAttributesValue(target, event);
            } else if (target.classList.contains('button_dom_form')) {
                callDocumentForms(target, event);
            } else if (target.classList.contains('button_checkbox')) {
                callCheckboxChecked(target, event);
            } else if (target.classList.contains('button_radio')) {
                callRadioChecked(target, event);
            } else if (target.classList.contains('button_select')) {
                callSelectValue(target, event);
            } else if (target.classList.contains('button_radius')) {
                callCalcRadius(target, event);
            }
        });
    }

    function callAttributesValue(target, event) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');
        let inputValue = targetParent.querySelector('.input_value');
        result.value = inputValue.value;
    }

    function callDocumentForms(target, event) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');

        let formsArr = Array.from(document.forms);
        formsArr.forEach((array) => {
            result.value += array.classList + ' : ' + array + '\n';
            Array.from(array).forEach((data) => {
                result.value += data.value + '\n';
            })
        })

        let formByName = document.form_name;
        result.value += 'formByName : ' + formByName + '\n';
        Array.from(formByName).forEach((data) => {
            result.value += data.value + '\n';
        })
    }

    function callCheckboxChecked(target, event) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');
        let inputCheckbox = targetParent.querySelector('.input_checkbox');

        result.value = inputCheckbox.checked;
    }

    function callRadioChecked(target, event) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');
        let inputRadio = document.getElementsByName('input_radio');

        Array.from(inputRadio).forEach((array) => {
            if (array.checked) {
                result.value = array.value;
            }
        });
    }

    function callSelectValue(target, event) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');
        let selectLang = targetParent.querySelector('.select_lang');

        result.value = selectLang[selectLang.selectedIndex].value
    }

    function callCalcRadius(target, event) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');
        let inputShape = document.getElementsByName('input_shape');
        let inputRadius = targetParent.querySelector('.input_radius');

        let radiusValue = inputRadius.value;
        if (!radiusValue) return result.value = 'Radius 값을 입력해주세요.';
        let shapeValue;
        let resultValue;
        Array.from(inputShape).forEach((array) => {
        if (array.checked) {
                shapeValue = array.value;
            }
        });

        if (shapeValue === 'area') {
            resultValue = Math.PI * Math.pow(radiusValue, 2);
        } else if (shapeValue === 'volume') {
            resultValue = (4.0 / 3.0) * Math.PI * Math.pow(radiusValue, 3);
        } else {
            resultValue = '잘못된 Shape 값.';
        }

        result.value = resultValue;
    }

    initialize();
});