$(document).ready(() => {
    $try_catch = $(document).find('div.try_catch');
    if ($try_catch) {
        let msg = "";
        function try_catch_function() {
            try {
                allert("Hello World!");
                msg = "Try Pass!";
            } catch (error) {
                msg = "Catch Error : " + error.message;
                alert(msg);
            }
            return msg;
        }

        $try_catch_button = $try_catch.find('button.try_catch_button');
        if ($try_catch_button) {
            $try_catch_button.on('click', () => {
                $result = $try_catch.find('div.result');
                $result.text(try_catch_function());
            });
        }

    }
});