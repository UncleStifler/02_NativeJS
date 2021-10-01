import {governmentBuildingsType, housesType} from "../02/02_02";

export const getStreetTitlesOfGovermentsBuildings = (buildings: governmentBuildingsType[]) => {
    return buildings.map(t => t.address.street.title)
}

export const getStreetTitlesOfHouses = (houses: housesType[]) => {
    return houses.map(h =>  h.address.street.title)
}

export const createGratingMassages = (houses: housesType[]) => {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}