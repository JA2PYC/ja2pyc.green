addEventListener('DOMContentLoaded', function () {
    addEventListener('click', function (event) {
        let target = event.target;

        if (target.classList.contains('button3')) {
            alert('Button 3')
        } else if (target.classList.contains('button4')) {
            let x = Math.ceil(Math.random() * 100);
            let y = 13;
            let z = x + y;
            alert('Button 4 : ' + x + ' + ' + y + ' = ' + z);
        }
    });
});