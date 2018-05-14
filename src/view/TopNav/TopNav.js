import * as React from 'react';
import PropTypes from 'prop-types';
import './TopNav.sass';
import arrow from "../../assets/img/arrow_left.png";
import image from "../../assets/img/space_x_logo_bw_centered.png"

class TopNav extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return <div className="TopNav">
            <div onClick={this.props.onBackClick}>
              <img className="TopNav_arrow" src="https://i.imgur.com/P4rmqME.png"/>
              <div className="TopNav_GoBack">
                GO BACK
              </div>
            </div>

            <img className="TopNav_image" src="https://i.imgur.com/OjrPHpq.png"/>
           </div>
  }
}

export default TopNav;