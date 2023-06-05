import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

export const renderRatingStars = (rating) => {
  const starCount = 5;
  const filledStars = Math.round(rating);
  const stars = [];

  for (let i = 1; i <= starCount; i++) {
    const starIcon = i <= filledStars ? solidStar : regularStar;

    stars.push(
      <FontAwesomeIcon key={i} icon={starIcon} className="star-icon" />
    );
  }

  return stars;
};
