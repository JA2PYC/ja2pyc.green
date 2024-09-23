addEventListener('DOMContentLoaded', () => {
    function initialize() {
        eventHandler();
    }

    function eventHandler() {
        addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('button_children')) {
                callChildren(target, event);
            } else if (target.classList.contains('button_classList')) {
                callClassList(target, event);
            } else if (target.classList.contains('button_appendChild')) {
                callAppendChild(target, event);
            } else if (target.classList.contains('button_removeChild')) {
                callRemoveChild(target, event);
            } else if (target.classList.contains('button_insertRow')) {
                callInsertRow(target, event);
            } 
        });
    }

    function callChildren(target, event) {
        let targetParent = target.parentElement;
        let result = targetParent.querySelector('.result');
        let childrens = targetParent.children;
        console.log(targetParent.children)
        if (childrens) {
            for (let i = 0; i < childrens.length; i++) {
                result.value += childrens[i].innerText + '\n';
            }
        }
    }

    function callClassList(target, event) {
        let targetParent = target.parentElement;
        let result = targetParent.querySelector('.result');
        let classlist = targetParent.querySelector('.classlist');

        result.value = classlist.classList;
    }

    function callAppendChild(target, event) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');

        let pResult = document.createElement('p');
        pResult.className = 'p_result';
        pResult.textContent = 'P Result'
        result.appendChild(pResult);
    }

    function callRemoveChild(target, event) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');

        if (result.lastChild) {
            result.removeChild(result.lastChild);
        }
    }

    function callInsertRow(target, event) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');
        let tbody = result.querySelector('tbody');
        let rows = tbody.rows;
        let cells = tbody.rows[0].cells;

        let row = tbody.insertRow();
        for (let i = 0; i < cells.length; i++) {
            let cell = row.insertCell()
            cell.textContent = '(' + rows.length + ',' + (i + 1) + ')';
        }
    }

    // Initialize
    initialize();
});