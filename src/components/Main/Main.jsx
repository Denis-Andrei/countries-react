import React,{useState, useEffect} from 'react'
import Countries from '../Countries/Countries';
import Search from '../Search/Search';
import './_main.scss';


let allCountries;

export default function Main() {

    const[countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res=>res.json())
        .then(data => {
            setCountries(data);
            allCountries = data;
        })
    }, [])

    const getSearchValue = (value) => {
        let filteredCountries = allCountries.filter(country => country.name.toLowerCase().includes(value.toLowerCase()) || country.capital.toLowerCase().includes(value.toLowerCase()))
        console.log('FC',filteredCountries)
        setCountries(filteredCountries);
    } 

    return (
        <div className='main'>
            <Search getSearchValue={getSearchValue}/>
            <Countries countries={countries}/>
        </div>
    )
}
