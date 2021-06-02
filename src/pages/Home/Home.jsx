import React from 'react';
import HeroSection from '../../component/HeroSection';
import FeaturesSection from '../../component/features/FeaturesSection';
import PriceSection from '../../component/PriceSection';
import Footer from '../../client/Footer';

import styles from './Home.module.scss';

const content = {
    title: 'Light, Fast & Powerful',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.'
}
const Home = () => {
    return (
        <>
         <div className={styles.container}>
         <div className={styles.wrapper}>
        <HeroSection text={content.text} />
        </div>
        <FeaturesSection title={content.title} text={content.text} />
        </div>
        <PriceSection />
        <Footer/>
        </>
    )
};

export default Home;
