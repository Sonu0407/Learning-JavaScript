class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
        
    }
}

// for Inheritance extends is ther keyword
class Teacher extends User {
    constructor(username, email, password) {
        // how to acces the username from the User class
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
        
    }
}