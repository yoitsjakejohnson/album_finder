import styles from './TopChartsCard.module.css'

function TopChartsCard({ track }) {
    return (
        <article className={styles.song_container}>
            <div>
                <img className={styles.song_img} src={track.album.images[0].url} alt={`${track.name} Album Cover`} />
                <div className={styles.song_text}>
                    <h1><span className={styles.pound}>#</span>1</h1>
                    <h2 className={styles.song_name}>{track.name}</h2>
                    <p className={styles.artist_name}>{track.artists[0].name}</p>
                    <p className={styles.release_date}>{track.album.release_date}</p>
                </div>
            </div>
            <div>
                <button className={`btn ${styles.listen_btn}`}>Listen Now</button>
            </div>
        </article>
    )
}

export default TopChartsCard