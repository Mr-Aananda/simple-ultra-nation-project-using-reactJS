import React from 'react';

const SelectedCountries = (props) => {
    const selectedCountries = props.selectedCountries;

    // let totalPopulation = 0;
    // for (let i = 0; i < selectedCountries.length; i++) {
    //     const country = selectedCountries[i];
    //     totalPopulation=totalPopulation+country.population

    // }
//same work with reduce
    const totalPopulation = selectedCountries.reduce((sum, country) => sum+country.population , 0)


    return (
        <div>
            <h2>Selected Countries : {selectedCountries.length}</h2>
            <h5>Total Population: {totalPopulation }</h5>

        </div>
    );
};

export default SelectedCountries;