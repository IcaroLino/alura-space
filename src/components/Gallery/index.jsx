import React, { useState } from 'react'
import Tags from '../Tags'
import pictures from './pictures.json';
import styles from './Gallery.module.scss';
import Cards from '../Cards';

export default function Gallery() {
  const [items, setItems] = useState(pictures);
  const tags = Array.from(new Set(pictures.map((picture) => picture.tag)));

  function filterPictures(tag) {
    tag === 'all'
      ? setItems(pictures)
      : setItems(pictures.filter((picture) => picture.tag === tag));
  }
 
  return (
    <section className={styles.gallery}>
      <h2>Navegue pela galeria</h2>
      <Tags items={tags} filter={filterPictures} />
      <Cards pictures={items} styles={styles} />            
    </section>
  )
}
