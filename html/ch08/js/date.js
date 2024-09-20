addEventListener('DOMContentLoaded', () => {
    function initialize() {
        eventHandler();
    }

    function eventHandler() {
        addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('button_dateJuly')) {
                callDateJuly(target, event);
            } else if (target.classList.contains('button_dateExpire')) {
                callDateExpire(target, event);
            } else if (target.classList.contains('button_passTime')) {
                callPassTimeStop(target, event);
            } else if (target.classList.contains('button_dateGetMonth')) {
                callDateGetMonth(target, event);
            }
        });
    }

    function callDateJuly(target, event) {
        let targetParent = target.parentElement;
        let inputResult = targetParent.querySelector('.input_result');

        let dateJuly = new Date(2024, 6, 10);
        inputResult.value = (dateJuly.getMonth() + 1) + '월 ' + dateJuly.getDate() + '일';
    }

    function callDateExpire(target, event) {
        let targetParent = target.parentElement;
        let inputResult = targetParent.querySelector('.input_result');
        let inputDateFrom = targetParent.querySelector('.input_dateFrom');

        let userInput = inputDateFrom.value;
        if (userInput) {
            let userDate = new Date(userInput)
            if (!isNaN(userDate)) {
                let currentDate = new Date();
                let dateDiff = currentDate - userDate;
                if (dateDiff > 0) {
                    let diffDate = new Date(dateDiff)
                    let resultDate = diffDate / (1000 * 60 * 60 * 24);
                    if (resultDate < 30) {
                        result = '교환이 가능합니다. ' + Math.floor(resultDate) + '일이 지났습니다.';
                    } else {
                        result = '교환이 불가능합니다. ' + Math.floor(resultDate) + '일이 지났습니다.';
                    }
                } else {
                    result = '구매한 날짜를 입력해주세요.';
                }
            }
        } else {
            result = '날짜를 입력해주세요.';
        }

        inputResult.value = result;
    }

    function callPassTimeStop(target, event) {
        let targetParent = target.parentElement;
        let inputResult = targetParent.querySelector('.input_result');
        let inputPassTarget = targetParent.querySelector('.input_passTarget');

        let userInput = inputPassTarget.value;
        let targetNumber = parseInt(userInput);

        if (isNaN(targetNumber)) return inputResult.value = '숫자를 입력해주세요.';

        let startTime = new Date();
        let endTime;
        let sum = 0;
        for (let i = 0; i < targetNumber; i++) {
            sum += (i + 1);

            if ((i + 1) >= targetNumber) {
                console.log(i+ 1);
                endTime = new Date();
            }
        }

        console.log(sum)
        if (endTime) {
            let diffTime = endTime - startTime;
            result = parseFloat(diffTime/1000) + '초, 합계 : ' + sum;
        } else {
            result = '시간 측정에 실패했습니다.'
        }

        inputResult.value = result;
    }

    function callDateGetMonth(target, event) {
        let targetParent = target.parentElement;
        let inputResult = targetParent.querySelector('.input_result');
        let inputdateGetMonth = targetParent.querySelector('.input_dateGetMonth');

        let userInput = inputdateGetMonth.value;
        if (!userInput) return inputResult.value = '날짜를 입력해주세요.';

        let inputDate = new Date(userInput);
        if (isNaN(inputDate)) return inputResult.value = '날짜를 입력해주세요.'
        
        let monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let monthValue = inputDate.getMonth();
        inputResult.value = '현재 ' + monthArr[monthValue] + ' 입니다.'
    }

    initialize();
});