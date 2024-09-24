addEventListener('DOMContentLoaded', () => {
    function initialize() {
        let buttonListener = document.querySelector('.button_listener');
        buttonListener.onclick = callListenerEvent;

        let buttonEventListener = document.querySelector('.button_eventListener');
        buttonEventListener.addEventListener('click', callAddEventListener);

        let buttonAnonymousEvent = document.querySelector('.button_anonymousEvent');
        buttonAnonymousEvent.addEventListener('click', function (event){
            let target = event.target;
            let targetParent = target.parentNode;
            let result = targetParent.querySelector('.result');

            result.value = 'Anonymous Event';
        })
        eventHandler();
    }

    function eventHandler() {
        addEventListener('click', (event) => {
            let target = event.target;
        });
    }

    function callListenerEvent(event) {
        let target = event.target;
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');

        result.value = 'Listener Event';
    }

    function callAddEventListener(event) {
        let target = event.target;
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');

        result.value = 'addEventListener Event';
    }

    // Initialize
    initialize();
});

function callInlineEvent(event) {
    let target = event.target;
    let targetParent = target.parentNode;
    let result = targetParent.querySelector('.result');

    result.value = 'Inline Event';
}