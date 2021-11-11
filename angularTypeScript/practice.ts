// 1) создать интерфейс на основе user и протипизировать функции:
//
//     const user = {
//            name:"Max",
//            age:18,
//            gender:'male'
//     }
//
// function sum(a,b){
//        return a+b
// }
// function showSum(a,b){
//        console.log(a + b);
// }
//
// function incAge(someUser, inc){
//        someUser.age+=inc
//        return someUser
// }
//
// console.log(sum(1, 2));
// showSum(2,3)
// incAge(user, 2)

interface IUser {
    name: string;
    age: number;
    gender: string
}

function foobar(a: IUser) {

}

const user = {
    name: "Max",
    age: 18,
    gender: 'male'
}

foobar(user)

// function sum(a,b){
//        return a+b
// }

function sum(a: number, b: number) {
    return(a + b);
}
console.log(sum(1, 2));

// function showSum(a,b){
//        console.log(a + b);
// }

function showSum(a: number, b: number): void{
    console.log(a + b)
}
showSum(2,3)

// function incAge(someUser, inc){
//        someUser.age+=inc
//        return someUser
// }

function incAge(someUser: IUser, inc: number) {
    someUser.age=inc
    return someUser
}
incAge(user, 2)

// 2)написать интерфейс Animal который описывает:
//     -тип движения животного(плавает, ходит, бегает) типа стринг
// -что умеет говорить тип стринг??/boolean
// -и функцию которая возвращает информацию о животном
//
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal и переопредилить функцию

interface Animal {
    moving: string
    speaking: boolean,
    info(msg: string): string;
}

class Cat implements Animal{
    moving: string;
    speaking: boolean;

    constructor(moving: string, speaking: boolean) {
        this.moving = moving;
        this.speaking = speaking;
    }
    info(msg: string): string {
        return this.moving + " " + this.speaking
    }
}

let kitty = new Cat('walk', false);
console.log(kitty.info)

class Bird implements Animal{
    moving: string;
    speaking: boolean;

    constructor(moving: string, speaking: boolean) {
        this.moving = moving;
        this.speaking = speaking;
    }
    info(msg: string): string {
        return this.moving + " " + this.speaking
    }
}

let parrot = new Bird('fly', true);
console.log(parrot.info)

class Fish implements Animal{
    moving: string;
    speaking: boolean;

    constructor(moving: string, speaking: boolean) {
        this.moving = moving;
        this.speaking = speaking;
    }
    info(msg: string): string {
        return this.moving + " " + this.speaking
    }
}

let nemo = new Fish('swim', false);
console.log(nemo.info)

