export type peopleType = {
    name: string,
    age: number,
}

const people: peopleType[] = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexandr Petrov", age: 33},
    {name: "Dmitry Sidorov", age: 18},
]

const dimychTransformator = (man: peopleType) => ({
    stack: ["css, html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
})


const devs = [
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Andrew", lastName: "Ivanov"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Alexandr", lastName: "Petrov"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Dmitry", lastName: "Sidorov"
    }
]

const dev2 = people.map(dimychTransformator)
const dev3 = people.map(man => ({
    stack: ["css, html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
}))


export const createGratingMessage = (people: peopleType[]) => {
    return people.map(h => `Hello ${h.name.split(" ")[0]}. Welcome to New York`)
}