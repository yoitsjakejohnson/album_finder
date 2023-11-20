import { useEffect, useState } from 'react';
import AlbumCardList from '../components/AlbumCardList';
import SearchForm from '../components/SearchForm';
import styles from './Landing.module.css';
import axios from 'axios';
import getAccessToken from '../utils/spotifyApi';
import { BeatLoader } from 'react-spinners';

function Landing ()
{
    const [ albums, setAlbums ] = useState( [] );
    const [ loading, setLoading ] = useState( false );
    const artistsList = [
        'Jelly Roll',
        'Taylor Swift',
        'Doja Cat',
        'SZA',
        'Zach Bryan',
        'Luke Combs',
        'Morgan Wallen',
        'Drake',
        'Gunna',
        'Chris Stapleton',
        'Post Malone',
        'Travis Scott',
        'Warren Zeiders',
        'Nate Smith',
        'Hardy',
        'Lainey Wilson',
        'Dylan Scott',
        'Dustin Lynch',
        'Polo G',
    ];

    const getRandomArtist = () =>
    {
        const randomIndex = Math.floor( Math.random() * artistsList.length );
        return artistsList[ randomIndex ];
    };

    const handleSearch = async ( searchInput ) =>
    {
        setLoading( true );
        const accessToken = await getAccessToken();

        if ( accessToken )
        {
            try
            {
                const artistResponse = await axios.get(
                    `https://api.spotify.com/v1/search?q=${ searchInput }&type=artist`,
                    {
                        headers: {
                            Authorization: `Bearer ${ accessToken }`,
                        },
                    }
                );

                const artist = artistResponse.data.artists.items[ 0 ];

                if ( artist )
                {
                    try
                    {
                        const albumsResponse = await axios.get(
                            `https://api.spotify.com/v1/artists/${ artist.id }/albums`,
                            {
                                headers: {
                                    Authorization: `Bearer ${ accessToken }`,
                                },
                            }
                        );

                        const albums = albumsResponse.data.items;
                        setAlbums( albums );
                    } catch ( error )
                    {
                        console.error( 'Error fetching albums:', error );
                    }
                } else
                {
                    console.log( 'No artist found in response' );
                    setAlbums( [] );
                }
            } catch ( error )
            {
                console.error( 'Error fetching artist data:', error );
            } finally
            {
                setTimeout( () =>
                {
                    setLoading( false );
                }, 1500 );
            }
        }
    };

    useEffect( () =>
    {
        const fetchDefaultAlbums = async () =>
        {
            const defaultSearchInput = getRandomArtist();
            await handleSearch( defaultSearchInput );
        };

        fetchDefaultAlbums();
    }, [] );

    return (
        <>
            <section id={ styles.landingsearch }>
                <div className="container">
                    <h1>
                        find any album on <span className={ styles.spotifytext }>spotify</span>
                    </h1>
                    <p>search by artist name to find albums</p>
                    <SearchForm onSearch={ handleSearch } albums={ albums } />
                    { loading ? (
                        <div className={ styles.spinnerContainer }>
                            <BeatLoader color={ '#1DB954' } loading={ loading } size={ 50 } />
                        </div>
                    ) : (
                        <AlbumCardList albums={ albums } />
                    ) }
                </div>
            </section>
        </>
    );
}

export default Landing;
