import React from 'react'
import { Cart } from './Cart'

export const NavBar = () => {
    return (

        <nav className='nav'>
            <ul className='nav-menu'>
                <li><a className='nav-link' href='#'>Inicio</a></li>
                <li><a className='nav-link' href='#'>Celulares</a></li>
                <li><a className='nav-link' href='#'>Computadoras</a></li>
                <li><a className='nav-link' href='#'>Musica</a></li>
            </ul>
        </nav>

    )
}
