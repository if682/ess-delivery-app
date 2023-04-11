import React, { useState } from 'react';
import './style.css';

function StarRating({ defaultRating, onRatingChange }) {
    const [rating, setRating] = useState(defaultRating);

    function handleClick(event) {
        const classStar = event.target.classList;
        
        if (!classStar.contains('ativo')) {
            const stars = document.querySelectorAll('.star-icon');
            stars.forEach(function(star){
            star.classList.remove('ativo');
            });
            classStar.add('ativo');
            setRating(event.target.getAttribute('data-avaliacao'));
            onRatingChange(event.target.getAttribute('data-avaliacao'));
        }
    }

  return (
    <div>
        <ul className="avaliacao" onClick={handleClick}>
        <li className="star-icon ativo" data-avaliacao="1"></li>
        <li className="star-icon" data-avaliacao="2"></li>
        <li className="star-icon" data-avaliacao="3"></li>
        <li className="star-icon" data-avaliacao="4"></li>
        <li className="star-icon" data-avaliacao="5"></li>
        </ul>
    </div>
  );
}

export default StarRating;