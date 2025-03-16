import React from 'react';

import styles from '../../css/Register.module.css'

import closIcon from '../../images/icon/cross-icon.png'

const Register = (props) => {
  console.log(props.isBlakout)

  const handleModalContentClick = (event) => {
    event.stopPropagation(); // Предотвращаем всплытие события клика
  };

  return (
    <>
      <div onClick={props.setBlack} className={props.isBlakout ? 'blackuot' : ''}>
        <div onClick={handleModalContentClick} className={styles.register + ' ' + (!props.isBlakout ? styles.hidden : '')}>
          <button onClick={props.setBlack} className={styles.close}>
            <img className={styles.close} src={closIcon} alt="" />
          </button>
          <div className={styles.register__title}>Register</div>
          <div className={styles['register__input-item']}>
            <input type="text" placeholder='Email address' />
          </div>
          <div className={styles['register__input-item']}>
            <input type="text" className={styles['password-input']} placeholder='Password' />
          </div>
          <div className={styles['register__input-item']}>
            <input type="text" placeholder='Username' />
          </div>
          <button className={styles['register-button']}>Create an account</button>
        </div>
      </div>
    </>
  );
}

export default Register;
