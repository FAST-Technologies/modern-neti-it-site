// @ts-ignore
import React, {useState} from 'react';
import styles from "./JoinUs.module.css";
import {Link} from "react-router-dom";
import Footer from "../UsedUIComponents/Footer/Footer.tsx";

const JoinUs = () => {
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
                    <a href="#" className={styles.nav_item}>
                        <span>● Сообщество</span>
                    </a>
                    <Link to='/information'>
                        <a href="#" className={styles.nav_item}>
                            <span>Контакты</span>
                        </a>
                    </Link>
                </div>
                <div className={styles.search}><a href="#"><img src="images/Search.svg" alt="Поиск"/></a></div>
                <div className={styles.Account}><a href="#"><img src="images/Account.svg" alt="Аккаунт"/></a></div>
            </header>
            <main className={styles.main}>
                <div className={styles.social}>
                    <a href="https://vk.com/neti_it" target="_blank"><img src="images/Vkontakte.svg" alt="Vk"/></a>
                    <a href="#"><img src="images/Telegram1.svg" alt="Telegram"/></a>
                    <a href="#"><img src="images/Google1.svg" alt="Google"/></a>
                    <div className={styles.timee}>
                        <div>
                            {time.toLocaleTimeString()}
                        </div>
                        <div className={styles.datee}>
                            {time.toLocaleDateString()}
                        </div>
                    </div>
                </div>
                <img className={styles.image} src="./images/joinus.svg" alt="JoinUs"/>
                <div className={styles.enter}>
                    <h1 className={styles.titled}>Присоединяйся к <span>сообществу!</span></h1>
                    <h2 className={styles.subtitle}>Цели сообщества</h2>
                    <p className={styles.titled_description}>Наша цель состоит в том, чтобы помочь всем, кто захочет найти свой путь в IT.</p>
                </div>
                <h2 className={styles.title}>Мы гарантируем</h2>
                <div className={styles.garantee}>
                    <div className={styles.garantee_item}>
                        <p className={styles.garantee_title}>Конфиденциальность</p>
                        <div className={styles.garantee_container}>
                            <p className={styles.garantee_description}>Мы <span>гарантируем</span>, что
                                никакие сторонние данные об участнике нашего
                                движения не будут публично разглашены</p>
                        </div>
                    </div>
                    <div className={styles.garantee_item}>
                        <p className={styles.garantee_title}>Поддержка</p>
                        <div className={styles.garantee_container}>
                            <p className={styles.garantee_description}>Мы поддержим абсолютно <span>любого</span> человека,
                                желающего стать IT стартапером.</p>
                        </div>
                    </div>
                    <div className={styles.garantee_item}>
                        <p className={styles.garantee_title}>Время</p>
                        <div className={styles.garantee_container}>
                            <p className={styles.garantee_description}>Осуществляем регистрацию и организацию выступления <span>каждого</span>
                                стартап-проекта в кратчайшее время</p>
                        </div>
                    </div>
                </div>
                <div className={styles.enteringBlock}>
                    <h2 className={styles.title1}>Процесс присоединения</h2>
                    <div className={styles.entering_item}>
                        <p className={styles.number}>1</p>
                        <p className={styles.entering_item_text}>Заполните форму регистрации ниже</p>
                    </div>
                    <div className={styles.entering_item}>
                        <p className={styles.number}>2</p>
                        <p className={styles.entering_item_text}>Ожидайте нашего ответа в течение 2 дней</p>
                    </div>
                    <div className={styles.entering_item}>
                        <p className={styles.number}>3</p>
                        <p className={styles.entering_item_text}>Поздравляем со вступлением в сообщество!</p>
                    </div>
                </div>
                <h2 className={styles.title1}>Присоединяйтесь к нам</h2>
                <div className={styles.joinus}>
                    <input type="text" name="username" placeholder="Имя"/>
                    <input type="tel" name="telephone" placeholder="Телефон"/>
                    <input type="text" name="telegram" placeholder="@Telegram"/>
                    <input className={styles.big_input} type="text" name="telegram" placeholder="Почему вы хотите к нам присоединиться"/>
                    <button className={styles.button4} type="submit">Войти в IT</button>
                </div>
                <div className={styles.question_block}>
                    <h3 className={styles.question_title}>У вас возник вопрос?</h3>
                    <div className={styles.social1}>
                        <a  href="https://vk.com/neti_it" target="_blank"><img src="images/Vkontakte.svg" alt="Vk"/></a>
                        <a  href="#"><img src="images/Telegram1.svg" alt="Telegram"/></a>
                        <a  href="#"><img src="images/Google1.svg" alt="Google"/></a>
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

export default JoinUs;