import React from 'react';
import Routes from './config/Routes';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import classes from './App.module.css'




function App() {
  return (
    <div className={`${classes.App}`}>
        <Header />
        <Routes/>

    </div>
  );
}

export default App;
