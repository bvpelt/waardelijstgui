export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    authdata?: string;
    email: string;

    constructor(username:string, password:string) {
        this.username = username;
        this.password = password;
    }
}
