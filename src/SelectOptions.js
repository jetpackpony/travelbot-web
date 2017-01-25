import React, { Component } from 'react';
import './SelectOptions.scss';

class SelectOptions extends Component {
  constructor(props) {
    super(props);
    this.getClickHandler = this.getClickHandler.bind(this);
  }

  getClickHandler(option) {
    return () => {
      this.props.handleClick(option);
    };
  }

  render() {
    if (!this.props.options) {
      return null;
    }

    const options = this.props.options.map((opt, i) => {
      return (
        <div key={i} className="option" onClick={this.getClickHandler(opt)}>
          {opt.name}
        </div>
      );
    });

    return (
      <div className="select-options">
        {options}
      </div>
    )
  }
}

export default SelectOptions;
