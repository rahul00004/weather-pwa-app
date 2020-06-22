import axios from 'axios';


const URL ='https://api.openweathermap.org/data/2.5/weather';
const API_KEY ='9883ddb00120a9a21c485e31fafece2b';


export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL,{
        params:{
            q:query,
            units:'metric',
            APPID:API_KEY,
        }
    })
    return data;

}
