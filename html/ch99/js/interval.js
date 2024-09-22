addEventListener('DOMContentLoaded', () => {
    let interval_container = document.querySelector('.interval');
    if (interval_container) {

        //Set Container
        let input_interval = interval_container.getElementsByClassName('input_interval');
        let input_intervalArr = Array.from(input_interval);
        let isIntervaling = false;

        // Initializer
        function initialize() {
            eventHandler();
        }

        function eventHandler() {
            addEventListener('click', (event) => {
                let target = event.target;

                if (target.classList.contains('interval_map')) {
                    callIntervalMap(target, event);
                } else if (target.classList.contains('interval_promise')) {
                    callIntervalPromise(target, event);
                } else if (target.classList.contains('interval_object')) {
                    callIntervalObject(target, event);
                } else if (target.classList.contains('interval_reset')) {
                    callIntervalReset(target, event);
                }
            });
        }

        function callIntervalMap(target, event) {
            // Prevent Duplicattion
            if (isIntervaling) return;
            isIntervaling = true;

            let targetParent = target.parentElement;

            let intervalMap = new Map();
            input_intervalArr.forEach((array, index) => {
                setIntervalMap(array, index, intervalMap);
            });

            let intervalManagerId = setInterval(() => {
                if (intervalMap.size >= input_intervalArr.length) {
                    let maxValueIndex = 0;
                    let maxValue = 0;
                    let maxCounterIndex = 0;
                    let maxCounter = 0;
                    intervalMap.forEach((array, index) => {
                        if (array.value > maxValue) {
                            maxValueIndex = index;
                            maxValue = array.value;
                        }
                        if (array.counter > maxCounter) {
                            maxCounterIndex = index;
                            maxCounter = array.counter;
                        }
                    });
                    input_intervalArr[maxValueIndex].classList.add('max_value');
                    input_intervalArr[maxCounterIndex].classList.add('max_counter');
                    isIntervaling = false;
                    clearInterval(intervalManagerId);
                }
            }, 500);
        }

        function setIntervalMap(array, index, intervalMap) {
            let intervalCounter = 0;
            let intervalId = setInterval(() => {
                let randomNumber = Math.floor(Math.random() * 100) + 1;
                intervalCounter++;
                array.value = 'Counter : ' + intervalCounter + ', Value : ' + randomNumber;
                if (randomNumber > 95) {
                    intervalMap.set(index, { intervalId: intervalId, counter: intervalCounter, value: randomNumber });
                    clearInterval(intervalId);
                }
            }, 50);
        }

        function callIntervalReset(target, event) {
            if (isIntervaling) return;
            input_intervalArr.forEach((array, index) => {
                array.value = 'Clear';
                if (array.classList.contains('max_value')) {
                    array.classList.remove('max_value');
                }
                if (array.classList.contains('max_counter')) {
                    array.classList.remove('max_counter');
                }
                setTimeout(() => {
                    array.value = '';
                }, 2000)
            })
        }

        async function callIntervalPromise(target, event) {
            if (isIntervaling) return;
            isIntervaling = true;
            console.log('intervalPromise');

            let resolvedData = await setIntervalPromise();
            console.log(resolvedData);
  
            isIntervaling = false;
        }

        function setIntervalPromise() {
            return new Promise((resolve) => {
                input_intervalArr.forEach((array) => {
                });
                setTimeout(() => {
                    resolve('resolved')
                },3000)
                // setInterval(() => {
                //     resolve('resolved')
                // });
            });
        }

        function callIntervalObject(target, event) {
            if (isIntervaling) return;
            isIntervaling = true;
            console.log('intervalObject');
            isIntervaling = false;
        }

        initialize();
    }
});