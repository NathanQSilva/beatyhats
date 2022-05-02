import styles from './header.module.scss'
import { Outlet } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header className={styles.headerContainer}>
                <div>
                    <h1>Beauty Hats</h1>
                    <h2>HAT & TUXEDO SHOP</h2>
                </div>
            </header>
            <div>
                <Outlet />
            </div>
        </>
    )
}