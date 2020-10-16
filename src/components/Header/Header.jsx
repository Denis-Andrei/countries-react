import React from 'react'
import './_header.scss'

export default function Header() {
    return (
        <header className='header'>
            <h1 className='header__logo'>Where in the world?</h1>

            <div className='header__switch'>
                <i className="fa fa-moon-o header__switch-icon"></i>
                <p className='header__switch-text'>Dark Mode</p>
            </div>
        </header>
    )
}
