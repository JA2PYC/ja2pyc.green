class Animal {
    constructor(weight) {
        this.weight = weight;
    }
}

class Dog extends Animal {
    constructor(name, adoptedYear, weight) {
        super(weight);
        this.name = name;
        this.adoptedYear = adoptedYear;
    }

    age() {
        let date = new Date();
        return date.getFullYear() - this.adoptedYear;
    }
}

$(document).ready(() => {
    $class_inherit = $(document).find('div.class_inherit');
    if ($class_inherit) {
        let myDog = new Dog("Max", 2018, 20);
        $result = $class_inherit.find('div.result');
        $result.text("이름 : " + myDog.name + ", 나이 : " + myDog.age() + ", 몸무게 : " + myDog.weight);
    }
});