import React, {useState} from 'react';
import './_search.scss';

export default function Search({filterCountries}) {

    const [region, setRegion] = useState('')
    const [searchValue, setSearchValue] = useState('')

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        filterCountries(searchValue, region);
    }

    const handleOptionChange = (e) => {
        setRegion(e.target.value);
        setSearchValue('');
        filterCountries('', e.target.value);
    }

    return (
        <div className='search'>
            <div className='search__box'>
                <i className="fa fa-search search__icon" aria-hidden="true"></i>
                <input value={searchValue}  onChange={handleChange} className='search__input' type="text" placeholder='Search for a country...'/>
            </div>

            <select onChange={handleOptionChange} className='search__select'>
                <option className='search__select-option' value=''>Filter by region</option>
                <option className='search__select-option' value='africa'>Africa</option>
                <option className='search__select-option' value='americas'>Americas</option>
                <option className='search__select-option' value='asia'>Asia</option>
                <option className='search__select-option' value='europe'>Europe</option>
                <option className='search__select-option' value='oceania'>Oceania</option>
            </select>
       
            
          
        </div>
    )
}
