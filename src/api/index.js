import axios from 'axios';


const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
    params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359',
    },
    headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': 'cbf1619c9dmsh441aabcf084ab6cp1253c7jsnc7b61d3684a5'
    }
};

export const getPlacesData = async ( sw, ne ) => {
    try {
        const { data: { data } } = await axios.get(URL, {
            params: {
                bl_latitude:  sw.lat,
                tr_latitude:  ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': 'cbf1619c9dmsh441aabcf084ab6cp1253c7jsnc7b61d3684a5'
            }
        });
        return data;

    } catch (error) {
        console.log(error);
    }
};