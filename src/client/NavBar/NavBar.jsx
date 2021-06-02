import React from 'react';
import Logo from "../../shared/Logo";
import NavbarNav from "../NavbarNav";
import Button from '../../shared/Button';
import styles from './NavBar.module.scss';

export default function NavBar() {
    return (
        <nav>
            <div className={styles.container}>
                <div className={styles.navbar_row}>
                    <NavbarNav />
                    <Logo />
                    <Button>Buy now</Button>
                </div>
            </div>
        </nav>
    );
}
