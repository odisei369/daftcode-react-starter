import * as React from 'react';
import PropTypes from 'prop-types';

import './FilterButtons.sass';

class FilterButtons extends React.Component { // eslint-disable-line react/prefer-stateless-function

    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick (filter , event) {
      this.props.onChange(filter);
      console.log(filter);
    }

    render() {
      const {activeFilter, options} = this.props;
      const handleClick = this.handleClick;

      return (
        <div className='FilterButtons'>
          <div className="FilterButtons_title">
            LAUNCHES 2018
          </div>
          <div className="FilterButtons_filters">
            <a
                    onClick={handleClick.bind(this, "")}
                    className={`FilterButtons_button ${activeFilter == ""? "FilterButtons_button--active" : ""}`}
                    key="ALL ROKETS">
                    ALL ROCKETS
                  </a>
            {options.map(function(rocketName){
                return (
                  <a
                    onClick={handleClick.bind(this, rocketName)}
                    className={`FilterButtons_button ${activeFilter == rocketName? "FilterButtons_button--active" : ""}`}
                    key={rocketName}>
                    {rocketName}
                  </a>
                );
            })}
          </div>
        </div>
      );
    }
  }

  export default FilterButtons;