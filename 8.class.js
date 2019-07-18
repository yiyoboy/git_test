//类
class Person {
    constructor(name){
        this.name=name; //实例的私有属性
    }
    getName(){
        console.log(this.name)
    }
}

let p = new Person('liu1111');
p.getName()