import React from 'react';
import Flight from './Flight';

export default function(props) {
  const flights = props.flights.itineraries.map((flight, i) => {
    return (
      <Flight key={i} flight={flight} />
    );
  });

  return (
    <div className="flights-list">{flights}</div>
  );
};
