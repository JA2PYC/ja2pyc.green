addEventListener('DOMContentLoaded', function () {

    function eventHandler() {
        addEventListener('click', function (event) {
            let target = event.target;

            if (target.classList.contains('getElementById')) {
                calculate();
            }
        });
    }

    function calculate() {
        let x = 5;
        let y = 6;
        let z = x + y;
        document.getElementById('getElementById').innerHTML = z;
    }

    // Initialize
    eventHandler();
});