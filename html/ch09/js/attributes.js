addEventListener('DOMContentLoaded', () => {
    function initialize() {
        eventHandler();
    }

    function eventHandler() {
        addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('button_innerHTML')) {
                callInnerHTML(target, event);
            } else if (target.classList.contains('button_src')) {
                callImgSrc(target, event);
            } else if (target.classList.contains('button_style')) {
                callAttStyle(target, event);
            }
        });
    }

    function callInnerHTML(target, event) {
        let targetParent = target.parentNode;
        let pInnerHTML = targetParent.querySelector('.p_innerHTML');
        let innerHTML = targetParent.querySelector('.input_innerHTML');

        pInnerHTML.innerHTML = innerHTML.value;
    }

    function callImgSrc(target, event) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');

        if (RegExp(/images\/sky\-2546570\_1280.jpg/).test(result.src)) {
            result.src = '/images/cat-7300029_1280.jpg';
        } else {
            result.src = '/images/sky-2546570_1280.jpg';
        }
    }

    let toggleMode;
    function callAttStyle(target, event) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');
        
        if (toggleMode == 'red') {
            result.style.color = 'white';
            result.style.backgroundColor = 'blue';
            toggleMode = 'blue';
        } else {
            result.style.color = 'black';
            result.style.backgroundColor = 'red';
            toggleMode = 'red';
        }
    }

    // Initialize
    initialize();
});