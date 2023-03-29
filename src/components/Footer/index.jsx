import React from 'react';
import facebook from './facebook.svg';
import twitter from './twitter.svg';
import instagram from './instagram.svg';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__icons}>
        <a 
          href='/'
          target='_blank'
          rel='noreferrer'        
        >
          <img src={facebook} alt='Ícone do Facebook' />
        </a>
        <a 
          href='/'
          target='_blank'
          rel='noreferrer'        
        >
          <img src={twitter} alt='Ícone do Twitter' />
        </a>
        <a 
          href='/'
          target='_blank'
          rel='noreferrer'        
        >
          <img src={instagram} alt='Ícone do Instagram' />
        </a>
      </div>
      <p>Desenvolvido por Ícaro Lino.</p>
    </footer>
  )
}
