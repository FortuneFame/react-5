import React, { Component } from 'react';
import styles from './Content.module.css';
import cn from 'classnames';
import User from './User';
import Practice from './Practice';
import Randomize from './Randomize';

class Content extends Component {

    render() {
        return (
            <main className={cn(styles.Content)}>
                <Randomize />
                <User />
                <Practice />
            </main>
        );
    };
};

export default Content;
