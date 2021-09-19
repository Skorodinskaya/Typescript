interface Client <T> {
    id: T;
    login: string;
}
let client1: Client<number>={id:45678, login:'ghjk'};
let client2: Client<string>={id:'mmmm', login:'ghjk'}

