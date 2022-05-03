import { Outlet } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header className='bg-amber-900 h-16 flex items-center'>
                <div className='flex flex-col ml-8'>
                    <h1 className='text-white text-2xl font-medium'>Beauty Hats</h1>
                    <h2 className='text-white text-xl font-normal'>HAT & TUXEDO SHOP</h2>
                </div>
            </header>
            <div>
                <Outlet />
            </div>
        </>
    )
}