import AlbumCard from './AlbumCard'
import styles from './AlbumCardList.module.css'
import PropTypes from 'prop-types'

function AlbumCardList({ albums }) {
    console.log(albums)
    return (
        <>
            <section id={styles.albumdisplay}>
                <div className={styles.albumdisplaycontainer}>
                    {albums.map((album) => (
                        <AlbumCard key={album.id} album={album} />
                    ))}
                </div>
            </section>
        </>
    )
}

AlbumCardList.propTypes = {
    albums: PropTypes.array.isRequired
}

export default AlbumCardList