import { hot } from 'react-hot-loader';
import * as React from 'react';

import './styles/theme.sass';

import launch from 'assets/launch.json';
import launchSite from 'assets/launch_site.json';
import rocket from 'assets/rocket.json';
import LaunchDetails from 'view/LaunchDetails';
import LaunchesList from 'view/LaunchesList';

import TopNav from 'view/TopNav/TopNav';
import MissionLinks from 'view/MissionLinks/MissionLinks';
import Footer from 'view/Footer/Footer';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      viewName: 'list',
      currentLaunch: null,
    };


    this.handleLaunchClick = this.handleLaunchClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  handleLaunchClick(launch) {
    this.setState({ viewName: 'details',
                    currentLaunch: launch });
  }

  handleBackClick() {
    this.setState({ viewName: 'list' });
  }

  get activeViewComponent() {
    const { viewName, launches } = this.state;

    switch (viewName) {
      case 'list':
        return (
          <LaunchesList
            onLaunchClick={this.handleLaunchClick}
          />
        );

      case 'details':
        return (
          <main>
            <TopNav
              onBackClick={this.handleBackClick}/>
            <LaunchDetails
              launch={launch}
              launchSite={launchSite}
              rocket={rocket}/>

            <MissionLinks launch={launch}/>
          </main>
        );

      default: return null;
    }
  }

  render() {
    return (
      <main>
        {this.activeViewComponent}
        <Footer/>
      </main>
    );
  }
}




export default hot(module)(App);
