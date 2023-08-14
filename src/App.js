import './App.css';
import React from 'react';
import HeaderApp from './containers/layout/header';
import ContentApp from './containers/home/content';
import FooterApp from './containers/layout/footer';
const App = () => {
   return (
      <div>
   <HeaderApp/>
   <ContentApp/>
   <FooterApp/>
   </div>
   );
};
export default App;
