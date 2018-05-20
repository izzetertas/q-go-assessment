import React from 'react';

import Header from '../Header';
import ItemsPage from '../../containers/ItemsPage';
import './styles.css';


const App = () => {
  return (
    <div className="app">
      <Header />
      <ItemsPage />
    </div>
  );
}

export default App;
