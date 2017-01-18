import React from 'react';
import './SelectOptions.scss';

export default function(props) {
  if (!props.options) {
    return null;
  }

  const options = props.options.map((opt, i) => {
    return (
      <div key={i} className="option">{opt.name}</div>
    );
  });

  return (
    <div className="select-options">
      {options}
    </div>
  )
}
