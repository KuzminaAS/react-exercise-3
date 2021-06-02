import React from 'react';
import styles from './FeaturesInfo.module.scss';
import { ReactComponent as AlbumIcon} from '../../../shared/icons/album.svg';

  
const FeaturesInfo = ({title, text}) => {
   
    return (
        <ul className={styles.list}>
            <li className={styles.item}>
                <AlbumIcon/>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{text}</p>
            </li>
            <li className={styles.item}>
                 <AlbumIcon/>
                 <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{text}</p>
            </li>
            </ul>
    )
};

export default FeaturesInfo;
