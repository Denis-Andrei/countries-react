import React,{useState} from 'react'
import Countries from '../Countries/Countries';
import Search from '../Search/Search';
import './_main.scss';
import data from '../../data.json';
import DetailedCountry from '../DetailedCountry/DetailedCountry';


let allCountries = data;

export default function Main() {

    const[countries, setCountries] = useState(data);
    const[goBack, setGoBack] = useState(false);

    const countryClicked = (name, goBackBoolean) => {

        let filterCountry = allCountries.filter(country => name === country.name )
        setGoBack(goBackBoolean);
        setCountries(filterCountry);
    }

    const goBackState = (bool) => {
        setGoBack(bool);
        setCountries(data);
    }

    // useEffect(() => {
    //     fetch('https://restcountries.eu/rest/v2/all')
    //     .then(res=>res.json())
    //     .then(data => {
    //         setCountries(data);
    //         allCountries = data;
    //     })
    // }, [])

    const filterCountries = (searchValue, optionValue) => {
        //prevent displaying wrong components
        setGoBack(false);

        //filter countries by region
        let filteredCountriesByRegion = allCountries.filter(country => optionValue !== '' ? country.region.toLowerCase() === optionValue.toLowerCase() : allCountries)

        //filter countries by search value and region
        let filteredCountries = filteredCountriesByRegion.filter(country => searchValue !== '' ? country.name.toLowerCase().includes(searchValue.toLowerCase()) || country.capital.toLowerCase().includes(searchValue.toLowerCase()) : filteredCountriesByRegion )
        
        //update state of the countries
        setCountries(filteredCountries);
    } 

    return (
        <div className='main'>
            <Search filterCountries={filterCountries}/>

            {
                goBack ? <DetailedCountry countries={countries}  goBackState={goBackState}  countryClicked={countryClicked}/> : <Countries countries={countries} countryClicked={countryClicked}/> 
            }
            
            
        </div>
    )
}
