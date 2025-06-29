
import { useState } from 'react';
import './Country.css';
const Country = ({country}) => {
    console.log(country)
    const {name, flags, capital} = country;

    const [visited, setVisited] = useState(false)

    const clickeHandle = () =>{
        setVisited(!visited)
    }

    return (
        <section>
            <div className='avater'>
                <img className='images' src={flags.png} alt="" />
                <h4>Name: {name.common}</h4>
                <p>CApital Name: {capital}</p>
                <button onClick={clickeHandle}>{visited ? 'Visited' : ' Going'}</button>
                <hr />
                {
                    visited ? 'I have visite this Country' : 'I want to visite this country'
                }
            </div>
        </section>
    );
};

export default Country;
