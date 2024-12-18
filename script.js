class User {
    constructor(name){
        this.name = name;
    }

    greet(){
        console.log(this.name);
    }
}
const user = new User ('Sofia');

user.greet();