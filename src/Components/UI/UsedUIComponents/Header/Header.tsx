// @ts-ignore
import React from 'react';
import styles from "./Header.module.css";
import {Link} from "react-router-dom";

const Header = () => {
    return (
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
    );
};

export default Header;