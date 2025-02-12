import style from './style.module.css'
import darkerArrow from './assets/darker.png'
import lighterArrow from './assets/lighter.png'

function Arrows() {
    return (
        <div className={style.arrows}>
            <img src={darkerArrow} alt=''></img>
            <img src={lighterArrow} alt=''></img>
        </div>
    )
}

export default Arrows