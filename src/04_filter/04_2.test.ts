import {CityType} from "../02/02_02";
import {demolishedHousesOnTheStreet, getBuildingWithStaffCountGreatThen} from "./04_2";


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


// demolish houses
test.skip("Houses should be destroyed", () => {
    demolishedHousesOnTheStreet(city, 'Happy street')
    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})


test.skip("buildings with correct staff count", () => {
    let buildings = getBuildingWithStaffCountGreatThen(city.
        governmentBuildings, 500)

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe(`FIRE-STATION`)
})
