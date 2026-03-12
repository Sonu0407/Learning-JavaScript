class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
        
    }

    static createId() {
        return `123`
    } // this allow use to access in the inherits and as well as and objects also
}