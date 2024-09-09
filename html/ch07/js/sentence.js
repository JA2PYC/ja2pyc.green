addEventListener('DOMContentLoaded', function () {
    // Event Handler
    function eventHandler() {
        addEventListener('click', function (event) {
            let target = event.target;

            if (target.classList.contains('message')) {
                message();
            }
        });
    }

    // Alert Message
    function message() {
        alert('aaaaa');
        alert('bbbbb');
        alert('ccccc');
        alert('ddddd');
    }

    // Initialize 
    eventHandler();
});