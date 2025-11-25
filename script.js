console.log("Lab loaded: check each part in the console.");
const student = {
  name: "andrew doyle",
  age: 22,
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



console.log("\n=== Part 3: Destructuring ===");

const { name, courses } = student;
console.log("Destructured name:", name);
console.log("Destructured courses:", courses);

const scores = [85, 92, 78, 90];

const [firstScore, secondScore] = scores;
console.log("First score:", firstScore);
console.log("Second score:", secondScore);



console.log("\n=== Part 4: Spread Operator ===");

const clonedStudent = {
  ...student,
  graduationYear: 2027
};

console.log("Cloned student with graduationYear:", clonedStudent);

const extraCourses = ["Web Development", "Operating Systems"];
const allCourses = [...student.courses, ...extraCourses];

console.log("Original student courses:", student.courses);
console.log("Extra courses:", extraCourses);
console.log("Merged courses (with spread):", allCourses);



const studentExtended = {
  name: "andrew doyle",
  age: 22,
  enrolled: true,
  courses: ["CPAN133", "CPAN116", "CPAN111"],
  displayInfo() {
    const status = this.enrolled ? "currently enrolled" : "not enrolled";
    return `${this.name} is ${this.age} years old and is ${status}.`;
  },
  addCourse(newCourse) {
    this.courses.push(newCourse);
    console.log(`Course "${newCourse}" added for ${this.name}.`);
  },
  totalCourses() {
    return this.courses.length;
  }
};



console.log("\n=== Part 5: Object Methods ===");

student.addCourse("JavaScript Programming");
console.log("Courses after adding new one:", student.courses);
console.log("Total number of courses:", student.totalCourses());