import navStyles from '../styles/Nav.module.css';

import Link from 'next/link'
//similar to react-router-dom

function Nav() {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
