import * as React from 'react';
import PropTypes from 'prop-types';
import './TopNav.sass';

class TopNav extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return <div className="TopNav">
            <div className="TopNav_GoBack">GO BACK</div>
            <img className="TopNav_image" src={require("../assets/img/space_x_logo_bw_centered.png")}/>
           </div>
  }
}

export default TopNav;