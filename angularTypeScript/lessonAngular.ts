// function foobar (obj:string, a: number) {
//     console.log(obj);
// }
// foobar(0);
// foobar('hello', 5);
// foobar(true);
// foobar([]);
// foobar({});

class User {
    name: string;
    age: number;
    status?: boolean;

    constructor(name: string, age: number, status: boolean) {
        this.name = name;
        this.age = age;
        this.status = status;
    };

    greeting?() {

    }
}

function foobar(a: User) {

}

let user = new User('Mala', 5, true);
foobar(user);
let user2 = ({
    name: 'Anna',
    age: 20,
    greeting() {
        console.log('Hello')
    }
});
foobar({name: 'Anna', age: 20, status: true});
