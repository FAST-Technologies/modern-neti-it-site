// @ts-ignore
import React, {useState} from 'react';
import styles from "./StartPage.module.css";
import Footer from "../UsedUIComponents/Footer/Footer.tsx";
import {Link} from "react-router-dom";
const StartPage = () => {
    const [time, setTime] = useState<Date>(new Date())
    setInterval(() => setTime(new Date()), 1000)
    return (
        <div className={styles.cont}>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src="images/logo1.svg" alt="Логотип NETI IT"/>
                </div>
                <div className={styles.nav}>
                    <a href="#" className={styles.nav_item}>
                        <span>● Главная</span>
                    </a>
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
                    <Link to='/information'>
                        <a href="#" className={styles.nav_item}>
                            <span>Контакты</span>
                        </a>
                    </Link>
                </div>
                <div className={styles.search}><a href="#"><img src="images/Search.svg" alt="Поиск"/></a></div>
                <div className={styles.Account}><a href="#"><img src="images/Account.svg" alt="Аккаунт"/></a></div>
            </header>
            <div className={styles.main}>
                <div className={styles.social}>
                    <a href="https://vk.com/neti_it" target="_blank">
                        <img src="images/Vkontakte.svg" alt="Vk"/>
                    </a>
                    <a href="#">
                        <img src="images/Telegram1.svg" alt="Telegram"/>
                    </a>
                    <a href="#">
                        <img src="images/Google1.svg" alt="Google"/>
                    </a>
                    <div className={styles.timee}>
                        <div>
                            {time.toLocaleTimeString()}
                        </div>
                        <div className={styles.datee}>
                            {time.toLocaleDateString()}
                        </div>
                    </div>
                </div>
                <div className={styles.main_text}>
                    <h1>
                        <span className={styles.title_text}>
                            NETI IT
                        </span>
                        - Стартап в реальность!
                    </h1>
                </div>
                <p className={styles.about}>
                    <span className={styles.about_text}>
                        NETI IT
                    </span>
                    – это не просто сообщество НГТУ для программистов, это одно из ключевых мест для продвижения ваших
                    будущих стартапов и мини-проектов.
                    Мы помогаем с развитием ваших идей и продвигаем проекты + помогаем в обучении тому или иному стеку
                    технологий от дизайна и моделирования до обучения фронтенду и бэкенду.
                </p>
                <div className={styles.button_1}>
                    <span className={styles.signup_text}>Записаться</span>
                </div>
                <h2>Что мы предлагаем</h2>
                <div className={styles.offers}>
                    <div className={styles.offers_item_1}>
                        <p>Вы сможете получить новые
                            <span className={styles.offers_text}>возможности</span> в сферах
                            информационных технологий.</p>
                    </div>
                    <div className={styles.offers_item_2}>
                        <p>Наш проект даст вам возможность работать в <span
                            className={styles.offers_text}>команде</span> опытных разработчиков, которые всегда готовы помочь
                        </p>
                    </div>
                    <div className={styles.offers_item_3}>
                        <p>Вы сможете работать в любое <span className={styles.offers_text}>время</span>, в любом <span
                            className={styles.offers_text}>месте</span> и при любых <span
                            className={styles.offers_text}>условиях</span>.</p>
                    </div>
                </div>
                <h2>Новости</h2>
                <div className={styles.news}>
                    <div className={styles.news_block}>
                        <img src="images/News.png" alt="Изображение новостей"/>
                        <h3>Заголовок</h3>
                        <time dateTime="2023-11-20">20.11.2023</time>
                        <br/>
                        <span>Вы сможете получить новые возможности в сферах информационных технологий.</span>
                    </div>
                    <div className={styles.news_block}>
                        <img src="images/News 2.png" alt="Изображение новостей"/>
                        <h3>Заголовок</h3>
                        <time dateTime="2023-11-20">20.11.2023</time>
                        <br/>
                        <span>Вы сможете получить новые возможности в сферах информационных технологий.</span>
                    </div>
                    <div className={styles.news_block}>
                        <img src="images/News 3.png" alt="Изображение новостей"/>
                        <h3>Очень длинный заголовок</h3>
                        <time dateTime="2023-11-20">20.11.2023</time>
                        <br/>
                        <span>Вы сможете получить новые возможности в сферах информационных технологий.</span>
                    </div>
                    <div className={styles.news_block}>
                        <img src="images/News 4.png" alt="Изображение новостей"/>
                        <h3>Очень длинный заголовок</h3>
                        <time dateTime="2023-11-20">20.11.2023</time>
                        <br/>
                        <span>Вы сможете получить новые возможности в сферах информационных технологий.</span>
                    </div>
                </div>
                <div className={styles.button_2}>
                    <span className={styles.signup_text}>Узнать больше...</span>
                </div>
                <div className={styles.startup}>
                    <span className={styles.startup_title}>Вам нужна помощь в развитии <span>Стартапа?</span></span>
                </div>
                <div className={styles.startup_text}>
                    <div className={styles.startup_text_item}>
                        <span className={styles.startup_text_number}>4</span>
                        <br/>
                        <span className={styles.startup_text_text}>Проффесиональных команды</span>
                    </div>
                    <div className={styles.startup_text_item}>
                        <span className={styles.startup_text_number}>4</span>
                        <br/>
                        <span className={styles.startup_text_text}>Направления разработки</span>
                    </div>
                    <div className={styles.startup_text_item}>
                        <span className={styles.startup_text_number}>20</span>
                        <br/>
                            <span className={styles.startup_text_text}>Проффесиональных участников</span>
                    </div>
                </div>
                <h2>Проекты</h2>
                <div className={styles.projects}>
                    <div className={styles.projects_item}>
                        <div className={styles.project_img}>
                            <img src="images/Ellipse 6.png" alt="Изображение проекта"/>
                                <h3>Название проекта</h3>
                        </div>
                        <div className={styles.project_about}>
                            <h3>Немного о проекте</h3>
                            <span className={styles.project_title}>Цель проекта состоит в том, чтобы разработать графический редактор с использованием нейросетей</span>
                            <br/>
                                <span className={styles.project_title_big}>Цель проекта состоит в том, чтобы разработать графический редактор с использованием нейросетей. Цель проекта состоит в том, чтобы разработать графический редактор с использованием нейросетей</span>
                                <div className={styles.button_3}>
                                    <span className={styles.signup_text}>Узнать больше...</span>
                                </div>
                        </div>
                    </div>
                    <div className={styles.projects_item}>
                        <div className={styles.project_img}>
                            <img src="images/Ellipse 6.png" alt="Изображение проекта"/>
                                <h3>Длинное название проекта</h3>
                        </div>
                        <div className={styles.project_about}>
                            <h3>Немного о проекте</h3>
                            <span className={styles.project_title}>Цель проекта состоит в том, чтобы разработать графический редактор с использованием нейросетей</span>
                            <br/>
                                <span className={styles.project_title_big}>Цель проекта состоит в том, чтобы разработать графический редактор с использованием нейросетей. Цель проекта состоит в том, чтобы разработать графический редактор с использованием нейросетей</span>
                                <div className={styles.button_3}>
                                    <span className={styles.signup_text}>Узнать больше...</span>
                                </div>
                        </div>
                    </div>
                </div>
                <span className={styles.joinus_title}>Присоединяйтесь к нам!</span>
                <div className={styles.joinus}>
                    <input type="text" name="username" placeholder="Имя"/>
                    <input type="tel" name="telephone" placeholder="Телефон"/>
                    <input type="text" name="telegram" placeholder="@Telegram"/>
                    <button className={styles.button4} type="submit">Войти в IT</button>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default StartPage;