import { current } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../features/user/userSlice';

import styles from '../../css/Register.module.css'


const Profile = () => {
  const { user: { currentUser } } = useSelector((user) => user)
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    id: 0,
    name: "",
    email: "",
    password: "",
    avatar: "",
  })

  useEffect(() => {
    if (!currentUser) return;

    setValues(currentUser)
  }, currentUser)


  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value })
  }

  //-----------------------------------------------------------

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmpty = Object.values(values).some(val => !val)

    if (isEmpty) return;

    dispatch(updateUser(values));
  }

  return (
    <div className={styles.edit__profile}>
      {!currentUser
        ? <span>You need to login</span>
        : (
          <form >
            <div className={styles.register__title}>Edit Profile</div>
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
            <button type='submit' onClick={handleSubmit} className={styles['register-button']}>Save Changes</button>
          </form>
        )}
    </div>
  );
}

export default Profile;
