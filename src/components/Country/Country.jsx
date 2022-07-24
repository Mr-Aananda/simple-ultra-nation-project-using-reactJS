import React from 'react';

const Country = (props) => {
    console.log(props.country);
    const { name, population, region, flag } = props.country;
    const flagStyle = { height: '60px' }
    const countryStyle = { border: '1px solid gray', margin: '10px', padding: '10px' }
    const handleAddCountry = props.handleAddCountry;

    return (
        <div style={countryStyle}>
            <h2>Country: {name}</h2>
            <img style={flagStyle} src={flag} alt="" />
            <h4>Population: {population}</h4>
            <p>Region: {region}</p>
            <button onClick={() => handleAddCountry(props.country)}>Add country</button>
        </div>
    );
};

export default Country;