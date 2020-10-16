import React from 'react'
import './_search.scss';

export default function Search({getSearchValue}) {

    const handleChange = (e) => {
        console.log(e.target.value)
        getSearchValue(e.target.value);
    }

    return (
        <div className='search'>
            <div className='search__box'>
                <i class="fa fa-search search__icon" aria-hidden="true"></i>
                <input onChange={handleChange} className='search__input' type="text" placeholder='Search for a country...'/>
            </div>

            <select className='search__select'>
                <option>Filter by region</option>
                <option>Africa</option>
                <option>America</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
            </select>
       
            
          
        </div>
    )
}
