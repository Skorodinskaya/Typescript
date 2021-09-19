class User {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    greeting():string {
        return `hello, ${this.name}`
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
       if (value > 0) {
           this._age = value;
       }
    }
}

function foo (a: User) {

}

let user = new User('Anna',56);
// user.name = 'anna';
// user.age = 90;
user.age = 45;
foo(user);
// foo({name:'ghj', age:556})

interface IUser {
    name: string;
    age: number;
    greeting?(a: string): string;
}

function bar (b: IUser) {

}

bar({name: 'nanan', age: 52, greeting:(a:string):string => {
    return 'go'
    } })

class X implements  IUser {
    ownProp1: string;
    ownProp2: string[];
    age: number;
    name: string;
}
let x = new X();
let IUsers: IUser[]=[
    x,
    {name: 'nanan', age: 52, greeting:(a:string):string => {return 'go';}}
]
bar(new X());

function foobar (user: User) {
    user.greeting()
}

let user1 = new User('gh', 565);
foobar(user1)

