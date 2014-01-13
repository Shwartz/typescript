/**
* Created by Andris on 13/01/14.
*/
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
})();

function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student("Jane", "ab", "user");

document.body.innerHTML = greeter(user);
//# sourceMappingURL=basic.js.map
