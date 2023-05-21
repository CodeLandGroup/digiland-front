import React, { useEffect }  from 'react';
import HeaderComponent from './components/Header/HeaderComponent'
import FooterComponent from './components/Footer/FooterComponent'
import { useLocation, useRoutes } from 'react-router-dom';
import routes from './router/router';

export default function App() {
  let router = useRoutes(routes)
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="App">
      <HeaderComponent />
            {router}
      <FooterComponent />
    </div>
  );
}


