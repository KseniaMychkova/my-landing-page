import style from '../../components/Main/style.module.css';
import image from '../Header/assets/portfolio.jpg';

function Main() {
    return (
        <section className={style.main}>
            <div className={style.aboutMe}>
                <p>Меня зовут Ксения Мычкова и я <br/><span>Frontend Developer</span> <br/>создаю то-то и тооо-то, уменю пятое-десятое, написать текст попозже, пока не трачу время на это </p>
                <button className={style.contactsBtn}>Контакты</button>
            </div>
            <div className={style.img}>
                <img src={image} alt=''></img>
            </div>
        </section>
    )
}

export default Main