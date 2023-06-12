import React, { Component } from 'react';
import styles from './Sidebar.module.css';
import cn from 'classnames';


class Sidebar extends Component {
  render() {
    return (
      <aside className={cn(styles.Sidebar)}>
      </aside>
    );
  }
}

export default Sidebar;