addEventListener('DOMContentLoaded', function () {
    // Initializer
    function initialize () {
        let targetTagArr = Array('header','footer');
        targetTagArr.forEach((targetTag) => {
            let target = document.getElementsByTagName(targetTag);
            let targetArray = Array.from(target);
            targetArray.forEach((targetElement) => {
                includeHtml(targetElement);
            }); 
        })
    }

    // Include Html 
    function includeHtml(target) {
        let srcValue = target.getAttribute('include-html');
        if (srcValue) {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', srcValue);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                       target.innerHTML = this.response; 
                    }
                }
            }
            xhr.send();
        }
    }

    // Initialize
    initialize();
})