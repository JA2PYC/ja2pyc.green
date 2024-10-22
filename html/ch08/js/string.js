addEventListener('DOMContentLoaded', () => {
    function initialize() {
        eventHandler();
    }

    function eventHandler() {
        addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('button_str_method')) {
                callStrMethod(target, event);
            } else if (target.classList.contains('button_str_number')) {
                callStrNumber(target, event);
            } else if (target.classList.contains('button_strCap')) {
                callStrCap(target, event);
            } else if (target.classList.contains('button_strCheck')) {
                callStrCheck(target, event);
            } else if (target.classList.contains('button_strMovie')) {
                callStrMovie(target, event);
            } else if (target.classList.contains('button_strFruit')) {
                callRandomFruit(target, event);
            } else if (target.classList.contains('button_strFind')) {
                callStrFind(target, event);
            } else if (target.classList.contains('button_newUser')) {
                callNewUser(target, event);
            }
        });
    }

    function callStrMethod(target, event) {
        let targetParent = target.parentElement;
        let textarea_result = targetParent.querySelector('.textarea_result');
        let input_str_method = targetParent.querySelector('.input_str_method');
        let userInput = input_str_method.value;
        if (!userInput) {
            userInput = 'JAVA!SCRIPT!!?'
        }

        let targetStr = new String(userInput);
        let regexp = /\!\?/;

        textarea_result.value = '';
        textarea_result.value += 'String : ' + targetStr + '\n';
        textarea_result.value += 'Target : ' + targetStr[targetStr.length - 1] + '\n';
        textarea_result.value += 'charAt(targetStr.length -1) : ' + targetStr.charAt(targetStr.length - 1) + '\n';
        textarea_result.value += 'indexOf : ' + targetStr.indexOf(targetStr.charAt(targetStr.length - 1), 0) + '\n';
        textarea_result.value += 'replace(Target, "!") : ' + targetStr.replace(targetStr.charAt(targetStr.length - 1), '!') + '\n';
        textarea_result.value += 'match(regexp) : ' + targetStr.match(regexp) + '\n';
        textarea_result.value += 'slice(1, 5) : ' + targetStr.slice(1, 5) + '\n';
        textarea_result.value += 'split("!", 4) : ' + targetStr.split('!', 4) + '\n';
        textarea_result.value += 'substring(5, 11) : ' + targetStr.substring(5, 11) + '\n';
        textarea_result.value += 'toUpperCase() : ' + targetStr.toUpperCase() + '\n';
        textarea_result.value += 'toLowerCase() : ' + targetStr.toLowerCase() + '\n';
        textarea_result.value += 'valueOf() : ' + targetStr.valueOf() + '\n';
        textarea_result.value += 'new Date().valueOf() : ' + new Date().valueOf() + '\n';
    }

    function callStrNumber(target, event) {
        let targetParent = target.parentElement;
        let input_result = targetParent.querySelector('.input_result');
        let input_number1 = targetParent.querySelector('.input_number1');
        let input_number2 = targetParent.querySelector('.input_number2');

        let valueNumber1 = input_number1.value;
        let valueNumber2 = input_number2.value;

        let totalValue = valueNumber1 + valueNumber2;

        console.log(totalValue.length)
        console.log(totalValue.charAt(8))
        console.log(totalValue[8])
        if (totalValue.length === 9) {
            if (totalValue[8] === '1' || totalValue[8] === '3') {
                input_result.value = '남성 입니다.';
            } else if (totalValue[8] === '2' || totalValue[8] === '4') {
                input_result.value = '여성 입니다.';
            } else {
                input_result.value = '오류';
            }
        } else {
            input_result.value = '정확한 번호를 입력해주세요.';
        }
    }

    function callStrCap(target, event) {
        let targetParent = target.parentElement;
        let inputResult = targetParent.querySelector('.input_result');
        let inputStrCap = targetParent.querySelector('.input_strCap');

        let userInput = inputStrCap.value;
        if (!isNaN(userInput)) return inputResult.value = '문자를 입력해주세요.';

        let targetString = String(userInput);
        targetString = targetString[0].toUpperCase() + targetString.slice(1);
        inputResult.value = targetString;
    }

    function callStrCheck(target, event) {
        let targetParent = target.parentElement;
        let inputResult = targetParent.querySelector('.input_result');
        let inputStrCheck = targetParent.querySelector('.input_strCheck');

        let userInput = inputStrCheck.value;
        let targetString = String(userInput);
        let filterString = [/XXX/i, /바보/, /멍청이/];
        let testResult = false;

        for (let i in filterString) {
            testResult = filterString[i].test(targetString);
            if (testResult === true) {
                result = '필터링 문구를 검출하였습니다. ' + filterString[i];
                break;
            }
        }

        if (testResult === false) {
            result = '검사를 통과했습니다.';
        }

        inputResult.value = result;
    }

    function callStrMovie(target, event) {
        let targetParent = target.parentElement;
        let inputResult = targetParent.querySelector('.input_result');
        let inputMovie = targetParent.querySelector('.input_movie');

        let userInput = inputMovie.value;
        if (!userInput) return inputResult.value = '영화 제목을 입력해주세요.';

        let targetMovie = String(userInput);
        let movieArr = ['터미네이터', '다크나이트', '조커'];

        movieArr.push(targetMovie);
        movieArr[movieArr.length - 2] = '스파이더맨';

        let result = '';
        movieArr.forEach((array) => {
            result += array + ', ';
        });

        result = result.trim();
        if (result.endsWith(',')) result = result.slice(0, -1);

        inputResult.value = result;
    }

    function callRandomFruit(target, evnet) {
        let targetParent = target.parentElement;
        let inputResult = targetParent.querySelector('.input_result');
        let inputStrFruit = targetParent.querySelector('.input_strFruit');

        let fruitArr = ['사과', '배', '귤', '복숭아', '포도'];

        let userInput = inputStrFruit.value;
        if (userInput) fruitArr.push(String(userInput));

        let randomNumber = Math.round(Math.random() * fruitArr.length);

        inputResult.value = fruitArr[randomNumber];
    }

    function callStrFind(target, event) {
        let targetParent = target.parentElement;
        let inputResult = targetParent.querySelector('.input_result');
        let inputStrFind = targetParent.querySelector('.input_strFind');

        let userInput = inputStrFind.value;
        if (!userInput) return inputResult.value = '찾을 값을 입력하세요.';

        let targetStr = String(userInput);

        let stringArr = ['닭가슴살', '파스타', '샐러드', '돈까스'];

        let result = '결과가 없습니다.';
        stringArr.forEach((array, index) => {
            if (array === targetStr) {
                result = '찾았습니다. ' + array + ' Index : ' + index;
            }
        })

        inputResult.value = result;
    }

    function UserObject (newId, newName, newAge) {
        this.userId = newId;
        this.userName = newName;
        this.userAge = newAge;
        this.userInfo = function () {
            return [this.userId, this.userName, this.userAge];
        }
    }

    function callNewUser(target, event) {
        let targetParent = target.parentElement;
        let inputResult = targetParent.querySelector('.input_result');
        let inputNewUser = targetParent.querySelector('.input_newUser');

        let userInput = inputNewUser.value;
        if (!userInput) return inputResult.value = '데이터를 입력해주세요.';

        let inputArr = userInput.split(',');
        if (inputArr.length !== 3) return inputResult.value = '데이터를 3개 입력해주세요.'

        let newUser = new UserObject(inputArr[0], inputArr[1], inputArr[2]);

        let userInfoArr = newUser.userInfo();

        inputResult.value = 'ID : ' + userInfoArr[0] + ', 이름 : ' + userInfoArr[1] + ', 나이 : ' + userInfoArr[2];
    }

    initialize();
});