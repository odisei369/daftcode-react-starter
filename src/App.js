import { hot } from 'react-hot-loader';
import * as React from 'react';

import './styles/theme.sass';
import Counter from './view/Counter';

import launch from 'assets/launch.json';
import launchSite from 'assets/launch_site.json';
import rocket from 'assets/rocket.json';
import LaunchDetails from 'view/LaunchDetails';
import TopNav from 'view/TopNav';
import MissionLinks from 'view/MissionLinks';
import Footer from 'view/Footer';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  boom(){
    alert("boom")
  }
  render() {
    return (
      <main>
        <TopNav/>
        <LaunchDetails
          launch={launch}
          launchSite={launchSite}
          rocket={rocket}
        />
        <MissionLinks launch={launch}/>
        <Footer/>
      </main>
    );
  }
}

export default hot(module)(App);
