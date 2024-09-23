addEventListener('DOMContentLoaded', () => {
    function initialize() {
        eventHandler();
    }

    function eventHandler() {
        addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('button_by_id')) {
                callGetElementById(target, event);
            } else if (target.classList.contains('button_by_tagName')) {
                callGetElementsByTagName(target, event);
            } else if (target.classList.contains('button_by_queryAll')) {
                callQuerySelectorAll(target, event);
            } else if (target.classList.contains('button_by_nodes')) {
                callChildNodes(target, event);
            }
        });
    }

    function callGetElementById(target, event) {
        let targetParent = target.parentElement;
        let result = targetParent.querySelector('.result');
        // Error (Use document)
        // let elementById = targetParent.getElementById('element_by_id');
        let elementById = document.getElementById('element_by_id');

        result.value = elementById.id;
    }

    function callGetElementsByTagName(target, event) {
        let targetParent = target.parentElement;
        let result = targetParent.querySelector('.result');
        let elementsByTagName = targetParent.getElementsByTagName('p');

        let elementsArr = Array.from(elementsByTagName)
        elementsArr.forEach((array) => {
            result.value += array.innerText + '\n';
        })
    }

    function callQuerySelectorAll(target, event) {
        let targetParent = target.parentElement;
        let result = targetParent.querySelector('.result');
        let pCssQueryAll = targetParent.querySelectorAll('p.css_queryAll');

        let elementsArr = Array.from(pCssQueryAll);
        elementsArr.forEach((array) => {
            result.value += array.innerText + '\n';
        })
    }

    function callChildNodes(target, event) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');

        result.value += 'parentNode : ' + targetParent.className + '\n';
        result.value += 'firstChild : ' + targetParent.firstChild.nodeName + '\n';
        result.value += 'lastChild : ' + targetParent.lastChild.nodeName + '\n';
        result.value += 'nextSibling : ' + targetParent.nextSibling + '\n';
        result.value += 'previousSibling : ' + targetParent.previousSibling + '\n';

        let childNodes = targetParent.childNodes;
        let childNodesArr = Array.from(childNodes);
        result.value += '--- childNodes nodeName Result ---' + '\n';
        childNodesArr.forEach((array) => {
            if (array.nodeName) {
                result.value += array.nodeName + '\n'
            }
        });
    }

    // Initialize
    initialize();
});