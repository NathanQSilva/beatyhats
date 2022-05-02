import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import styles from './menu.module.scss'

export default function Menu() {
    const routes = [{
        label: 'Inicio',
        to: '/'
    },{
        label: 'Produtos',
        to: '/produtos'
    },{
        label: 'Contato',
        to: '/contato'
    },{
        label: 'Carrinho',
        to: '/carrinho'
    },{
        label: 'Login',
        to: 'login'
    }]

    return (
        <nav className={styles.menuContainer}>
            <img src={Logo} alt="Logo Beauty Hats" />
            <ul>
                {routes.map((route, index) => (
                    <li key={index}>
                        <Link to={route.to}>
                            {route.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}