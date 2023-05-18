import React  from 'react';
import HeaderComponent from './components/Header/HeaderComponent'
import FooterComponent from './components/Footer/FooterComponent'
import { useRoutes } from 'react-router-dom';
import routes from './router/router';

export default function App() {
  let router = useRoutes(routes)
  return (
    <div className="App">
      <HeaderComponent />
      {router}
      <FooterComponent />
    </div>
  );
}


