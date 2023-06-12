import React from 'react';
import PropTypes from 'prop-types';
import styles from './Item.module.css';
import cn from 'classnames';
import defaultImg from './defaultImg/default.jpg';

const Item = ({ name, phoneNumber, city, country, avatar, alt }) => {
  const handleError = (event) => {
    event.target.src = defaultImg;
  };

  return (
     <section className={cn(styles.Item)}>
      <img src={avatar} alt={alt} onError={handleError} width="200" />
      <h2>{name}</h2>
      <p>{phoneNumber}</p>
      <p>{city}, {country}</p>
    </section>
  )
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  alt: PropTypes.string
};

export default Item;