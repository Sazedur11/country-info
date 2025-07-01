
import { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountry}) => {
    const {name, flags, capital} = country;
    console.log(country)
    const [visited, setVisited] = useState(false)

    const handleClicke = () =>{
        setVisited(!visited)
    }

    return (
        <div className={`avater ${visited && 'visited'}`}>
            <img className='images' src={flags.png} alt="" />
            <h3>Country Name: {name.common}</h3>
            <p>Capitals Name: {capital?.[0] || "N/A"}</p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={handleClicke}>{visited ? 'Visited' : 'Going'}</button>
            {
                visited ? 'I have visited this Country' : 'I want to visite this COuntry'
            }
        </div>
    );
};

export default Country;