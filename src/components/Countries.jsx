import { useEffect, useState } from "react";
import Country from './Country'


const Countries = () => {
    const [countries, setCountries] = useState([]);

    // this state use for mark visited country list
    const [visitedCountry, setVisitedCountry] = useState([]);

    // this useEffect use for data fetch
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/region/asia')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[]);

    // this handler use for create a list of the mark visited country
    const handleVisitedCountry = country =>{
        const newVisitedCountry = [...visitedCountry, country];
        console.log([...visitedCountry, country])
        setVisitedCountry(newVisitedCountry)
        console.log(country)
    }

    return (
        <div>
            <h2 className="title">Total Aisan Country: {countries.length}</h2>
            <div>
                <h4 className="title">Total Visited Country: {visitedCountry.length}</h4>
                <ul>
                    {
                        visitedCountry.map((country) => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            {/* Country box details show here */}
            <div className="box">
                {
                    countries.map((country) => <Country 
                    key={country.cca3} 
                    handleVisitedCountry = {handleVisitedCountry}
                    country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;