export type LocalCityType = {
    title: string
    countryTitle: string
}

export type TechnologiesType = {
    id: number
    title: string
}

export type AddressType = {
    streetTitle: string
    city: LocalCityType
}


export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechnologiesType[]
}


export const student: StudentType = {
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


console.log(student.technologies[3].title)
