import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import { Users } from '../../../Data';
import styles from './User.module.css';
import cn from 'classnames';

const User = () => {
  const [isListVisible, setListVisible] = useState(false);

  const toggleListVisibility = () => {
    setListVisible(!isListVisible);
  };

  return (
    <div className={cn(styles.Center)}>
      <button onClick={toggleListVisibility}>
        {isListVisible ? 'Выкл' : 'Вкл'}
      </button>
      <div className={cn(styles.User)}>
        {isListVisible && Users.map((user, index) => (
          <Item
            key={index}
            name={user.name}
            phoneNumber={user.phoneNumber}
            city={user.city}
            country={user.country}
            avatar={user.avatar}
            alt={user.alt}
          />
        ))}
      </div>
    </div>
  );
};

User.propTypes = {
  Users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      alt: PropTypes.string
    })
  )
};

export default User;