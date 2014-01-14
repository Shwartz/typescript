/**
* Created by Andris on 13/01/14.
*/

var Student = (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Student.prototype.toString = function () {
        return this.firstName + ' ' + this.lastName + '!';
    };
    return Student;
})();

function greeter(person) {
    return "Hello, " + person;
}

var user = new Student('Bar', 'Foo');
var result = document.getElementById('result');

result.innerHTML = greeter(user);
//# sourceMappingURL=basic.js.map
