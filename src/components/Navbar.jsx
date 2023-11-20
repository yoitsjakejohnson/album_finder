import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';
import { useState } from "react";


function Navbar ()
{
    const [ mobileMenuOpen, setMobileMenuOpen ] = useState( false );

    function handleMobileMenuToggle ()
    {
        setMobileMenuOpen( !mobileMenuOpen );
    }

    return (
        <header>
            <nav className={ styles.navbar }>
                <div className={ styles.navcenter }>
                    <div className={ styles.navheader }>
                        <NavLink to='/' className={ styles.navlogo }>
                            AlbumFinder
                        </NavLink>
                        <button type="button" className={ styles.navtoggle } id="nav-toggle"
                            onClick={ handleMobileMenuToggle }>
                            <span className={ styles.line }></span>
                            <span className={ styles.line }></span>
                            <span className={ styles.line }></span>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;