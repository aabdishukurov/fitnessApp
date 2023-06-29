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
