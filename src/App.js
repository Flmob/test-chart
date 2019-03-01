import React, { Component } from 'react';
import './App.scss';

import Header from './components/Header';
import Content from './components/Content';

const defaultUser = {
    name: 'Andy Steward',
    email: 'andy@syndicatecontent.com',
    token: '64564b6kj6546h46',
    accSID: '46bh5436g5u6g53u6ig5ui6g3u45i6iu36',
    balance: '12.65',
    projectName: 'andy@syndicatecontent.com\'s Account'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header user={defaultUser}/>
        <Content user={defaultUser}/>
      </div>
    );
  }
}

export default App;
