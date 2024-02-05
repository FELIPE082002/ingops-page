import { NavbarMain } from '@/layouts';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

export function home() {
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <NavbarMain />
                <Outlet />
                <Footer />
                <div className='p-1'>
                    Copyright © 2024 ingops-colombia.web.app, Todos los derechos Reservados.
                </div>
            </div>
        </>
    )
}

export default home