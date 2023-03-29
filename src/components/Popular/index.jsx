import React from 'react';
import popularPictures from './popular-pictures.json';
import styles from './Popular.module.scss';

export default function Popular() {
  return (
    <aside className={styles.popular} >
      <h2>Populares</h2>
      <ul className={styles.popular__images}>
        {popularPictures.map((popularPicture) => {
          return (
            <li key={popularPicture.id}>
              <img src={popularPicture.path} alt={popularPicture.alt} />
            </li>
          )
        })}
      </ul>
      <button>Ver mais fotos</button>
    </aside>
  )
}
