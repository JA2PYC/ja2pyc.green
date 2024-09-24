addEventListener('DOMContentLoaded', () => {
    function initialize() {
        eventHandler();
    }

    function eventHandler() {
        addEventListener('change', (event) => {
            let target = event.target;

            if (target.tagName && target.tagName === 'INPUT') {
                callRegExpChecker(target, event);
            }
        })
    }

    function callRegExpChecker(target, event) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');

        console.log(event);

        let regExp;
        if (target.type === 'text') {
            // if (target.)
        } else if (target.type === 'password') {
            regExp = /^(?=.*[a-zA-Z])/;
        } else if (target.type === 'date') {
            regExp = /\d+/;
        } else if (target.type === 'number') {
            regExp = /\d+/;
        } else if (target.tpye === 'email') {
            regExp = /^[a-zA-Z](?=.*@)/;
        } else {
            regExp = /^[0-9a-zA-Z]/;
        }
    }

    initialize();
})