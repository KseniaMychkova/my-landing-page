import style from './style.module.css'

import arrOfProjects from './storage/index'

function Projects() {
    const pojectMap = arrOfProjects.map(el => <div className={style.wrapper}>
        <div className={style.container}>
            <div className={style.image}>
                <img src={el.img} alt=''></img>
            </div>
            <div className={style.technologies}>
                <p>{el.tecnologics1}</p>
                <p>{el.tecnologics2}</p>
                <p>{el.tecnologics3}</p>
            </div>
            <div className={style.description}>
                <h3>{el.title}</h3>
                <p>{el.description}</p>
            </div>
        </div>
        <a href={el.link}>Посмотреть проект ⮕</a>
    </div>)
    return (
        <section id='experience' className={style.projects}>
            <h2>Мои проекты</h2>
            <p>Некоторые, реализованные мной проекты</p>
            <div className={style.projectsBlock}>
                {pojectMap}
            </div>
        </section>
    )
}

export default Projects