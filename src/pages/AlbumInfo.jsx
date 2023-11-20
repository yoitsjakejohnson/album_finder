import { useParams } from 'react-router-dom';
import AlbumDetails from '../components/AlbumDetails';

function AlbumInfo ()
{
    const { albumId } = useParams();

    // Log albumId to the console to check its value
    console.log( 'AlbumId:', albumId );

    return (
        <div>
            <h1>Album Info</h1>

            {/* Render other AlbumInfo content */ }
            <p>This is the AlbumInfo page.</p>
            <p>album</p>

            {/* Render AlbumDetails component when albumId is present */ }
            { albumId && <AlbumDetails /> }

        </div>
    );
}

export default AlbumInfo;
