import React from 'react';
import Card from '../Card';

export default function Cards({ pictures, styles }) {
  return (
    <ul className={styles.gallery__cards}>
    {
      pictures.map((picture) => {
        return (
          <Card key={picture.id} picture={picture} styles={styles} />
        );
      })
    }
    </ul>
  )
}
