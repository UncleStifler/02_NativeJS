import {StudentType} from "../02/02";
import {addSkill, changeStudentCity, changeStudentCountry, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType
beforeEach(() => {
    student = {
        id: 1,
        name: "Alexey",
        age: 32,
        isActive: false,
        address: {
            streetTitle: "Torrent del Remei",
            city: {
                title: "Barcelona",
                countryTitle: "Spain"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "JS"
            },
            {
                id: 3,
                title: "TS"
            },
            {
                id: 4,
                title: "REACT"
            },
        ]
    }
})

test.skip("new skill should be added to student", () => {
    expect(student.technologies.length).toBe(4)

    addSkill(student, "JS")

    expect(student.technologies.length).toBe(5)
    expect(student.technologies[4].title).toBe("JS")
    expect(student.technologies[4].id).toBeDefined()
})


test.skip("new student should be made active", () => {
    expect(student.isActive).toBe(false)
    makeStudentActive(student)

    expect(student.isActive).toBe(true)
})

test.skip("is student live in this city", () => {
    expect(student.address.city.title).toBe("Barcelona")
    changeStudentCity(student)
    expect(student.address.city.title).toBe("New York")
})

test.skip("is student live in this country", () => {

    expect(student.address.city.countryTitle).toBe("Spain")
    changeStudentCountry(student)
    expect(student.address.city.countryTitle).toBe("USA")
})

test.skip("does student live in this country", () => {

    let res1 = doesStudentLiveIn(student, "Spain")
    let res2 = doesStudentLiveIn(student, "USA")

    expect(res1).toBe(true)
    expect(res2).toBe(false)
})