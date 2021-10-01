
export type streetType = {
    title : string
}

export type addressType = {
    number?: number
    street: streetType
}

export type housesType = {
    id?: number
    buildedAt: number,
    repaired: boolean,
    address: addressType
}

export type governmentBuildingsType = {
    type : "HOSPITAL"| "FIRE-STATION"
    budget: number
    staffCount: number
    address: addressType
}

export type CityType = {
    houses: housesType[]
    governmentBuildings: governmentBuildingsType[]
    citizenNumber: number
}


