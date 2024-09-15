const course = {
    course_name: "js",
    price:"free",
    courseInstructor:"Self"

}

//  course.courseInstructor   we can reference like this but,

// if we need to do this multiple times might be struggle


const {courseInstructor} = course;
// or give your own name easy

const {price : p} = course;
console.log(courseInstructor);
console.log(p)