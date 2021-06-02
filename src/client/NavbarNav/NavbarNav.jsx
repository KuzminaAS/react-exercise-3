import { NavLink } from "react-router-dom";
import styles from './NavbarNav.module.scss';

import {items} from "./items";

const NavbarNav = ()=> {
    const menuElements = items.map(({ id, to, text}) => {
        return (
            <li className={styles.nav_item} key={id}>
                <NavLink exact to={to} className={styles.link}> {text} </NavLink>
            </li>
        )
    });

    return (
        <ul className={styles.nav_list}>
            {menuElements}
        </ul>
    )
}

export default NavbarNav;
