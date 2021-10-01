

// @ts-ignore
const ages = [18, 20, 22, 1, 100, 90, 14]

const oldAges = ages.filter(t => t > 90)

console.log(oldAges)

type CourseType = {
    title: string
    price: number
}


const courses = [
    {title: "CSS", price: 100},
    {title: "JS", price: 300},
    {title: "TS", price: 150},
    {title: "REACT", price: 300},
]

const cheapPredicate = (course: CourseType) => {
    return course.price < 160
}

const chipCourse = []