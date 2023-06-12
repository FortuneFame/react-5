import React, { Component } from 'react';
import styles from './Header.module.css';
import cn from 'classnames';
import Navbar from './Navbar';
import { NavbarData } from '../../Data';

class Header extends Component {
  render() {
    return (
      <header className={cn(styles.Header)}>
        <Navbar NavbarData={NavbarData}/>
      </header>
    );
  }
}

export default Header;