export class WeatherData {
    description: string;
    icon: string;
}

export class Model {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
    weatherDatas: WeatherData[] = [];
}