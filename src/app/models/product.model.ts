export class UserModel {
    public username: string;
    public password: string;
    public expired: number;
    public acess_token: string;
    constructor(username: string, password: string, expired: number, acess_token: string) {
        this.username = username;
        this.password = password;
        this.expired = expired;
        this.acess_token = acess_token;
    }
}