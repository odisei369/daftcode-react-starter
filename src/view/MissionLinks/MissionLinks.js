import * as React from 'react';
import PropTypes from 'prop-types';
import './MissionLinks.sass';

class MissionLinks extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    const launch = this.props.launch;
    return (
    <div className="MissionLinks">
        <img className="MissionLinks_image" src={require("../../assets/img/rocket.png")}/>
        <div className="MissionLinks_container">
            <div className="MissionLinks_title">MISSION LINKS</div>
            <div className="MissionLinks_buttons">
                <a href={launch.links.reddit_campaign} className="MissionLinks_button">REDDIT CAMPAIGN</a>
                <a href={launch.links.presskit} className="MissionLinks_button">PRESSKIT</a>
                <a href={launch.links.video_link} className="MissionLinks_button">MISSION VIDEO</a>

            </div>
        </div>
    </div>)
  }
}

export default MissionLinks;