import React from 'react';
import styles from './Features.module.scss';

import FeaturesInfo from '../FeaturesInfo';
import { list } from "../features.js";
import FeaturesList from '../FeaturesList';
import { ReactComponent as GirlImg } from '../../../shared/images/features/girlmobile.svg';

 const info = {
        title: 'Title Goes Here',
        text:  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
    }

const FeaturesSection = ({title, text})  => {
    return (
        <>
        <div className={styles.wrapper}>
        <div className={styles.container_content}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
            <FeaturesInfo title={info.title} text={info.text} />
        </div>
            <GirlImg/>
        </div>
            <FeaturesList list={list} />
        </>
    )
};

export default FeaturesSection;
