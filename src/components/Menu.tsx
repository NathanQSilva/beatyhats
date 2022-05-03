import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

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
        <nav className='flex flex-row justify-between items-center bg-amber-50'>
            <img src={Logo} alt="Logo Beauty Hats" className='h-16 ml-8' />            
            <ul className='flex flex-row justify-between items-center mr-8 w-auto'>
                {routes.map((route, index) => (
                    <li key={index} className='ml-8'>
                        <Link className='text-black cursor-pointer text-xl font-light transition-all duration-100 hover:border-b-2 border-amber-900 ' to={route.to}>
                            {route.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}