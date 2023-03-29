import React from 'react'

export default function Icon({ item, styles }) {
  return (
    <li className={styles.menu__item}>
      <img src={item.path} alt={item.alt} />
      <a href='/'>{item.link}</a>
    </li>
  )
}
