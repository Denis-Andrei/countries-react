import React from 'react'
import Country from '../Country/Country'
import './_countries.scss'

export default function Countries({countries}) {

    const formatNumber = (number) => {
        return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    return (
        <div className='countries'>
            {
            countries.map(country=> 
                <Country 
                    key={country.name}
                    name={country.name}
                    flag={country.flag}
                    capital={country.capital}
                    region={country.region}
                    population={formatNumber(country.population)}
                />)
            }
        </div>
    )
}