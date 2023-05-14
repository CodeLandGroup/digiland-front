import React, { Component } from 'react';
import HeaderComponent from './components/Header/HeaderComponent'
import FooterComponent from './components/Footer/FooterComponent'
import { RouterProvider } from 'react-router-dom';
import router from './router/router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <RouterProvider router={router} />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
