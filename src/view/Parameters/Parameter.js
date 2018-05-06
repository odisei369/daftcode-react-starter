import * as React from 'react';
import PropTypes from 'prop-types';
import './Parameter.sass';

class Parameter extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return <div className="Parameter">
             <div className="Parameter_Key">{this.props.parameter_key}:</div>
             <div className="Parameter_Value">{this.props.parameter_value}</div>
           </div>
  }
}

export default Parameter;