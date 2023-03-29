import React from 'react';
import Icon from '../Icon';
import icons from './icons.json';
import styles from './Menu.module.scss';

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        {icons.map((icon) => <Icon key={icon.id} item={icon} styles={styles} />)}
      </ul>
    </nav>
  )
}
