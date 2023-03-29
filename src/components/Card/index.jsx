import React from 'react';
import favorite from './favorite.png';
import open from './open.png';

export default function Card({ picture, styles }) {
  return (
    <li className={styles.gallery__card}>
      <img
        className={styles.gallery__image}
        src={picture.image}
        alt={picture.tittle}
      />
      <p className={styles.gallery__description} >{picture.tittle}</p>
      <div>
        <p>{picture.credits}</p>
        <span>
          <img src={favorite} alt='Ícone coração de curtir' />
          <img src={open} alt='Ícone de abrir modal' />
        </span>
      </div>
    </li>
  )
}
