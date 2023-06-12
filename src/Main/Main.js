import React, { Component } from 'react';
import styles from './Main.module.css';
import cn from 'classnames';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import Footer from '../components/Footer';

class Main extends Component {
    
    render() {
      return (
        <div className={cn(styles.Main)}>
          <Header />
          <Sidebar />
          <Content />
          <Footer />
        </div>
      );
  };
};

export default Main;