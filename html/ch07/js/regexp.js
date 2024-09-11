addEventListener('DOMContentLoaded', function () {
    // Initializer
    function initialize() {
        callReg1();
        callReg2();
        callReg3();
        callReg4();
    }

    let regexp1 = /abc/;
    let regexp2 = new RegExp('abc');
    let testString1 = 'abcdef';
    let testString2 = 'abc123';

    function callReg1() {
        let input_regexp1 = document.getElementsByClassName('input_regexp1');
        let input_regexp1Arr = Array.from(input_regexp1);

        input_regexp1Arr.forEach((array) => {
            array.value = regexp1.test(testString1);
        });
        console.log(regexp1.test(testString1));
    }

    function callReg2() {
        let input_regexp2 = document.getElementsByClassName('input_regexp2');
        let input_regexp2Arr = Array.from(input_regexp2);

        input_regexp2Arr.forEach((array) => {
            array.value = testString1.match(regexp1);
        });
        console.log(testString1.match(regexp1));
    }

    function callReg3() {
        let input_regexp3 = document.getElementsByClassName('input_regexp3');
        let input_regexp3Arr = Array.from(input_regexp3);

        input_regexp3Arr.forEach((array) => {
            array.value = testString2.replace(/\d/g, '*');
        });
        console.log(testString2.replace(regexp1, '*'));
    }

    function callReg4() {
        let input_regexp4 = document.getElementsByClassName('input_regexp4');
        let input_regexp4Arr = Array.from(input_regexp4);

        input_regexp4Arr.forEach((array) => {
            array.value = testString2.search(/\d/);
        });
    }

    // Initialize
    initialize();
});