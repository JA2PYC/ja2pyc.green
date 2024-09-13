addEventListener('DOMContentLoaded', () => {
    let isCalculatingRemainDay = false;
    let calcRemainIntervalId;

    function initialize() {
        eventHandler();
    }

    function eventHandler() {
        addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('button_alert')) {
                callHello(target, event);
            } else if (target.classList.contains('button_date')) {
                callDate(target, event);
            } else if (target.classList.contains('button_diff_date')) {
                callDiffDate(target, event);
            } else if (target.classList.contains('button_remain_date')) {
                callRemainDate(target, event);
            } else if (target.classList.contains('button_calc_day')) {
                callDayCalculator(target, event);
            }
        });
    }

    function callHello(target, event) {
        let targetParent = target.parentElement;
        let input_alert = targetParent.querySelector('.input_alert');

        if (input_alert.value) {
            input_alert.value = '';
        } else {
            input_alert.value = '안냥';
            alert('안뇽');
        }
    }

    function callDate(target, event) {
        let targetParent = target.parentElement;
        let input_date = targetParent.querySelector('.input_date');
        let textarea_date = targetParent.querySelector('.textarea_date');

        let date = new Date();
        input_date.value = date;
        textarea_date.value += 'getTime : ' + date.getTime() + '\n';
        textarea_date.value += 'getFullYear : ' + date.getFullYear() + '\n';
        textarea_date.value += 'getMonth : ' + date.getMonth() + '\n';
        textarea_date.value += 'getDate : ' + date.getDate() + '\n';
        textarea_date.value += 'getDay : ' + date.getDay() + '\n';
        textarea_date.value += 'getHours : ' + date.getHours() + '\n';
        textarea_date.value += 'getMinutes : ' + date.getMinutes() + '\n';
        textarea_date.value += 'getSeconds : ' + date.getSeconds() + '\n';
        textarea_date.value += 'getMilliseconds : ' + date.getMilliseconds() + '\n';
        textarea_date.value += 'getUTCDate : ' + date.getUTCDate() + '\n';
        textarea_date.value += 'getUTCHours : ' + date.getUTCHours() + '\n';
        textarea_date.value += 'toLocaleString : ' + date.toLocaleString() + '\n';
        textarea_date.value += 'toLocaleDateString : ' + date.toLocaleDateString() + '\n';
        textarea_date.value += 'toLocaleTimeString : ' + date.toLocaleTimeString() + '\n';
    }

    function callDiffDate(target, event) {
        let targetParent = target.parentElement;
        let input_diff_date = targetParent.querySelector('.input_diff_date');
        let input_diff1 = targetParent.querySelector('.input_diff1');
        let input_diff2 = targetParent.querySelector('.input_diff2');

        if (input_diff_date && input_diff1 && input_diff2) {
            let diffValue1 = input_diff1.value;
            let diffValue2 = input_diff2.value;
            if (diffValue1 && diffValue2) {
                console.log(diffValue1)
                console.log(diffValue2)
                let date1 = new Date(diffValue1);
                let date2 = new Date(diffValue2);
                let unixDate1 = date1.getTime();
                let unixDate2 = date2.getTime();
                console.log(date1)
                console.log(date2)
                let dateDifference = 0;
                if (unixDate1 > unixDate2) {
                    dateDifference = unixDate1 - unixDate2;
                } else if (unixDate2 > unixDate1) {
                    dateDifference = unixDate2 - unixDate1;
                } else if (unixDate1 === unixDate2) {
                    dateDifference = '날짜가 같습니다.';
                } else {
                    dateDifference = '오류';
                }

                let calculatedDiff = Math.floor(dateDifference / 1000 / 60 / 60 / 24);
                input_diff_date.value = '날짜 차이 : ' + calculatedDiff + '일';
            } else {
                input_diff_date.value = '비교할 날짜를 입력해주세요.';
            }
        }
    }

    function callRemainDate(target, event) {
        let targetParent = target.parentElement;
        let input_result = targetParent.querySelector('.input_result');
        let input_remain_date = targetParent.querySelector('.input_remain_date');

        if (isCalculatingRemainDay) {
            clearInterval(calcRemainIntervalId);
            input_remain_date.value = '';
            input_result.value = 'Clear';
            isCalculatingRemainDay = false;
            setTimeout(() => {
                input_result.value = '';
            }, 1000)
            return;
        }
        isCalculatingRemainDay = true

        let targetDate = input_remain_date.value;

        if (!targetDate) {
            let targetYear = new Date().getFullYear();
            if (new Date().getMonth() >= 11 && new Date().getDate() >= 25) {
                targetYear++;
            }
            input_remain_date.value = targetYear + '-12-25T00:00';
            targetDate = new Date('December 25 ' + targetYear);
        } else {
            targetDate = new Date(targetDate);
        }

        calcRemainIntervalId = setInterval(() => {
            let result = remainCalculator(targetDate);
            if (result === false) {
                input_result.value = '목표 시간이 지났습니다.';
                clearInterval(calcRemainIntervalId);
                return;
            }
            input_result.value = '까지 남은 시간 : ' + result;
        }, 1000);
    }

    function remainCalculator(targetDate) {
        let currentDate = new Date();

        if (targetDate - currentDate <= 0) return false;

        let diff = targetDate - currentDate;
        let diffDate = '';
        diffDate += Math.floor(diff / (1000 * 60 * 60 * 24)) > 0 ? Math.floor(diff / (1000 * 60 * 60 * 24)) + '일 ' : '';
        let emptyHour = !diffDate ? '' : '0시간'
        diffDate += Math.floor((diff / 1000 / 60 / 60) % 24) > 0 ? Math.floor((diff / 1000 / 60 / 60) % 24) + '시간 ' : emptyHour;
        let emptyMinute = !diffDate ? '' : '0분'
        diffDate += Math.floor((diff / 1000 / 60) % 60) > 0 ? Math.floor((diff / 1000 / 60) % 60) + '분 ' : emptyMinute;
        diffDate += Math.floor((diff / 1000) % 60) > 0 ? Math.floor((diff / 1000) % 60) + '초' : '';
        return diffDate;
    }

    function callDayCalculator(target, event) {
        let targetParent = target.parentElement;
        let input_result = targetParent.querySelector('.input_result');
        let input_calc_day = targetParent.querySelector('.input_calc_day');

        let userInput = input_calc_day.value;
        if (!userInput) return input_result.value = '날짜를 입력해주세요.';

        let targetDay = new Date(userInput);
        let resultDay = targetDay.getDay();
        let result = '';
        switch (resultDay) {
            case 0: result = '일'
                break;
            case 1: result = '월'
                break;
            case 2: result = '화'
                break;
            case 3: result = '수'
                break;
            case 4: result = '목'
                break;
            case 5: result = '금'
                break;
            case 6: result = '토'
                break;
        }

        if (result) {
            input_result.value = '일은 ' + result + '요일 입니다.';
        } else {
            input_result.value = '오류';
        }
    }

    // Initialize
    initialize();
});