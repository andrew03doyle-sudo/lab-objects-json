console.log("Lab loaded: check each part in the console.");
const student = {
  name: "Alex Student",
  age: 20,
  enrolled: true,
  courses: ["CPAN133", "CPAN116", "CPAN111"],
  displayInfo() {
    const status = this.enrolled ? "currently enrolled" : "not enrolled";
    return `${this.name} is ${this.age} years old and is ${status}.`;
  }
};

console.log("=== Part 1: Student Object ===");
console.log("Student name:", student.name);
console.log("Student age:", student.age);
console.log("Display info:", student.displayInfo());



console.log("\n=== Part 2: JSON ===");

const studentJSON = JSON.stringify(student);
console.log("Student as JSON string:", studentJSON);

const studentFromJSON = JSON.parse(studentJSON);
console.log("Student object created from JSON:", studentFromJSON);

console.log("Are the two objects strictly equal?", student === studentFromJSON);