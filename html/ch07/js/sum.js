function callSum(event) {
    let target = event.target;
    let targetParent = target.parentElement;
    let input_result = targetParent.getElementsByTagName('input');
    let input_resultArr = Array.from(input_result);
    let number = prompt('임의의 양수를 입력해주세요.', '임의의 양수를 입력해주세요.');

    if (isNaN(number)) alert('숫자를 입력해 주세요.');

    if (number <= 0) {
        alert('숫자가 0이거나 음수입니다.');
    } else {
        let result = 0;
        for (let i = 0; i < number; i++) {
            result += (parseInt(i) + 1);
        }
        input_resultArr.forEach((array) => {
            array.value = result;
        });
    }
}