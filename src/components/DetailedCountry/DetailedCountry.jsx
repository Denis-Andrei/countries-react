import React from 'react';
import './_detailedCountry.scss';
import data from '../../data.json';


export default function DetailedCountry({goBackState, countries, countryClicked}) {

    const handleClickBtn = (bool) => {
        goBackState(!bool);
    }

    const handleClickNeighbour = (e) => {
        let countryName = e.target.innerHTML.trim();
        countryClicked(countryName, true)
    }

    const formatNumber = (number) => {
        return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    return (
        <div>
            {
                countries.map(country => {
                    return(
                    <div key={country.name} className='detailedCountry'>
                        
                        <button onClick={handleClickBtn} className='detailedCountry__btn '><i className="fa fa-long-arrow-left detailedCountry__btn-icon" aria-hidden="true"></i>Back</button>

                        <div className="detailedCountry__card">
                            <div className="detailedCountry__card-left">
                                <img className='detailedCountry__flag' src={country.flag} alt=""/>
                            </div>

                            <div className="detailedCountry__card-right">
                                <h2 className='detailedCountry__name'>{country.name}</h2>

                                <div className="detailedCountry__info">
                                    <div className="detailedCountry__info-left">    
                                        <p><span className='detailedCountry__info-title'>Native Name: </span>{country.nativeName}</p>
                                        <p><span className='detailedCountry__info-title'>Population: </span>{formatNumber(country.population)}</p>
                                        <p><span className='detailedCountry__info-title'>Region: </span>{country.region}</p>
                                        <p><span className='detailedCountry__info-title'>Sub Region: </span>{country.subregion}</p>
                                        <p><span className='detailedCountry__info-title'>Capital: </span>{country.capital}</p>
                                    </div>
                                    <div className="detailedCountry__info-right"> 
                                        <p><span className='detailedCountry__info-title'>Top Level Domain: </span>{country.topLevelDomain}</p>
                                        <p><span className='detailedCountry__info-title'>Currencies: </span>{country.currencies.map(currency => currency.name)}</p>
                                        <p><span className='detailedCountry__info-title'>Languages: </span>{country.languages.map((language,index) => index === country.languages.length -1 ? ` ${language.name}` : ` ${language.name},`)}</p>
                                    </div>
                                </div>

                                <div className='detailedCountry__neighbours'><span className='detailedCountry__info-title'>Border Countries: </span>
                                    <ul className='detailedCountry__neighbours-list'>
                                        {
                                            country.borders.length !== 0 
                                            ?
                                            country.borders.map((border,index) => {
                                                let nameOfCountry  = data.find(country=> country.alpha3Code === border)
                                                return <li onClick={handleClickNeighbour} key={index} className='detailedCountry__neighbours-item detailedCountry__btn' >{nameOfCountry.name}</li>
                                            })
                                            :
                                            <p>None</p>
                                        }
                                    </ul>
                                </div>
                            </div>


                            
                        </div>
                    </div>
                    )
                })
            
        }
    </div>
    )
}
