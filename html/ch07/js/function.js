addEventListener('DOMContentLoaded', function () {
    // Initialize
    initialize();
});
function initialize() {
    console.log('Init');
}

function callAlert(event) {
    let target = event.target;
    let targetParent = target.parentElement;
    let targetNode = target.parentNode;
    let input_elementQuerySelector = targetParent.querySelector('.input_function');
    let input_nodeQuerySelector = targetNode.querySelector('.input_function');
    let input_elementGetElementsByClassName = targetParent.getElementsByClassName('input_function');
    let input_elementGetElementsByTagName = targetParent.getElementsByTagName('input');

    let input_function = document.querySelector('.input_function');

    console.log(document);
    console.log(event);
    console.log(target);
    console.log(targetParent);
    console.log(targetNode);
    console.log(input_elementQuerySelector);
    console.log(input_nodeQuerySelector);
    console.log(input_elementGetElementsByClassName);
    console.log(input_elementGetElementsByTagName);
    console.log(input_function);

    input_function.value = 'function';
}

let unnamedFunction = function (event) {
    let target = event.target;
    let targetParent =target.parentElement;
    let inputTag = targetParent.getElementsByTagName('input');
    let inputTagArr = Array.from(inputTag);

    inputTagArr.forEach((array) => {
        array.value = 'unnamedFunction'
    });
}

let arrowFunction = (event) => {
    let target = event.target;
    let targetParent =target.parentElement;
    let inputTag = targetParent.getElementsByTagName('input');
    let inputTagArr = Array.from(inputTag);

    inputTagArr.forEach((array) => {
        array.value = 'arrowFunction'
    });
}
