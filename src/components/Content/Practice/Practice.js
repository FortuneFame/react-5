import React, { useState } from 'react';
import styles from './Practice.module.css';
import cn from 'classnames';
import { uid } from 'uid';

const Practice = () => {
  const arr = [1, 45, 77, 43, 66, 78, 43];
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);

  const toggleButtonState = (index) => {
    if (index === activeButtonIndex) {
      setActiveButtonIndex(null);
    } else {
      setActiveButtonIndex(index);
    }
  };

  return (
    <section className={cn(styles.Practice)}>
      <h2>Цикл .map()</h2>
      <div className={cn(styles.divMap)}>
        {arr.map((item) => <p key={uid()}>{item}</p>)}
      </div>
      <h2>Цикл .filter().map()</h2>
      <div className={cn(styles.divFilter)}>
        {arr.filter(item => item > 50).map((item) => <p key={uid()}>{item}</p>)}
      </div>
      <div className={cn(styles.divAccordion)}>
        {Array(5).fill(null).map((_, index) => (
        <div className={cn(styles.accordionItem)} key={uid()}>
          <button onClick={() => toggleButtonState(index)}>
            {index === activeButtonIndex ? 'Hide' : 'Show Text'}
          </button>
            {index === activeButtonIndex &&
              <div>
                <h3>{index + 1}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius neque pariatur at molestias excepturi molestiae similique nisi!</p>
              </div>}
        </div>
      ))}
      </div>
    </section>
  );
};

export default Practice;