import React from 'react';
import styles from './PriceSection.module.scss';
import Button from '../../shared/Button';

const PriceSection = () => {
    return (
        <div className={styles.container_pricesection}>
            <div className={styles.content}>
            <h2 className={styles.title}>A Price To Suit Everyone</h2>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
            <span className={styles.price}>$40</span>
            <p className={styles.term}>UI Design Kit</p>
            <p className={styles.phrase}>See, One price. Simple.</p>
             <Button>Purchase Now</Button>
             </div>
        </div>
    )
};

export default PriceSection;
