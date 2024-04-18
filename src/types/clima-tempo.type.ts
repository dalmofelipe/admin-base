type City = {
    id: number
    name: string
    state: string
    country: string
}

type ClimateTemperature = {
    date: Date
    climate_temperature: {
        last_year: {
            min: number
            max: number
        },
        normal: {
            min: number
            max: number
        },
        forecast: {
            min: number
            max: number
        }
    }
}

type Weather = {
    id: number
    name: string
    state: string
    country: string
    data: ClimateTemperature[]
}

export type { Weather, ClimateTemperature, City };