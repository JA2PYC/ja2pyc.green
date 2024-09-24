addEventListener('DOMContentLoaded', () => {
    function initialize() {

        eventHandler();
    }

    function eventHandler() {
        addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('button_eventObject')) {
                callEventObject(target, event);
            } else if (target.classList.contains('button_eval')) {
                callCalcEval(target, event);
            }
        });

        addEventListener('mouseover', (event) => {
            let target = event.target;

            if (target.classList.contains('p_mouseOver')) {
                callMouseOverEvent(target, event);
            }
        });

        addEventListener('mouseout', (event) => {
            let target = event.target;

            if (target.classList.contains('p_mouseOver')) {
                callMouseOutEvent(target, event);
            }
        });

        let bubbleCapture = document.querySelector('.bubbleCapture');
        let button_useBubble = bubbleCapture.querySelector('.button_useBubble');
        let button_useCapture = bubbleCapture.querySelector('.button_useCapture');
        let bubbleCaptureResult = bubbleCapture.querySelector('.result');

        bubbleCapture.addEventListener('click', (event) => {
            let target = event.target;
            bubbleCaptureResult.value += target.classList;
            alert('Bubble')
        });
        bubbleCapture.addEventListener('click', (event) => {
            let target = event.target;
            bubbleCaptureResult.value += target.classList;
            alert('Capture')
        }, true);

        button_useBubble.addEventListener('click', (event) => {
            let target = event.target;
            bubbleCaptureResult.value += target.classList;
            alert('useBubble')
        });

        button_useCapture.addEventListener('click', (event) => {
            let target = event.target;
            bubbleCaptureResult.value += target.classList;
            alert('useCapture')
        }, true);

        addEventListener('mousedown', (event) => {
            let target = event.target;

            if (target.classList.contains('button_mouseDownUp')) {
                callMouseDownUp(target, event);
            }
        });

        addEventListener('mouseup', (event) => {
            let target = event.target;

            if (target.classList.contains('button_mouseDownUp')) {
                callMouseDownUp(target, event);
            }
        });

        addEventListener('wheel', (event) => {
            let target = event.target;

            if (target.classList.contains('p_wheel')) {
                callWheelEvent(target, event);
            }
        });

        let mouseEnterLeave = document.querySelector('.mouseEnterLeave');
        let button_mouseENterLeaver = mouseEnterLeave.querySelector('.button_mouseEnterLeave');

        // Do not work in global
        button_mouseENterLeaver.addEventListener('mouseenter', (event) => {
            let target = event.target;

            if (target.classList.contains('button_mouseEnterLeave')) {
                callMouseEnterLeaver(target, event);
            }
        });

        button_mouseENterLeaver.addEventListener('mouseleave', (event) => {
            let target = event.target;

            if (target.classList.contains('button_mouseEnterLeave')) {
                callMouseEnterLeaver(target, event);
            }
        });

        addEventListener('mousemove', (event) => {
            let target = event.target;

            if (target.classList && target.classList.contains('img_mousemove')) {
                callMousemoveEvent(target, event);
            }
        });

        addEventListener('change', (event) => {
            let target = event.target;

            if (target.classList && target.classList.contains('input_change')) {
                callChangeEvent(target, event);
            }
        })
    }

    function callMouseOverEvent(target, event) {
        target.style.backgroundColor = 'red';
    }

    function callMouseOutEvent(target, event) {
        target.style.backgroundColor = 'blue';
    }

    function callEventObject(target, event) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');

        result.value = '';
        let eventX = event.clientX;
        let eventY = event.clientY;
        let eventType = event.type;

        result.value += 'clientX : ' + eventX + ', ';
        result.value += 'clientY : ' + eventY + ', ';
        result.value += 'Type : ' + eventType;
    }

    function callCalcEval(target, event) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');
        let inputEval = targetParent.querySelector('.input_eval');

        if (!inputEval.value) return result.value = '수식을 입력해주세요.';

        let evalAnswer = eval(inputEval.value);

        result.value = evalAnswer;
    }

    function callMouseDownUp(target, event) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');

        if (event.type === 'mousedown') {
            result.style.color = 'red';
        } else if (event.type === 'mouseup') {
            result.style.color = 'blue';
        }
    }

    let fontSizeValue = 16;
    function callWheelEvent(target, event) {
        if (event.wheelDelta > 0) {
            fontSizeValue++;
        } else {
            fontSizeValue--
        }

        target.style.fontSize = fontSizeValue + 'px';
    }

    let enterCounter = 0;
    function callMouseEnterLeaver(target, event) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');

        if (event.type === 'mouseenter') {
            enterCounter++;
            result.value = 'enterCounter : ' + enterCounter;
        } else if (event.type === 'mouseleave') {
            result.style.backgroundColor = 'red';
        }
    }

    function callMousemoveEvent(target, event) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');

        result.value = 'clientX : ' + event.clientX + ', clientY : ' + event.clientY;
    }

    function callChangeEvent(target, event) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');

        result.value = String(target.value).toUpperCase();
    }

    initialize();
});

function callLoadEvent(event) {
    let target = event.target;
    let targetParent = target.parentNode;
    let result = targetParent.querySelector('.result');

    result.value = 'clientWidth : ' + target.clientWidth;
}
