/**
 * Created by Andris on 13/01/14.
 */

interface Person {
    firstName:string;
    lastName:string;
}

class Student implements Person {
    constructor(public firstName:string, public lastName:string) {

    }

    toString() {
        return this.firstName + ' ' + this.lastName + '!';
    }
}


function greeter(person: Person) {
    return "Hello, " + person;
}

var user = new Student('Bar', 'Foo');
var result = document.getElementById('result');

result.innerHTML = greeter(user);