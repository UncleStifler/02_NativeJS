import {createGratingMessage, peopleType} from "./05"

let people: peopleType[]

beforeEach(() => {
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Alexandr Petrov", age: 33},
        {name: "Dmitry Sidorov", age: 18},
    ]
})

test("should get array of grating messages", () => {
    const messages = createGratingMessage(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello Andrew. Welcome to New York")
    expect(messages[1]).toBe("Hello Alexandr. Welcome to New York")
    expect(messages[2]).toBe("Hello Dmitry. Welcome to New York")
})