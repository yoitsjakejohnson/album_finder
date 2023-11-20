import styles from './Footer.module.css'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className='container'>
                <p className={styles.copyright}>&copy; copyright <span>{currentYear}</span>.
                    AlbumFinder. all rights reserved</p>
                <p className={styles.credit}>designed &amp; developed by <a href="#">jake johnson</a></p>
            </div>
        </footer>
    )
}

export default Footer