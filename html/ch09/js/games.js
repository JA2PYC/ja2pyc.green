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
            } else if (target.classList.contains('button_randomImage')) {
                callRandomImage(target, event);
            } else if (target.classList.contains('button_imageLeft') || target.classList.contains('button_imageRight')) {
                callImageAligner(target, event);
            } else if (target.classList.contains('button_addCartList')) {
                callAddShoppingCart(target, event);
            } else if (target.classList.contains('button_removeList')) {
                callRemoveShoppingList(target, event);
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
        isGameOver = false;

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

    let isGameOver = false;
    function callMineChecker(target, event) {
        let boxNumber = target.getAttribute('box_number');

        if (isGameOver) return;
        if (mineArr.indexOf(String(boxNumber)) < 0) {
            target.classList.add('box_safe');
        } else {
            target.classList.add('box_bomb');
            isGameOver = true;
            alert('Game Over');
        }
    }

    function callRandomImage(target, event) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');

        let imageBasePath = '/images/';
        let imagesArr = ['cat-7300029_1280.jpg', 'sky-2546570_1280.jpg', 'rabbit-5736113_1280.jpg'];
        let randomNumber = Math.round(Math.random() * 2);
        let randomImage = imageBasePath + imagesArr[randomNumber]

        result.title = randomImage;
        result.alt = randomImage;
        result.src = randomImage;
    }

    function callImageAligner(target, event) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');
        let resultDiv = result.parentNode;

        resultDiv.style.display = 'flex';
        if (target.classList.contains('button_imageLeft')) {
            resultDiv.style.justifyContent = 'flex-start'
        } else {
            resultDiv.style.justifyContent = 'flex-end'
        }
    }

    function callAddShoppingCart(target, event) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');
        let inputList = targetParent.querySelector('.input_list');

        if (!inputList.value) return inputList.value = '사고싶은 물건을 입력해주세요.';

        let userInput = inputList.value;

        let shoppingList = document.createElement('div');
        shoppingList.className = 'shoppin_list';
        shoppingList.textContent = userInput;
        result.appendChild(shoppingList);

        let listRemove = document.createElement('button');
        listRemove.className = 'button_removeList';
        listRemove.style.width = '1rem';
        listRemove.style.height = '1rem';
        listRemove.style.backgroundColor = 'transparent';
        listRemove.style.backgroundImage = 'url(/images/free-icon-font-cross-3917189.svg)';
        listRemove.style.backgroundSize = 'contain';
        listRemove.style.border = 'none';
        listRemove.style.margin = '0 0.5rem';
        shoppingList.appendChild(listRemove);
    }

    function callRemoveShoppingList(target, event) {
        let targetParent = target.parentNode;
        targetParent.remove();
    }
    initialize();
});