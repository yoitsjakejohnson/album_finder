import PropTypes from 'prop-types'; // Import PropTypes
import styles from './AlbumCard.module.css';

function AlbumCard ( { album } )
{
    return (
        <div className={ styles.albumcard }>
            <div className={ styles.albumcardimg }>
                <img src={ album.images[ 0 ].url } alt={ album.name } />
            </div>
            <div className={ styles.albumcardinfo }>
                <h1>{ album.name }</h1>
                <h2>{ album.artists && album.artists.length > 0 && album.artists[ 0 ].name }</h2>
                <p>{ album.release_date }</p>
            </div>
        </div>
    );
}

// Define prop types
AlbumCard.propTypes = {
    album: PropTypes.shape( {
        id: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(
            PropTypes.shape( {
                url: PropTypes.string.isRequired,
            } )
        ).isRequired,
        name: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        artists: PropTypes.arrayOf(
            PropTypes.shape( {
                name: PropTypes.string.isRequired,
            } )
        ).isRequired,
    } ).isRequired,
};

export default AlbumCard;
