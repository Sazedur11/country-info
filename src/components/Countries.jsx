import { useEffect, useState } from "react";
import Country from "./Country";
import '../components/Country.css';

const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/region/asia')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    return (
        <div>
            <h3 className="title">Totall Asia Countries: {countries.length}</h3>
            <section className="box">
                {
                    countries.map(country => <Country key={country.cca3} country={country}></Country>)
                }
            </section>
        </div>
    );
};

export default Countries;