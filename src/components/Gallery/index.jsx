import React from 'react'
import Tags from '../Tags'
import pictures from './pictures.json';
import styles from './Gallery.module.scss';
import Cards from '../Cards';

export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <Cards pictures={pictures} styles={styles} />            
    </section>

  )
}
