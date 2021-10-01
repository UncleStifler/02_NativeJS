import {CityType, governmentBuildingsType} from "../02/02_02";

export const demolishedHousesOnTheStreet = (city: CityType, street: string) => {
        city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export const getBuildingWithStaffCountGreatThen = (buildings: governmentBuildingsType[], number: number) => {
        return buildings.filter(b => b.staffCount > 500)
}