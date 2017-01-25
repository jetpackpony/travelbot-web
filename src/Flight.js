import React from 'react';
import FlightDetails from './FlightDetails';

export default function(props) {
  const flight = props.flight;
  return (
    <div className="flight">
      <div className="image">
        <img src={flight.carriers[0].ImageUrl} alt={flight.carriers[0].Name} />
      </div>
      <FlightDetails flight={flight} />
      <div className="buy-button">
        <a href={flight.deeplink}>Buy for ${Math.ceil(flight.price)}</a>
      </div>
    </div>
  );
};
