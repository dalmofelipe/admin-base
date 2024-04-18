import { City, Weather } from "../types/clima-tempo.type";

const CLIMA_TEMPO_TOKEN = process.env.CLIMA_TEMPO_TOKEN

class ClimaTempoService {

    private BASE_URL = "http://apiadvisor.climatempo.com.br/api/v1"
    
    async getCityById(cityId: number) {
        let url = `${this.BASE_URL}/locale/city:${cityId}&token=${CLIMA_TEMPO_TOKEN}`

        return await fetch(url)
            .then(response => response.json())
            .catch(error => console.error(error));
    }

    async getCityByName(cityName: string, state: string) : Promise<City[]> {
        let url = `${this.BASE_URL}/locale/city?name=${cityName}&state=${state}&token=${CLIMA_TEMPO_TOKEN}`

        let result: City[] = await fetch(url)
            .then(response => response.json())
            .catch(error => console.error(error));

        return result
    }

    async getTemperatura(cityId: number) : Promise<Weather> {
        let url = `${this.BASE_URL}/climate/temperature/locale/${cityId}?token=${CLIMA_TEMPO_TOKEN}`

        const result: Weather =  await fetch(url)
            .then(response => response.json())
            .catch(error => console.error(error));
            
        return result;
    }
}

export default ClimaTempoService