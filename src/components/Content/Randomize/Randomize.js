import React, { Component } from 'react';
import styles from './Randomize.module.css';
import cn from 'classnames';

class Randomize extends Component {

    state = {
        number: 0
    };

    randomizeNumber = () => {
        this.setState({ number: Math.floor(Math.random() * 100) });
    };
    
    render() {
        return (
            <section className={cn(styles.Randomize)}>
                <div>
                    <p>{this.state.number}</p>
                    <button onClick={this.randomizeNumber}>Randomize</button>
                </div>
            </section>
        );
    };
};

export default Randomize;