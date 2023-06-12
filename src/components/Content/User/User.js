import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './User.module.css';
import cn from 'classnames';
import { Users } from '../../../Data';
import Item from './Item';

const User = () => {
  const [isListVisible, setListVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleListVisibility = () => {
    if (!isListVisible) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setListVisible(true);
      }, 1000);
    } else {
      setListVisible(false);
    }
  };

  return (
    <section className={cn(styles.Center)}>
      <button onClick={toggleListVisibility}>
        {isListVisible ? 'Выкл' : 'Вкл'}
      </button>
      {isLoading ? (
        <div className={cn(styles.Loading)}>Loading...</div>
      ) : (
        isListVisible && <div className={cn(styles.User)}>
          {Users.map((user, index) => (
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
      )}
    </section>
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
