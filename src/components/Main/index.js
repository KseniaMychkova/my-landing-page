import style from '../../components/Main/style.module.css';
import image from '../Header/assets/portfolio.jpg';
import { useState } from 'react'

function Main() {
    const [flag, setFlag] = useState(false)
    function contactsModal() {
        setFlag(true)
    }
    function closeModal() {
        setFlag(false)
    }

    return (
        <section className={style.main}>
            <div className={style.aboutMe}>
                <p>Меня зовут Ксения Мычкова и я <br /><span>Frontend Developer</span> <br />создаю то-то и тооо-то, уменю пятое-десятое, написать текст попозже, пока не трачу время на это </p>
                <button onClick={contactsModal} className={style.contactsBtn}>Контакты</button>
            </div>
            <div className={style.img}>
                <img src={image} alt=''></img>
            </div>
            {flag ? <>
            <div className={style.overlay} onClick={closeModal}></div>
            <div className={style.contactsModal}>
                <ul>
                    <li>Телефон: +375292606676</li>
                    <li>Email: k2606676@gmail.com</li>
                    <li><a href='https://www.linkedin.com/in/%D0%BA%D1%81%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BC%D1%8B%D1%87%D0%BA%D0%BE%D0%B2%D0%B0-755799207/' aria-label='Linkedin'>Linkedin</a></li>
                    <li><a href='https://github.com/KseniaMychkova' aria-label='GitHub'>GitHub</a></li>
                    <li><a href='https://t.me/kseniyamychkova' aria-label='Telegram'>Telegram</a></li>
                </ul>
            </div> </> : null}
        </section>
    )
}

export default Main