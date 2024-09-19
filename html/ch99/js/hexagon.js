addEventListener('DOMContentLoaded', () => {
    // Initializer
    function initialize() {
        callHexagonCreator();
        eventHandler();
    }

    function eventHandler() {


    }

    function callHexagonCreator() {
        let hexagon_container = document.getElementsByClassName('hexagon_container');
        if (hexagon_container) {
            Array.from(hexagon_container).forEach((array) => {
                console.log('Hexagon!!!')
                console.log(document.documentElement.clientWidth);
                console.log(document.documentElement.clientHeight);

                let clientWidth = document.documentElement.clientWidth;
                let clientHieght = document.documentElement.clientHeight;
                let hexagonSize = Math.min(clientWidth, 100);
                let hexagonRow = Math.max(Math.floor(clientHieght / hexagonSize), 2);
                let hexagonColumn = Math.max(Math.floor(clientWidth / hexagonSize), 3);

                console.log(hexagonSize);

                for (let i = 0; i < hexagonRow; i++) {
                    let hexagon_row = document.createElement('div');
                    hexagon_row.className = 'hexagon_row';
                    array.appendChild(hexagon_row);
                    for (let i = 0; i < hexagonColumn; i++) {
                        let hexagon = document.createElement('div');
                        hexagon.className = 'hexagon';
                        hexagon_row.appendChild(hexagon)

                        let hexagon_inner = document.createElement('div');
                        hexagon_inner.className = 'hexagon_inner';
                        hexagon.appendChild(hexagon_inner);
                    }
                }
            });

        }

    }



    // Initialize
    initialize()
});