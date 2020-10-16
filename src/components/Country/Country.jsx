import React from 'react'
import './_country.scss';

export default function Country({name, capital,population,region,flag}) {
    return (

            
    <div className='country'>
            <img className='country__flag' src={flag} alt=""/>

            <div className='country__info'>
                <h2 className='country__name'>{name}</h2>
                <p className='country__population'><span className='country__bold-text'>Population: </span>{population}</p>
                <p className='country__region'><span className='country__bold-text'>Region: </span>{region}</p>
                <p className='country__capital'><span className='country__bold-text'>Capital: </span>{capital}</p>
            </div>
        </div>
            
            
            

    )
}
