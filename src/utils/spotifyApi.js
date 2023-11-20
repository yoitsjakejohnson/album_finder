import axios from 'axios';

const getAccessToken = async () =>
{
    const clientId = import.meta.env.VITE_REACT_APP_SPOTIFY_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_REACT_APP_SPOTIFY_CLIENT_SECRET;

    try
    {
        const response = await axios.post(
            'https://accounts.spotify.com/api/token',
            'grant_type=client_credentials',
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: `Basic ${ btoa( `${ clientId }:${ clientSecret }` ) }`,
                },
            }
        );

        return response.data.access_token;
    } catch ( error )
    {
        console.error( 'Error fetching access token:', error );
        return null;
    }
};

export default getAccessToken;
