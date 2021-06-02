import React from 'react';
import styles from './FeaturesList.module.scss';

import Button from '../../../shared/Button';


const FeaturesList = ({list}) => {
   const featuresElements = list.map(({ id, title, text, img, alt}) => {
       return (
            <>
            <li className={styles.item} key={id}>
                <img src={img} alt={alt} />
                <div className={styles.content}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.text}>{text}</p>
                </div>
            </li>
             <div className={styles.btn_container}><Button >Purchase Now</Button></div>  
             </>
        )
    });

    return (
        <ul className={styles.list}>
            {featuresElements}
        </ul>
    )
};

export default FeaturesList;

