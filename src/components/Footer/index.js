import style from './style.module.css'
import {useState} from 'react'

function Footer() {
    const [showEmail, setShowEmail] = useState(false)

    const copyEmail = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            alert('Адрес электронной почты скопирован в буфер обмена');
        }).catch((err) => {
            console.error('Не удалось скопировать текст');
        });
    }
    return (
        <footer id='contactsHeader' className={style.footer}>
            <h2>Мои контакты</h2>
            <div>
                <a href='https://www.linkedin.com/in/%D0%BA%D1%81%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BC%D1%8B%D1%87%D0%BA%D0%BE%D0%B2%D0%B0-755799207/'>Linkedin</a>
                <a href='https://github.com/KseniaMychkova'>GitHub</a>
                <a href='https://t.me/kseniyamychkova'>Telegram</a>
                <p onMouseEnter={()=> setShowEmail(true)} 
                onMouseLeave={()=>setShowEmail(false)}
                onClick={() => copyEmail('k2606676@gmail.com')}>Email</p>
                {showEmail ? <p style={{position: 'absolute', top: '-15px', right: '-45px', fontSize: '14px', color: '#676266'}}>k2606676@gmail.com</p> : null}
            </div>
        </footer>
    )
}

export default Footer