addEventListener('DOMContentLoaded', () => {
    function initialize() {
        eventHandler();
    }

    function eventHandler() {
        addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('button_dice')) {
                callRollDice(target, event);
            } else if (target.classList.contains('button_new_mine')) {
                createNewMine(target, event);
            } else if (target.classList.contains('mine_box')) {
                callMineChecker(target, event);
            }
        });
    }

    function callRollDice(target, event) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');
        let diceNumber = Math.ceil(Math.random() * 6);
        result.textContent = diceNumber;
    }

    let mineArr = [];
    function createNewMine(target, event) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');

        let userInput = prompt('게임의 크기를 입력하세요.', '숫자를 입력하세요.');
        result.style.gridTemplateColumns = '';
        result.style.gridTemplateRows = '';

        if (isNaN(userInput)) return result.textContent = '숫자를 입력하세요.';

        let gridSize = Math.min(parseInt(userInput), 100);
        let mineProbability = 0.1;
        mineArr = [];
        result.innerHTML = '';
        result.style.gridTemplateColumns = `repeat(${gridSize}, 20px)`;
        result.style.gridTemplateRows = `repeat(${gridSize}, 20px)`;

        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                let mineBox = document.createElement('div');
                mineBox.className = 'mine_box';
                mineBox.setAttribute('box_number', i + ',' + j);
                let isMine = false;
                if (Math.round(Math.random() * 100) > 90) {
                    mineArr.push(`${i},${j}`);
                    mineBox.setAttribute('test_bomb', 'bomb')
                    isMine = true;
                }
                result.appendChild(mineBox);
            }
        }

        if (mineArr.length === 0) {
            let i = Math.floor(Math.random() * gridSize);
            let j = Math.floor(Math.random() * gridSize);
            mineArr.push(`${i},${j}`);
        }
        console.log(mineArr)
    }

    function callMineChecker(target, event) {
        let boxNumber = target.getAttribute('box_number');

        if (mineArr.indexOf(String(boxNumber)) < 0) {
            target.classList.add('box_safe');
            console.log('No')
        } else {
            target.classList.add('box_bomb');
            console.log('Yes')
        }
    }
    initialize();
});