$(document).ready(function () {
    function initialize() {
        eventHandler();
    }

    function eventHandler() {
        $(document).on('click', (event) => {
            let target = event.target;

            if ($(target).hasClass('target1')) {
                callBackFunction(event, $(target));
            }
        });

        $(document).on('click', '.target2', (event) => {
            callBackFunction (event, $(event.target));
        });
    }

    function callBackFunction(event, $target) {
        $target.css('color','red');
        console.log($target);
        $target.parent().find('.result').val($target.attr('class'));
    }

    initialize();
});