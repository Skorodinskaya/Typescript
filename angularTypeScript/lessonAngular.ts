// function foobar (obj:string, a: number) {
//     console.log(obj);
// }
// foobar(0);
// foobar('hello', 5);
// foobar(true);
// foobar([]);
// foobar({});

// class User {
//     name: string;
//     age: number;
//     status?: boolean;
//
//     constructor(name: string, age: number, status: boolean) {
//         this.name = name;
//         this.age = age;
//         this.status = status;
//     };
//
//     greeting?(): void {
//
//     }
// }
//
// function foobar(a: User): void {
//
// }
//
// let user = new User('Mala', 5, true);
// foobar(user);
// let user2 = ({
//     name: 'Anna',
//     age: 20,
//     greeting() {
//         console.log('Hello')
//     }
// });
// foobar({name: 'Anna', age: 20, status: true});

// interface IUser {
//        name: string;
//        age: number;
//        status: boolean;
//        greeting(msg: string): void;
// }
//
// function foobar (a: IUser) {
// }
//     let user = {
//         name: 'Anna',
//         age: 45,
//         status: true,
//          greeting(msg: string) {
//             console.log(msg + '!!!');
//          }
//     }
//
//     let user2 = {
//         name: 'maria',
//         age: 45,
//         status: false,
//          greeting(msg: string) {
//             console.log(msg + '!!!');
//             console.log(msg + '!!!');
//             console.log(msg + '!!!');
//             console.log(msg + '!!!');
//             console.log(msg + '!!!');
//          }
//     }
//
//
// foobar(user);
// foobar(user2);
//
// class User implements IUser {
//     age: number;
//     name: string;
//     status: boolean;
//     skills: string[];
//
//     greeting(msg: string): void {
//         console.log(msg + '!')
//     }
// }
//
// let user3 = new User();
// function xxx(u: IUser){
//
// }
// xxx(user3);

// interface A {
//     a: string;
// }
//
// interface B{
//     b: number;
// }
//
// class Main implements A, B{
//     a: string;
//     b: number;
// }
//
// let main = new Main();
//
// function foo(x: A) {
//
// }
// foo(main);
//
// function bar(x: B){
//
// }
// bar(main);

// class User{
//
// }
// class SuperUser extends User{
//
// }

// let arr: string[] = ['hjk', 'hda'];
// let numbers: Array<number> = [1,2,3];
// let mixArray : [string, number, boolean] = ['ghj', 5, true];


