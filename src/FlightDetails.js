import React from 'react';

const padTime = (time) => time.toString().length > 1 ? time.toString() : `0${time}`;
const getHoursMinutes = (time) => `${padTime(time.getHours())}:${padTime(time.getMinutes())}`

const getStopsString = (stops) => {
  let stopsString = stops.length === 0 ? "direct" : `${stops.length} stop`;
  if (stops.length > 1) { stopsString += "s"; }
  stopsString += ": " + stops.map((stop) => stop.Name + ", ");
  return stopsString.substring(0, stopsString.length - 2);
};

export default function(props) {
  const dep = new Date(props.flight.departure);
  const arr = new Date(props.flight.arrival);

  let days_en_route = Math.ceil((arr - dep) / 1000 / 3600 / 24)
  let departure = getHoursMinutes(dep);
  let arrival = getHoursMinutes(arr);
  if (dep.getDate() !== arr.getDate()) {
    arrival += ` (+${days_en_route})`;
  }

  const stopsString = getStopsString(props.flight.stops);

  return (
    <div className="details">
      <div className="time">
        {departure} - {arrival}
      </div>
      <div className="stops">{stopsString}</div>
    </div>
  );
};
