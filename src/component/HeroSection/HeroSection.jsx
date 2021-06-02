import React from 'react';
import Button from '../../shared/Button';
import styles from './HeroSection.module.scss';
import { ReactComponent as BusyBoy } from '../../shared/images/hero/busyboy.svg'

const HeroSection = ({text}) => {
    return (
        <>
            <div className={styles.wrapper}>
            <div className={styles.container_content}>
            <h1 className={styles.title}>
                Introduce Your Product Quickly & Effectively</h1>
                <p className={styles.text}> {text} </p>
                <div className={styles.btn_container}>
                 <Button> Purchase UI Kit</Button>
                <Button className={styles.button}>Learn More</Button>
                </div>
                </div>
                <BusyBoy/>
            </div>
        </>
    )
};

export default HeroSection;
