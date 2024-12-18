class User {
    constructor(name){
        this.name = name;
    }

    greet(){
        console.log(this.name);
    }
}

class Person extends User{
    constructor(name, surname){
        super(name);
        this.surname = surname;
    }
    FullName(){
        console.log(this.name);
    }
}

const person = new Person ('Sofia', 'Sofieva');
person.FullNmae();