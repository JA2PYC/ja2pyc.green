addEventListener('DOMContentLoaded', () => {
    function initialize() {
        eventHandler();
    }

    function eventHandler() {
        addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('button_array_method')) {
                callArrayMethod(target, event);
            } else if (target.classList.contains('button_array_fruit')) {
                callArrayFruit(target, event);
            }
        });
    }

    function callArrayMethod(target, event) {
        let targetParent = target.parentElement;
        let textarea_result = targetParent.querySelector('.textarea_result');
        let input_array_method = targetParent.querySelector('.input_array_method');

        let userInput = input_array_method.value;

        if (!userInput) userInput = 'HTML, CSS, JAVASCRIPT';
        textarea_result.value = '';

        let inputArray = userInput.split(',');
        let sanitizedArray = new Array();
        inputArray.forEach((array, index) => {
            if (array) {
                sanitizedArray[index] = array.trim();
            }
        });

        let dataSample = new Array('C', 'C++', 'C#', 'Python', 'PHP');

        textarea_result.value += 'sanitizedArray : ' + sanitizedArray + '\n';
        textarea_result.value += 'dataSample : ' + dataSample + '\n';
        textarea_result.value += 'concat(dataSample) : ' + sanitizedArray.concat(dataSample) + '\n';
        textarea_result.value += 'join(dataSample) : ' + sanitizedArray.join(dataSample) + '\n';
        textarea_result.value += 'dataSample.indexOf(PHP) : ' + dataSample.indexOf('PHP') + '\n';
        textarea_result.value += 'push("JAVA") : ' + sanitizedArray.push("JAVA") + '\n';
        textarea_result.value += 'After push() : ' + sanitizedArray + '\n';
        textarea_result.value += 'pop() : ' + sanitizedArray.pop() + '\n';
        textarea_result.value += 'After pop() : ' + sanitizedArray + '\n';
        textarea_result.value += 'shift() : ' + sanitizedArray.shift() + '\n';
        textarea_result.value += 'After shift() : ' + sanitizedArray + '\n';
        textarea_result.value += 'unshif("Ruby") : ' + sanitizedArray.unshift('Ruby') + '\n';
        textarea_result.value += 'After unshift() : ' + sanitizedArray + '\n';
        textarea_result.value += 'sort() : ' + sanitizedArray.sort() + '\n';
        textarea_result.value += 'After sort() : ' + sanitizedArray + '\n';
        textarea_result.value += 'sort() : ' + sanitizedArray.sort() + '\n';
        textarea_result.value += 'sort(return a - b;) : ' + sanitizedArray.sort(function (a, b) { return a - b; }) + '\n';
        textarea_result.value += 'slice(1) : ' + sanitizedArray.slice(1) + '\n';
        textarea_result.value += 'filter(function) : ' + sanitizedArray.filter(function (value, index) { return value.length > 4 }) + '\n';

        console.log(sanitizedArray);
        console.log(dataSample);
    }

    function callArrayFruit(target, event) {
        let targetParent = target.parentElement;
        let input_result = targetParent.querySelector('.input_result');
        let input_array_fruit = targetParent.querySelector('.input_array_fruit');

        let userInput = input_array_fruit.value

        if (!userInput) return input_result.value = '입력해주세요.';
        input_result.value = '';

        let fruitArray = userInput.split(',')
        let myFruit = new Array();
        fruitArray.forEach((array, index) => {
            myFruit[index] = array.trim();
        });
        myFruit[5] = '복숭아';

        myFruit.forEach((array, index) => {
            if (index === myFruit.length - 1) {
                input_result.value += index + '번 : ' + array;
            } else {
                input_result.value += index + '번 : ' + array + ', ';
            }
        });
    }

    initialize();
});