import { Link } from "react-router-dom";
import styles from './Footer.module.scss';
import Logo from '../../shared/Logo';
import Button from '../../shared/Button';
import NavbarNav from '../NavbarNav';
import { ReactComponent as Facebook } from '../../shared/icons/facebook.svg';
import { ReactComponent as In } from '../../shared/icons/in.svg';
import { ReactComponent as Insta } from '../../shared/icons/insta.svg';
import { ReactComponent as Twit} from '../../shared/icons/twit.svg';
import { ReactComponent as Youtube } from '../../shared/icons/youtube.svg';

const Footer = () => {
    return (
        <div className={styles.container}>
        <div className={styles.content_footer}>
            <span className={styles.copyright}>© 2020 Yourcompany</span>
                <Logo />
                <Button>Purchase now</Button>
        </div>
            <hr className={styles.line}/>
        <div className={styles.wrapper_footer}>
                <NavbarNav />
                <ul className={styles.list_links}>
                    <li className={styles.list_item}><Link to='https://www.facebook.com/'> <Facebook/> </Link></li>
                    <li className={styles.list_item}><Link to='https://www.linkedin.com/'> <In/> </Link></li>
                    <li className={styles.list_item}><Link to='https://twitter.com/?lang=ru'> <Insta/> </Link></li>
                    <li className={styles.list_item}><Link to='youtube.com'> <Twit/> </Link></li>
                    <li className={styles.list_item}><Link to='https://www.instagram.com/?hl=ru'> <Youtube/> </Link></li>
                </ul>
         </div>
         </div>
    )
};

export default Footer;
