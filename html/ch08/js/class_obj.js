class Dog {
    constructor(name, adoptedYear) {
        this.name = name;
        this.adoptedYear = adoptedYear;
    }

    age() {
        let date = new Date();
        return date.getFullYear() - this.adoptedYear;
    }
}
// DOMContentLoaded
$(document).ready(() => {
    $class_obj = $(document).find('div.class_obj');
    if ($class_obj) {
        let myDog = new Dog('Mary', 2013);
        let dogAge = myDog.age();
        $result = $class_obj.find('div.result');
        console.log($result);
        $result.text("나의 강아지 이름은 " + myDog.name +"이고 " + dogAge + "살 입니다.");
    }
});