$(document).ready(() => {
    function initialize() {
        eventHandler();
    }

    function eventHandler() {
        console.log(document.forms)

        let $documentForms = $(document.forms);
        // Set Input Checker
        $documentForms.each((formIndex, form) => {
            $(form).on('input', 'input:not(:disabled)', (inputEvent) => {
                console.log($(inputEvent.target));
            })
        });

        // Set Form Submitter
        $(document.forms).on('submit', (submitEvent) => {
            submitEvent.preventDefault();
            console.log('submit')
            console.log(submitEvent)
            $(submitEvent.target).find('input:not(:disabled)').each((inputIndex, inputTarget) => {
                callRegExpChecker($(inputTarget));
            });
        })
    }

    // Set Regular Expressions
    const regExps = {
        INPUT: {
            text: {
                input_id: /^[a-zA-Z0-9`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]{6,32}$/,
                input_name: /^[가-힣]{2,32}$/,
                default: /^[a-zA-Z0-9`~!@#$%^&*()\-_=+\\|/.{}[\]'";:,?<>]+$/,
            },
            password: /(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?])[a-zA-Z0-9`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]{12,32}$/,
            email: /^[a-zA-Z0-9%\-_+.]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/,
            date: /^\d{4,6}\-?\d{1,2}\-?\d{1,2}$/,
            number: /\d+/,
            tel: /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
        },
        TEXTAREA: /^[a-zA-Z0-9`~!@#$%^&*()\-_=+\\|/.{}[\]'";:,?<>\n\t]+$/,
    }

    // Reg Expression Checker
    function callRegExpChecker($target) {
        let $targetParent = $target.parent();
        let $regResult = $targetParent.find('.reg_result');

        console.log($target);
        console.log($target.val());
        if (!$target.val()) {
            $regResult && ($regResult.val('검증 대상이 없습니다.'));
            return false;
        }

        let regExp;

    }

    initialize();
});