import { hot } from 'react-hot-loader';
import * as React from 'react';
import Home from './view/Home';

import './styles/theme.sass';
import Counter from './view/Counter';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  boom(){
    alert("boom")
  }
  render() {
    return (
      <main>
        <Home username="DaftCoder" />
        <Counter from={123} to={128} onSuccess={this.boom}/>
      </main>
    );
  }
}

export default hot(module)(App);
