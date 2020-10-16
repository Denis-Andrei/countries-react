import React from 'react'
import Country from '../Country/Country'
import './_countries.scss'

export default function Countries({countries}) {
    return (
        <div className='countries'>
            {
            countries.map(country=> 
                <Country 
                    name={country.name}
                    flag={country.flag}
                    capital={country.capital}
                    region={country.region}
                    population={country.name}
                />)
            }
        </div>
    )
}