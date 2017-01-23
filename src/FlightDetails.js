import React from 'react';

export default function(props) {
  const stops = props.flight.stops.length === 0 ? "direct" : `${props.flight.stops.length} stops`;
  return (
    <div className="details">
      <div className="time">
        {props.flight.departure} - {props.flight.arrival}
      </div>
      <div className="stops">{stops}</div>
    </div>
  );
};
