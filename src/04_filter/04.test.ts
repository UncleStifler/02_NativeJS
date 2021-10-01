test("should take older then 90", () => {
    const ages = [18, 20, 22, 1, 100, 90, 14]
    const oldAges = ages.filter(t => t > 90)
    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})


test("courses cheaper 160", () => {
    const courses = [
        {title: "CSS", price: 100},
        {title: "JS", price: 300},
        {title: "TS", price: 150},
        {title: "REACT", price: 300},
    ]
    const cheapCourses = courses.filter(t => t.price < 160)
    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[1].price).toBe(150)
    expect(cheapCourses[0].title).toBe("CSS")
    expect(cheapCourses[1].title).toBe("TS")
})
