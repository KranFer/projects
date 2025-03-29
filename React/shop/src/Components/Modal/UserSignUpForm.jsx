import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from '../../css/Register.module.css'

import closIcon from '../../images/icon/cross-icon.png'

import { createUser } from '../../features/user/userSlice';
import useToggleForm from '../../utils/Hooks/UseToggleForm';

const UserSignUpForm = ({ toggleCurrentFormType }) => {
  const { user: { currentUser } } = useSelector((user) => user)
  const dispatch = useDispatch();

  const handleModalContentClick = (event) => {
    event.stopPropagation(); // Предотвращаем всплытие события клика
  };

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  })

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value })
  }

  // --------------------------------------------------------

  const [showForm, handleToggle] = useToggleForm();

  const handleClick = () => {
    if (!currentUser) handleToggle()
    else console.log('-')
  }

  // --------------------------------------------------------

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmpty = Object.values(values).some(val => !val)

    if (isEmpty) return;

    dispatch(createUser(values));

    handleClick();
  }

  // --------------------------------------------------------
  return (
    <>
      <div onClick={handleToggle} className={showForm ? 'blackuot' : ''}>
        <div onClick={handleModalContentClick} className={styles.register + ' ' + (!showForm ? styles.hidden : '')}>
          <button onClick={handleClick} className={styles.close}>
            <img className={styles.close} src={closIcon} alt="" />
          </button>
          <form >
            <div className={styles.register__title}>Register</div>
            <div className={styles['register__input-item']}>
              <input
                type="email"
                placeholder='Email address'
                name='email'
                value={values.email}
                autoComplete="off"
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles['register__input-item']}>
              <input
                type="password"
                className={styles['password-input']}
                placeholder='Password'
                name='password'
                value={values.password}
                autoComplete="off"
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles['register__input-item']}>
              <input
                type="text"
                placeholder='Username'
                name='name'
                value={values.name}
                autoComplete="off"
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles['register__input-item']}>
              <input
                type="url"
                placeholder='Avatar'
                name='avatar'
                value={values.avatart}
                autoComplete="off"
                onChange={handleChange}
                required
              />
            </div>
            <button onClick={() => toggleCurrentFormType('login')} className={styles['Have-button']}>I already have an account</button>
            <button type='submit' onClick={handleSubmit} className={styles['register-button']}>Create an account</button>
          </form>
        </div>
      </div>
    </>
  );
}

export { UserSignUpForm };
