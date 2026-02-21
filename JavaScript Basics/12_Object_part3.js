// De-structure the objects

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// access
course.courseInstructor

// De-structure object by used in react data that is display in output

const {courseInstructor} = course;

// or name it another for courseInstructor like this
const {courseInstructor: instructor} = course;


console.log(courseInstructor);// o/p: Hitesh
console.log(instructor);// o/p: Hitesh

// you will get json values from api calls
// for example one way
// {
//     "name": "Sonu",
//     "coursename": "js in hindi",
//     "price": "free"
// }
// second way
[
    {},
    {},
    {}
]





