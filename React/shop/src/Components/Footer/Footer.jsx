import React from 'react';

import styles from '../../css/Footer.module.css'

import logo from '../../images/logo.svg'

import inst from '../../images/icon/instagram-icon.svg'
import yout from '../../images/icon/youtube-icon.svg'
import face from '../../images/icon/facebook-icon.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.footer__inner}>
          <a  href='/'><img src={logo} alt="logo" /></a>
          <div className={styles['footer_textbox']}>
            <div className={styles['footer_textbox-main']}>Developed by <span className={styles['footer_textbox-sec']}>KraNFeR</span></div>
          </div>
          <div className={styles['footer-btnbox']}>
            <div className={styles['footer-btnbox-item']}>
              <a href='#'>
                <img src={yout} alt="" />
              </a>
            </div>
            <div className={styles['footer-btnbox-item']}>
              <a href='#'>
                <img src={face} alt="" />
              </a>
            </div>
            <div className={styles['footer-btnbox-item']}>
              <a href='#'>
                <img src={inst} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
