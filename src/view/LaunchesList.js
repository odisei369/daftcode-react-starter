import * as React from 'react';
import PropTypes from 'prop-types';
import FilterButtons from './FilterButtons';
import planetImage from '../assets/img/moon.png';
import logoImage from '../assets/img/space_x_logo_bw_centered.png'
import { format } from 'date-fns'
import { RingLoader } from 'react-spinners';

import './LaunchesList.sass';

class LaunchesList extends React.Component { // eslint-disable-line react/prefer-stateless-function

    constructor(props) {
      super(props);
      this.state = {currentNumber: props.from,
                    intervalWorking: true,
                    rocketNameFilter: "",
                    launches: [],
                    loading: true,
                    error: false,};
      this.fetchLaunches("");
      this.handleFilterChange = this.handleFilterChange.bind(this);
    }


    fetchLaunches(rocketName){

      this.setState({ loading: true});
      fetch(`https://api.spacexdata.com/v2/launches/all?rocket_name=${rocketName}`).then(response => {
        if (!response.ok){
          this.setState({ loading: false, error: true});
          //message that we get error
        }
        return response.json();
      }).then(data => {
        console.log(data);
        this.setState({ loading: false, launches: data});
      }).catch(error => this.setState({ loading: false, error: true}))
    }



    get availableRocketNames() {
      const {launches} = this.state;
      //Hard coded rocket names
      return ['Falcon 1', 'Falcon 9', 'Falcon 10', 'Falcon Heavy'];



      if (!launches){
        return [];
      }
      return  launches.map((launch) => launch.rocket.rocket_name)
                                  .filter((elem, pos, arr) => arr.indexOf(elem) == pos);
    }

    get filteredLaunches(){
      const {rocketNameFilter} = this.state;
      const {launches} = this.state;
      if(!rocketNameFilter) return launches || [];

      return launches.filter( launch => launch.rocket.rocket_name === rocketNameFilter );
    }


    lauchDateFromUnix(unixTimestamp){
      const date = new Date(unixTimestamp*1000);
      return format(date, 'DD MMMM YYYY')
    }

    handleFilterChange(value) {
      this.fetchLaunches(value);
      this.setState({ rocketNameFilter: value });
    }

    render() {
      console.log(this.availableRocketNames);
      const {onLaunchClick} = this.props;
      const lauchDateFromUnix = this.lauchDateFromUnix;

      return (

        <div className="LaunchesList">
            <div className="LaunchesList_Header">
              <img className="LaunchesList_moonImage" src="https://i.imgur.com/HZrTBWr.png"/>
              <img className="LaunchesList_logoImage" src="https://i.imgur.com/OjrPHpq.png"/>

                <FilterButtons
                    activeFilter={this.state.rocketNameFilter}
                    options={this.availableRocketNames}
                    onChange={this.handleFilterChange}
                />
            </div>
            <div className="LaunchesList_Spinner">
              <RingLoader
                color={'#666666'}
                loading={this.state.loading}
              />
            </div>
            {this.filteredLaunches.length == 0 && !this.state.loading && !this.state.error? <div className="LaunchesList_notFound">Sorry, no launches found</div> : <div></div>}
            {this.state.error? <div className="LaunchesList_notFound">Something went wrong</div> : <div></div>}
            <ul className="LaunchesList_List">
              {this.filteredLaunches?
                this.filteredLaunches.map(function(launch){
                return (
                  <li
                    onClick={(e) => onLaunchClick(launch, e)}
                    key={launch.launch_date_unix}>
                    <div className="LauchesList_date">{lauchDateFromUnix(launch.launch_date_unix)}</div>
                    <div className="LauchesList_info">
                      <span className="LauchesList_infoTitle">ROCKET: </span>
                      <span className="LauchesList_infoValue">{launch.rocket.rocket_name}</span>
                      <span className="LauchesList_infoTitle">LAUNCH SITE: </span>
                      <span className="LauchesList_infoValue">{launch.launch_site.site_name}</span>
                    </div>

                  </li>
                );
              }) : <div>nothing</div>}
            </ul>
        </div>
      );
    }
  }

  export default LaunchesList;