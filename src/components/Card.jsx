import React from "react";

const Card = props => {
  const { country } = props;

  const numberFormat = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <div className="card">
      <img src={country.flag} alt="flag" />

      <div className="data_container">
        <ul>
          <li>
            {country.name}
          </li>
          <li>
            {country.capital}
          </li>
          <li>
            {/* Pop : {country.population.toLocaleString()} */}
            Pop : {numberFormat(country.population)}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
