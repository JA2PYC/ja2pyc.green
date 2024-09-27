addEventListener('DOMContentLoaded', () => {
    // Initializer
    function initialize() {
        eventHandler();
    }

    // Event Handler
    function eventHandler() {

    }

    function callRegExpChecker(target) {
        let targetParent = target.parentNode;
        let regResult = targetParent.querySelector('.reg_result');

        if (!target.value) {
            regResult && (regResult.value = '검증 대상이 없습니다.');
            return false;
        }

        console.log(target);

        let regExp;
        if (target.tagName === 'input') {
            if (target.type === 'text') {
                if (target.name === 'input_id') {
                    regExp = /^[]$/;
                } else {
                    regExp = /^[a-zA-Z0-9`~!@#$%^&*()\-_=+\\|/.{}[\]'";:,?<>]+$/;
                }
            } else if (target.type === 'password') {
                regExp = /(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?])[a-zA-Z0-9`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]{12,32}$/;
            }
        }
        else if (target.tagName === 'textarea') {
            regExp = /^[a-zA-Z0-9`~!@#$%^&*()\-_=+\\|/.{}[\]'";:,?<>\n\t]+$/;
        }
    }

    // Initialize
    initialize();
});