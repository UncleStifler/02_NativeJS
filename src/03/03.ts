import {StudentType} from "../02/02";
import {CityType, governmentBuildingsType, housesType} from "../02/02_02";

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies
        .push(
            {id: new Date().getTime(), title: skill}
        )
}

export const makeStudentActive = (stud: StudentType) => {
    stud.isActive = true
}

export const changeStudentCity = (stud: StudentType) => {
    stud.address.city.title = "New York"
}

export const changeStudentCountry = (stud: StudentType) => {
    stud.address.city.countryTitle = "USA"
}

export const doesStudentLiveIn = (stud: StudentType, countryName: string) => {
    return stud.address.city.countryTitle === countryName
}

export const addMoneyToBudget = (buildings: governmentBuildingsType, budget: number) => {
    buildings.budget += budget
}

export const repairHouse = (house: housesType) => {
    house.repaired = true
}

export const toFareStaff = (building: governmentBuildingsType, staffCountToFire: number) => {
    building.staffCount -= staffCountToFire
}

export const toHireStaff = (building: governmentBuildingsType, staffCountToFire: number) => {
    building.staffCount += staffCountToFire
}

export function createMessage(city: CityType) {
    return "Hello New York citizens"
}