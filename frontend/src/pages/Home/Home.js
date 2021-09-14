import React from 'react';
import classes from './Home.module.css'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
    <div className={classes.HomePage}>
        <h1 className={`fas fa-tasks ${classes.TaskTitle}`}>&nbsp;Welcome To TaskEase</h1>

    </div>
    <Footer/>
    </>
  );
}

export default Home;