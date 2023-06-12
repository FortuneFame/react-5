import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';
import cn from 'classnames';
import { NavbarData } from '../../../Data';

class Navbar extends Component {
    state = {
        isMenuVisible: false,
    }

    toggleMenuVisibility = () => {
        this.setState(prevState => ({ isMenuVisible: !prevState.isMenuVisible }));
    }

    render() {
        const { isMenuVisible } = this.state;

        return (
            <nav className={cn(styles.Navbar)}>
                <button onClick={this.toggleMenuVisibility}>
                    {isMenuVisible ? '✕' : '≡'}
                </button>

                {isMenuVisible && (
                    <ul>
                        {NavbarData.map((navItem, index) => (
                            <li key={index}>
                                <a
                                    href={navItem.ref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {navItem.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        );
    }
}

Navbar.propTypes = {
    NavbarData: PropTypes.arrayOf(
        PropTypes.shape({
            ref: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Navbar;
