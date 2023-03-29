import React from 'react';
import styles from './Tags.module.scss';

export default function Tags({ items, filter }) {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__list}>
        {items.map((tag) => <li key={tag} onClick={() => filter(tag)} >{tag}</li> )}
        <li onClick={() => filter('all')} >Todas</li>
      </ul>
    </div>
  )
}
