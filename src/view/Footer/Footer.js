import * as React from 'react';
import PropTypes from 'prop-types';
import './Footer.sass';

class Footer extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return (
    <div className="Footer">
        <div className="Footer_elem">FOLLOW SPACEX</div>
        <div className="Footer_elem">|</div>
        <a href="#" className="Footer_elem">TWITTER</a>
        <a href="#" className="Footer_elem">YOUTUBE</a>
        <a href="#" className="Footer_elem">FLICKR</a>
        <a href="#" className="Footer_elem">INSTAGRAM</a>
        <div className="Footer_elem">2018 SPACE EXPLORATION TECHNOLOGIES CORP. </div>


    </div>)
  }
}

export default Footer;