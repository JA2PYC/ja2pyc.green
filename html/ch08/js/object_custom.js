addEventListener('DOMContentLoaded', () => {
    const myCar = {
        model: 'Ray',
        maker: 'KIA',
        speed: 0,
        color: 'white',
        info: function () {
            return { model: this.model, maker: this.maker };
        },
        accel: function () {
            this.speed += 10;
            return this.speed;
        },
        brake: function () {
            this.speed -= 10;
            return this.speed;
        },
    }

    const myDog = new Object();
    myDog.name = "Merry";
    myDog.age = 6;
    myDog.weight = 5;
    myDog.speed = 0;
    myDog.info = function () {
        return { name: myDog.name, age: myDog.age, weight: myDog.weight };
    }
    myDog.run = function () {
        myDog.speed += 5;
        return myDog.speed;
    }
    myDog.stop = function () {
        myDog.speed = 0;
        return myDog.speed;
    }

    function NewCar(model, maker, speedVector) {
        this.model = model;
        this.maker = maker;
        this.speed = 0;
        this.info = function () {
            return { model: this.model, maker: this.maker };
        }
        this.accel = function () {
            this.speed += speedVector;
            return this.speed;
        }
        this.brake = function () {
            this.speed -= speedVector;
            return this.speed;
        }
    }

    let myNewCar = new NewCar('Casper', 'HYUNDAI', 15);

    function initialize() {
        eventHandler();
    }

    function eventHandler() {
        addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('button_carInfo')) {
                callMyCarInfo(target, event);
            } else if (target.classList.contains('button_accel')) {
                callMyCarAccel(target, event);
            } else if (target.classList.contains('button_brake')) {
                callMyCarBrake(target, event);
            }

            if (target.classList.contains('button_dogInfo')) {
                callMyDogInfo(target, event);
            } else if (target.classList.contains('button_run')) {
                callMyDogRun(target, event);
            } else if (target.classList.contains('button_stop')) {
                callMyDogStop(target, event);
            }

            if (target.classList.contains('button_newCarInfo')) {
                callMyNewCarInfo(target, event);
            } else if (target.classList.contains('button_newCarAccel')) {
                callMyNewCarAccel(target, event);
            } else if (target.classList.contains('button_newCarBrake')) {
                callMyNewCarBrake(target, event);
            }

            if (target.classList.contains('button_forin')) {
                callForInObject(target, event);
            }
        });
    }

    function callMyCarInfo(target, event) {
        let targetParent = target.parentElement;
        let inputResult = targetParent.querySelector('.input_result');

        let myCarInfo = myCar.info();
        inputResult.value = 'Model : ' + myCarInfo['model'] + ', Maker : ' + myCarInfo['maker'];
    }

    function callMyCarAccel(target, event) {
        let targetParent = target.parentElement;
        let inputResult = targetParent.querySelector('.input_result');

        inputResult.value = myCar.accel();
    }

    function callMyCarBrake(target, event) {
        let targetParent = target.parentElement;
        let inputResult = targetParent.querySelector('.input_result');

        inputResult.value = myCar.brake();
    }

    function callMyDogInfo(target, event) {
        let targetParent = target.parentElement;
        let inputResult = targetParent.querySelector('.input_result');

        let myDogInfo = myDog.info();
        inputResult.value = 'Name : ' + myDogInfo.name + ', Age : ' + myDogInfo.age + ', Weight : ' + myDogInfo.weight;
    }

    function callMyDogRun(target, event) {
        let targetParent = target.parentElement;
        let inputResult = targetParent.querySelector('.input_result');

        inputResult.value = myDog.run();
    }

    function callMyDogStop(target, event) {
        let targetParent = target.parentElement;
        let inputResult = targetParent.querySelector('.input_result');

        inputResult.value = myDog.stop();
    }

    function callMyNewCarInfo(target, event) {
        let targetParent = target.parentElement;
        let inputResult = targetParent.querySelector('.input_result');

        let myNewCarInfo = myNewCar.info()
        inputResult.value = 'Model : ' + myNewCarInfo.model + ', Maker : ' + myNewCarInfo.maker;
    }

    function callMyNewCarAccel(target, event) {
        let targetParent = target.parentElement;
        let inputResult = targetParent.querySelector('.input_result');

        inputResult.value = myNewCar.accel();
    }

    function callMyNewCarBrake(target, event) {
        let targetParent = target.parentElement;
        let inputResult = targetParent.querySelector('.input_result');

        inputResult.value = myNewCar.brake();
    }

    function callForInObject(target, event) {
        let targetParent = target.parentElement;
        let inputResult = targetParent.querySelector('.input_result');

        for (let i in myNewCar.info()) {
            inputResult.value += myNewCar[i] + ', '
        }

        inputResult.value = inputResult.value.trim();
        if (String(inputResult.value).endsWith(',')) {
            inputResult.value = String(inputResult.value).slice(0, -1);
        }
    }

    initialize();
});