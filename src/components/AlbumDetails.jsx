import { useLocation, useParams } from 'react-router-dom';

function AlbumDetails ()
{
    const { albumId } = useParams();
    const location = useLocation();
    const { state } = location;

    // Ensure that state is available and contains the necessary details
    if ( !state || !state.albumId )
    {
        return <p>No album details found</p>;
    }

    const { albumName, albumImage } = state;

    return (
        <div>
            <h1>Album Details</h1>
            <p>Album ID: { albumId }</p>
            <p>Album Name: { albumName }</p>
            <img src={ albumImage } alt={ albumName } />
            {/* Render other album details here */ }
        </div>
    );
}

export default AlbumDetails;
