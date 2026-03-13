class user {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    // if getter exists then setter also should exists
    get password() {
        return this._password
    }
    // don't return setters
    // use _(underscore to avoid the race b/w this password and constructor password)
    set password(value) {
        this._password = value

    }
}

const sonu = new user("sonu.apri@gmail.com", "123")
console.log(sonu.password);