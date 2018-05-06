import * as React from 'react';
import PropTypes from 'prop-types';
import './Parameters.sass';
import Parameter from './Parameter';

class Parameters extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){

    const rocket = this.props.rocket;
    const launchSite = this.props.launchSite;
    if (rocket){
        return <div className="Parameters">
        <div className="Parameters_ColumnParameters">
           <Parameter parameter_key="NAME" parameter_value={rocket.name}/>
           <Parameter parameter_key="COMPANY" parameter_value={rocket.company}/>
           <Parameter parameter_key="HEIGHT" parameter_value={`${rocket.height.meters}M / ${rocket.height.feet}FT `}/>
           <Parameter parameter_key="DIAMETER" parameter_value={`${rocket.diameter.meters}M / ${rocket.diameter.feet}FT`}/>
           <Parameter parameter_key="MASS" parameter_value={`${rocket.mass.kg}KG / ${rocket.mass.lb}LB`}/>
         </div>
         <div className="Parameters_ColumnParameters">
           <Parameter parameter_key="FIRST FLIGHT" parameter_value={rocket.first_flight}/>
           <Parameter parameter_key="COUNTRY" parameter_value={rocket.country}/>
           <Parameter parameter_key="SUCCESS RATE" parameter_value={`${rocket.success_rate_pct}%`}/>
           <Parameter parameter_key="COST PER LAUNCH" parameter_value={`$${rocket.cost_per_launch}`}/>
         </div>
      </div>
    }
    if (launchSite){
      return <div className="Parameters">
      <div className="Parameters_ColumnParameters">
         <Parameter parameter_key="NAME" parameter_value={launchSite.full_name}/>
       </div>
       <div className="Parameters_ColumnParameters">
         <Parameter parameter_key="FIRST FLIGHT" parameter_value={launchSite.location.name}/>
       </div>
    </div>
    }
  }
}

export default Parameters;