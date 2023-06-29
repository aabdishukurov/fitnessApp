<<<<<<< HEAD
import React from 'react';
import { Button } from './button/Button';
import { Link } from 'react-router-dom';

export const Category = ({
  className,
  categoryImage,
  alt,
  name,
  timerImage,
  time,
  pros,
  pros2,
  pros3,
  routeName,
}) => {
  return (
    <div className="categories">
      <div className={className}>
        <div className="categories__image-side">
          <img src={categoryImage} alt={alt} />
        </div>
        <div className="categories__text-side">
          <div className="text-side__name">
            <h3>{name}</h3>
            <img src={timerImage} alt="timer" />
            <p>{time}</p>
          </div>
          <div className="categories__pros-side">
            <div>
              <div>
                <span></span>
              </div>
              <p>{pros}</p>
            </div>
            <div>
              <div>
                <span></span>
              </div>
              <p>{pros2}</p>
            </div>
            <div>
              <div></div>
              <p>{pros3}</p>
            </div>
          </div>
          <Link to={`/${routeName}`}>
            <Button />
          </Link>
        </div>
      </div>
    </div>
  );
};
=======
import React from 'react';
import styles from './categories.module.scss';
import { Button } from './button/Button';
import { Link } from 'react-router-dom';

export const Category = ({
  className,
  categoryImage,
  alt,
  name,
  timerImage,
  time,
  pros,
  pros2,
  pros3,
  routeName,
}) => {
  return (
    <div className={styles.categories}>
      <div className={className}>
        <div className={styles.categories__image_side}>
          <img src={categoryImage} alt={alt} />
        </div>
        <div className={styles.categories__text_side}>
          <div className={styles.text_side__name}>
            <h3>{name}</h3>
            <img src={timerImage} alt="timer" />
            <p>{time}</p>
          </div>
          <div className={styles.categories__pros_side}>
            <div>
              <div>
                <span></span>
              </div>
              <p>{pros}</p>
            </div>
            <div>
              <div>
                <span></span>
              </div>
              <p>{pros2}</p>
            </div>
            <div>
              <div></div>
              <p>{pros3}</p>
            </div>
          </div>
          <Link to={`/${routeName}`}>
            <Button />
          </Link>
        </div>
      </div>
    </div>
  );
};
>>>>>>> 32828fa07c53bad885685dd4fa2a1a7e32952ed7
