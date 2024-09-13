addEventListener('DOMContentLoaded', () => {
    let animalArr = new Array();
    let animalOrderFlag = false;

    function initialize() {
        eventHandler();
    }

    function eventHandler() {
        addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('button_animal_add')) {
                callAnimalAdd(target, event);
            } else if (target.classList.contains('button_animal_remove')) {
                callAnimalRemove(target, event);
            } else if (target.classList.contains('button_animal_order')) {
                callAnimalOrder(target, event);
            } else if (target.classList.contains('button_animal_reset')) {
                callAnimalReset(target, event);
            }
        });
    }

    function callAnimalAdd(target, event) {
        let targetParent = target.parentElement;
        let textarea_result = targetParent.querySelector('.textarea_result');
        let input_animal = targetParent.querySelector('.input_animal')

        let userInput = input_animal.value;
        if (!userInput) return '입력해주세요.';

        let userInputArr = userInput.split(',');

        userInputArr.forEach((array) => {
            if (array) {
                animalArr.push(array);
            }
        });

        textarea_result.value = animalArr;
    }

    function callAnimalRemove(target, event) {
        let targetParent = target.parentElement;
        let textarea_result = targetParent.querySelector('.textarea_result');
        let input_animal = targetParent.querySelector('.input_animal')

        let userInput = input_animal.value;

        if (userInput) {
            let userInputArr = userInput.split(',');

            userInputArr.forEach((array) => {
                if (animalArr.indexOf(array) >= 0) {
                    animalArr.splice(animalArr.indexOf(array), 1);
                }
            });
        } else {
            animalArr.pop();
        }
        
        textarea_result.value = animalArr;
    }

    function callAnimalOrder(target, event) {
        let targetParent = target.parentElement;
        let textarea_result = targetParent.querySelector('.textarea_result');

        if (animalOrderFlag === false) {
            animalArr.sort();
            animalOrderFlag = true;
        } else {
            animalArr.sort().reverse();
            animalOrderFlag = false;
        }
        textarea_result.value = animalArr
    }

    function callAnimalReset(target, event) {
        let targetParent = target.parentElement;
        let textarea_result = targetParent.querySelector('.textarea_result');

        animalArr = [];
        textarea_result.value = 'Clear';
        setTimeout(() => {
            textarea_result.value = '';
        }, 1000)
    }

    initialize();
});