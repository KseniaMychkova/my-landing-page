import style from '../../components/Header/style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faTelegram} from '@fortawesome/free-brands-svg-icons';

function Header () {
    return (
        <div className={style.header}>
            <div className={style.networks_links}>
                <ul>
                    <li><a href='https://www.linkedin.com/in/%D0%BA%D1%81%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BC%D1%8B%D1%87%D0%BA%D0%BE%D0%B2%D0%B0-755799207/' aria-label='Linkedin'><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href='https://github.com/KseniaMychkova' aria-label='GitHub'><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href='https://t.me/kseniyamychkova' aria-label='Telegram'><FontAwesomeIcon icon={faTelegram} /></a></li>
                </ul>
            </div>
            <div className={style.navigation}>                
                <ul>
                    <li><a href="#about">Обо мне</a></li>
                    <li><a href="#experience">Опыт работы</a></li>
                    <li><a href="#contactsHeader">Контакты</a></li>
                </ul>

            </div>
        </div>
    )
}

export default Header
