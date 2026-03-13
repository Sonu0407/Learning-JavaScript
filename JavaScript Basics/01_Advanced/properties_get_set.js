// Getter and Setter in function How to write?

function User(email, password) {
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email
        },
        set: function(value) {
            this._email = value
        },
    })
    Object.defineProperty(this, 'password', {
        get: function() {
            return this._password
        },
        set: function(value) {
            this._password = value
        },
    })
}

const sonu = new User("sonu.s@gmail.com", "123");
console.log(sonu.password);
console.log(sonu.email);

