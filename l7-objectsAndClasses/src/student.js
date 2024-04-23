class Student {
    course = [];

    name = '';

    age = 0;

    major = '';

    constructor(name, age, major) {
        this.name = name;
        this.age = age;
        this.major = major;
    }

    introduce() {
        console.log(`${this.name}, ${this.age}, ${this.major}`);
    }

    enroll(course) {
        this.course.push(course);
        console.log(`You have been succesfully assigned to ${course}!`);
    }

    displayCourses() {
        console.log(this.course);
    }

    dropCourses(course) {
        if (this.course.includes(course)) {
            const findIndex = this.course.indexOf(course);
            this.course.splice(findIndex, 1);
            console.log(`You have successfully dropped ${course}...`);
        } else {
            console.log(`${course} doesn't exist or you haven't enrolled to it yet`);
        }
    }
}

const student1 = new Student("Joe", 21, "major A");

student1.introduce();
student1.enroll('Course A');
student1.enroll('Course B');
student1.enroll('Course C');
student1.enroll('Course D');
student1.enroll('Course E');
student1.displayCourses();
student1.dropCourses('Course D');
student1.dropCourses('Course B');
student1.dropCourses('lol');
student1.displayCourses();


