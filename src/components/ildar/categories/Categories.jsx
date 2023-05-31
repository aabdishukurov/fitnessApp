import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ForEyePng from '../../../assets/for-eye.png';
import ForHandPng from '../../../assets/for-hand.png';

export const Categories = () => {
  const { isAuthV, isProV } = useSelector(({ categories }) => categories);
  return (
    <div className="categories">
      <h2>Категории</h2>
    </div>
  );
};
