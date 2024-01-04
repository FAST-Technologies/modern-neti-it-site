// @ts-ignore
import React, {useState} from 'react';
import styles from "./InformationBlock.module.css";
import {Link} from "react-router-dom";
import Footer from "../UsedUIComponents/Footer/Footer.tsx";

const InformationBlock = () => {
    const [time, setTime] = useState<Date>(new Date())
    setInterval(() => setTime(new Date()), 1000)
    return (
        <div className={styles.cont}>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src="images/logo1.svg" alt="Логотип NETI IT"/>
                </div>
                <div className={styles.nav}>
                    <Link to='/startpage'>
                        <a href="#" className={styles.nav_item}>
                            <span>Главная</span>
                        </a>
                    </Link>
                    <Link to='/ourblog'>
                        <a href="#" className={styles.nav_item}>
                            <span>Новости/Блог</span>
                        </a>
                    </Link>
                    <Link to='/aboutus'>
                        <a href="#" className={styles.nav_item}>
                            <span>О нас</span>
                        </a>
                    </Link>
                    <Link to='/ourprojects'>
                        <a href="#" className={styles.nav_item}>
                            <span>Проекты</span>
                        </a>
                    </Link>
                    <Link to='/teams'>
                        <a href="#" className={styles.nav_item}>
                            <span>Команды</span>
                        </a>
                    </Link>
                    <Link to='/joinus'>
                        <a href="#" className={styles.nav_item}>
                            <span>Сообщество</span>
                        </a>
                    </Link>
                    <a href="#" className={styles.nav_item}>
                        <span>● Контакты</span>
                    </a>
                </div>
                <div className={styles.search}><a href="#"><img src="images/Search.svg" alt="Поиск"/></a></div>
                <div className={styles.Account}><a href="#"><img src="images/Account.svg" alt="Аккаунт"/></a></div>
            </header>
            <main className={styles.main}>
                <div className={styles.social}>
                    <div className={styles.timee}>
                        <div>
                            {time.toLocaleTimeString()}
                        </div>
                        <div className={styles.datee}>
                            {time.toLocaleDateString()}
                        </div>
                    </div>
                </div>
                <div className={styles.question_block}>
                    <h3 className={styles.question_title}>У вас возник вопрос? Свяжитесь с нами!</h3>
                    <div className={styles.social1}>
                        <a href="https://vk.com/neti_it" target="_blank"><img src="images/Vkontakte.svg" alt="Vk"/></a>
                        <a href="#"><img src="images/Telegram1.svg" alt="Telegram"/></a>
                        <a href="#"><img src="images/Google1.svg" alt="Google"/></a>
                    </div>
                    <div className={styles.question_block_text}><a className={styles.link} href="tel:+79137777777">netiit@mail.ru</a></div>
                    <div className={styles.question_block_text}><a className={styles.link} href="mailto:netiit@gmail.com" target="_blank">+7(921)765-98-34</a></div>
                    <div className={styles.question_block_text}><a className={styles.link} href="https://go.2gis.com/fshdu" target="_blank">Новосибирск, Россия, Блюхера 32</a></div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default InformationBlock;