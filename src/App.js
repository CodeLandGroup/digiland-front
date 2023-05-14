import React, { Component } from 'react';
import HeaderComponent from './components/Header/HeaderComponent'
import FooterComponent from './components/Footer/FooterComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
