import * as React from 'react';
import PropTypes from 'prop-types';
import './LaunchDetails.sass';
import { format } from 'date-fns'

import LaunchCounter from './LaunchCounter/LaunchCounter';
import Parameter from './Parameters/Parameter';
import Parameters from './Parameters/Parameters';

class LaunchDetails extends React.Component{
  constructor(props) {
    super(props);
  }

  lauchDateFromUnix(unixTimestamp){
    const date = new Date(unixTimestamp*1000);
    return format(date, 'DD MMMM YYYY')

  }

  render() {
      const launch = this.props.launch
      const rocket = this.props.rocket
      const launchSite = this.props.launchSite
      return (
        <div className="LaunchDetails">
          <div className="LaunchDetails_DateName">
            <div className="LaunchDetails_date">{this.lauchDateFromUnix(launch.launch_date_unix)}</div>
            <div className="LaunchDetails_name">{rocket.name}</div>
            <LaunchCounter from={Math.round((new Date()).getTime() / 1000)} to={launch.launch_date_unix}/>
            <div className="LaunchDetails_icon"><img src={launch.links.mission_patch}/></div>
          </div>
          <div className="LaunchDetails_Details">
            <div className="LaunchDetails_Header LaunchDetails_Header--first">DETAILS</div>
            <div className="LaunchDetails_info">{launch.details}</div>
            <div className="LaunchDetails_Header">ROCKET</div>
            <Parameters rocket={rocket}/>
            <div className="LaunchDetails_info">{rocket.description}</div>
            <div className="LaunchDetails_Header">LAUNCH PAD</div>
            <Parameters launchSite={launchSite}/>
            <div className="LaunchDetails_info">{launchSite.details}</div>
          </div>
        </div>
      );
    }
}

LaunchDetails.propTypes = {
  launch: PropTypes.object,
  launchSite: PropTypes.object,
  rocket: PropTypes.object
};



export default LaunchDetails;