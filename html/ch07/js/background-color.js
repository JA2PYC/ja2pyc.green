addEventListener('DOMContentLoaded', () => {
    function initialize() {
        eventHandler();
    }

    function eventHandler() {
        addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('button_background')) {
                callBackground(target, event);
            } else if (target.classList.contains('button_interval')) {
                callInterval(target, event);
            }
        });
    }

    function callBackground(target, event) {
        let targetParent = target.parentElement;
        let randomRGB = [];

        for (let i = 0; i < 3; i++) {
            let randomNumber = Math.floor(Math.random() * 256);

            randomRGB.push(randomNumber);
        }

        if (randomRGB.length === 3) {
            let styleRGB = `rgb(${randomRGB[0]}, ${randomRGB[1]}, ${randomRGB[2]})`;
            targetParent.style.backgroundColor = styleRGB;
        }
    }

    function callInterval(target, event) {
        let changeNumber = prompt('변경 횟수를 입력해 주세요.', '임의의 양수를 입력해주세요.');

        if (isNaN(changeNumber) || changeNumber <= 0) return alert('임의의 양수를 입력해주세요.')

        let targetParent = target.parentElement;
        let backgroundColor = targetParent.getElementsByClassName('background-color');
        let backgroundColorArr = Array.from(backgroundColor);

        backgroundColorArr.forEach((array) => {
            let changeCounter = 0;
            let intervalId = setInterval(() => {
                let randomRGB = [];
                for (let i = 0; i < 3; i++) {
                    let randomNumber = Math.floor(Math.random() * 256);
                    randomRGB.push(randomNumber);
                }

                if (randomRGB.length === 3) {
                    let styleRGB = `rgb(${randomRGB[0]}, ${randomRGB[1]}, ${randomRGB[2]})`;
                    array.style.backgroundColor = styleRGB;
                }
                changeCounter++;
                if (changeCounter >= changeNumber) {
                    clearInterval(intervalId);
                }
            }, 50);
        });

    }

    initialize();
});