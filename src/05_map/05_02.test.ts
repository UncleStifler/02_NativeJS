import {CityType} from "../02/02_02";
import {createGratingMassages, getStreetTitlesOfGovermentsBuildings, getStreetTitlesOfHouses} from "./05_02";


let city: CityType


beforeEach(() => {
        city = {
            houses:
                [{id: 1, buildedAt: 2012, repaired: false, address: {number: 100, street: {title: "White street"}}},
                    {id: 2, buildedAt: 2008, repaired: false, address: {number: 100, street: {title: "Happy street"}}},
                    {id: 3, buildedAt: 2020, repaired: false, address: {number: 101, street: {title: "Happy street"}}}
                ],

            governmentBuildings:
                [
                    {
                        type: "HOSPITAL", budget: 200000, staffCount: 200,
                        address: {street: {title: "Central Str"}}
                    },
                    {
                        type: "FIRE-STATION", budget: 500000, staffCount: 1000,
                        address: {street: {title: "South Str"}}
                    }
                ],
            citizenNumber: 1000000
        }
    }
)


test("list of streets titles of governments buildings", () => {
    let streetNames = getStreetTitlesOfGovermentsBuildings(city.governmentBuildings)

    expect(streetNames.length).toBe(2)
    expect(streetNames[0]).toBe("Central Str")
    expect(streetNames[1]).toBe("South Str")
})


test("list of street titles", () => {
    let streets = getStreetTitlesOfHouses(city.houses)

    expect(streets.length).toBe(3)
    expect(streets[0]).toBe("White street")
    expect(streets[1]).toBe("Happy street")
    expect(streets[2]).toBe("Happy street")
})

test("create grating messages for citizens", () => {
    let messages = createGratingMassages(city.houses)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello guys from White street")
    expect(messages[1]).toBe("Hello guys from Happy street")
    expect(messages[2]).toBe("Hello guys from Happy street")

})