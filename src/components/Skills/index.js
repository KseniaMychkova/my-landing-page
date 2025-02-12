import style from '../../components/Skills/style.module.css';
import Arrows from '../Arrows'

function Skills() {
    return (
        <section className={style.skills}>
            <div className={style.textAbout}>
                <h1>Свяжитесь со мной</h1>
                <p>eсли вам необходим дисциплинированный, погруженный в изучение новой информации frontend разработчик, стремящийся создавать функциональные, быстрые, удобные для пользователей интерфейсы, я именно тот кандидат, который вам требуется. В моём <span>портфолио</span> вы увидите проекты, созданные с использованием современных технологий и подходов. Я  открыта для новых возможностей и готова к сотрудничеству.</p>
                <p>Мной освоено множество технологий, такие как:</p>
            </div>
            <Arrows/>
            <div className={style.skillCards}>
                <p> Создание клиентских интерфейсов с помощью HTML/HTML5, CSS, SCSS </p>
                <p>Использование языков програмирования: JavaScript, TypeScript</p>
                <p>Фреймворк: React</p>
                <p>Знание принципов объектно-ориентированного програмирования</p>
                <p>Git, Figma</p>
                <p>Styled component, Material UI</p>
            </div>
            <Arrows/>
        </section>
    )
}

export default Skills