import React from 'react'
import './_header.scss'

export default function Header() {

    const handleClickSwitch = () => {
        alert('For now imagine the screen is dark ^.^ W.I.P ');
    }

    return (
        <header className='header'>
            <h1 className='header__logo'>Where in the world?</h1>

            <div onClick={handleClickSwitch} className='header__switch'>
                <i className="fa fa-moon-o header__switch-icon"></i>
                <p className='header__switch-text'>Dark Mode</p>
            </div>
        </header>
    )
}
