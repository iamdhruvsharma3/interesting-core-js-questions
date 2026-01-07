// Base class(Abstraction + Encapsulation)
class Person {
    constructor(name, age) {
        if(!name || age<=0) {
            throw new Error("Invalid person details");
        }
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
    getRole() {
        return "Person";
    }
}

//Student class(Inheritance + Polymorphism)
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getRole() {
        return "Student";
    }
}

//Teacher class(Inheritance + Polymorphism)
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    getRole() {
        return "Teacher";
    }
}

//School class(Encapsulation + Composition)
class School {
    #students;
    #teachers;
    constructor(name) {
        this.name = name;
        this.#students = [];
        this.#teachers = [];
    }
    addStudent(student) {
        if(!(student instanceof Student)) {
            throw new Error("Invalid Student");
        }
        this.#students.push(student);
    }
    addTeacher(teacher) {
        if(!(teacher instanceof Teacher)) {
            throw new Error("Invalid Teacher");
        }
        this.#teachers.push(teacher);
    }
    getStudents() {
        return this.#students.map(student => student.getDetails());
    }
    getTeachers() {
        return this.#teachers.map(teacher => teacher.getDetails());
    }
    getSummary() {
        return {
            schoolName: this.name,
            totalStudents: this.#students.length,
            totalTeachers: this.#teachers.length,
        }
    }
}





// ===== Usage =====

const school = new School("Green Valley School");

const student1 = new Student("Aman", 14, "8th");
const student2 = new Student("Riya", 15, "9th");

const teacher1 = new Teacher("Mr. Sharma", 40, "Mathematics");
const teacher2 = new Teacher("Ms. Gupta", 35, "Science");

school.addStudent(student1);
school.addStudent(student2);

school.addTeacher(teacher1);
school.addTeacher(teacher2);

console.log("Students:", school.getStudents());
console.log("Teachers:", school.getTeachers());
console.log("School Summary:", school.getSummary());