import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styles from '../../css/Header-viewer.module.css'
import selectedProd from '../../images/viewer1.png'
import otherProd from '../../images/viewer2.png'

import { useGetProductQuery, apiSlice } from '../../features/api/apiSlice';
import { ROUTES } from '../../utils/routes';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../features/user/userSlice';
import { getRelatedProducs } from '../../features/products/productsSlice';

import useToggleForm from '../../utils/Hooks/UseToggleForm'


const SIZE = [4.5, 5, 5.5]

const HeaderViewer = () => {
  const dispatch = useDispatch();

  const [imgId, setImgId] = useState(0);
  const [isSize, setSize] = useState(0);

  const { id } = useParams();

  const { products: { list, related }, user: {currentUser} } = useSelector((products) => products)

  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });

  const navigate = useNavigate();
// --------------------------------------------------------

  useEffect(() => {
    if (!data || !list?.length) return;

    if (data) {
      dispatch(getRelatedProducs(data.category.id))
    }
  }, [data, dispatch, list?.length])
// --------------------------------------------------------

  const addToCart = () => {
    dispatch(addItemToCart(data))
  }
// --------------------------------------------------------


const [showForm, handleToggle] = useToggleForm();

const handleClick = () => {
  if(!currentUser) handleToggle()
  else addToCart();
}

// --------------------------------------------------------

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME)
    }
  }, [isLoading, isFetching, isSuccess])

// --------------------------------------------------------

  return (
    data && (
      <>
        <div className={styles.content}>
          <div className={styles['image-box']}>
            <img src={isLoading ? "..Loading" : data.images[imgId]} className={styles['chosen-image']} alt="" />
            {data.images.map((imageUrl, index) => (
              <img onClick={() => setImgId(index)} src={imageUrl} className={''} alt="" />
            ))}
          </div>
          <div className={styles['text-box']}>
            <div className={styles.title}>{data.title}</div>
            <div className={styles['price']}>{data.price}$</div>
            <div className={styles['price-param']}>Color:
              <span className={styles['price-value']}>Blanc</span>
            </div>
            <div className={styles['size-param']}>Sizes:
              <ul className={styles['size-value']}>
                {SIZE.map(({ size }, index) => (
                  <li onClick={() => setSize(index)} className={(isSize == index ? styles['size-value-item--active'] : '') + ' ' + styles['size-value-item']}>{SIZE[index]}</li>
                ))}
              </ul>
            </div>
            <div className={styles.desc}>{(data.description).substring(0, 175)}...</div>
            <div className={styles.buttonbox}>
              <button onClick={handleClick} className={'button' + ' ' + styles.tocart}>Add to cart</button>
              <button className={'button' + ' ' + styles.tofav}>Add to favorites</button>
            </div>
            <div className={styles.otherbox}>
              <div className={styles.purch}>19 people purchased</div>
              <div className={styles.find}>Find in a store</div>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default HeaderViewer;
