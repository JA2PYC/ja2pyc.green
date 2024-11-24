$(document).ready(() => {
    let guessAnswer;

    function initialize() {
        eventHandler();
    }

    function eventHandler() {
        let $buttonArr = $(document).find('button');

        $buttonArr.on('click', (event) => {
            let $targetParent = $(event.target).parent();

            if ($targetParent.hasClass('number_guess')) {
                callNumberGuess($targetParent, event);
            }
        })
    }

    function callNumberGuess($targetParent, event) {
        if (!guessAnswer) {
            guessAnswer = (Math.floor(Math.random() * 100)) + 1;
        }
        let $numberInput = $targetParent.find('input.number_input');
        let $result = $targetParent.find('div.result');
        console.log($numberInput.val());
        console.log(guessAnswer);
        if ($numberInput.val()) {
            try {
                let userInput = $numberInput.val();

                if (userInput > guessAnswer) throw "Down!!";
                if (userInput < guessAnswer) throw "Up!!";
                if (userInput == guessAnswer) throw "정답!!";
            } catch (error) {
                $result.text('Message : ' + $numberInput.val() + " " + error);

            }
        } else {
            $result.val('Error : Empty Input Number');
        }
    }

    initialize();
});