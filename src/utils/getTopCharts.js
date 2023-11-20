import axios from 'axios';
import getAccessToken from '../utils/spotifyApi'

const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';

const getTopCharts = async () => {
    const accessToken = await getAccessToken()
    try {
        const response = await axios.get(`${SPOTIFY_API_BASE_URL}/charts/top`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching top charts:', error);
        if (error.response) {
            console.error('Response data:', error.response.data);
        }
        return null;
    }

};

export default getTopCharts;
