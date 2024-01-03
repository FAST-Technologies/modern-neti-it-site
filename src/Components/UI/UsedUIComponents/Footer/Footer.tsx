// @ts-ignore
import React from 'react';
import styles from "../../StartPage/StartPage.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_section}>
                <img src="images/logo-dark.png" alt="Логотип NETI IT"/>
                <br/>
                <span
                    className={styles.footer_text}>NETI IT - место, где любой IT стартап становится реальностью.</span>
                <span className={styles.copyright}>©NETI IT, 2023. Все права защищены</span>
            </div>
            <div className={styles.sections}>
                <span className={styles.site_sections}>Разделы сайта</span>
                <a href="#" className={styles.nav_item}><span>Главная</span></a>
                <a href="#" className={styles.nav_item}><span>Новости</span></a>
                <a href="#" className={styles.nav_item}><span>О нас</span></a>
                <a href="#" className={styles.nav_item}><span>Проекты</span></a>
                <a href="#" className={styles.nav_item}><span>Команда</span></a>
                <a href="#" className={styles.nav_item}><span>Сообщество</span></a>
                <a href="#" className={styles.nav_item}><span>Контакты</span></a>
            </div>
            <div className={styles.contacts}>
                <span className={styles.contacts_sections}>Контакты</span>
                <div className={styles.phone}>
                    <img src="images/Phone.svg"/>
                    <a href="tel:+79137777777">+7 913 777-77-77</a>
                </div>
                <div className={styles.phone}>
                    <img src="images/Mail.svg"/>
                    <a href="mailto:netiit@gmail.com" target="_blank">netiit@gmail.com</a>
                </div>
                <div className={styles.phone}>
                    <img src="images/Location.svg"/>
                    <a href="https://go.2gis.com/fshdu" target="_blank">Новосибирск, Россия, Блюхера 32</a>
                </div>
                <span className={styles.social_footer}>Мы в соцсетях:</span>
                <div className={styles.social_img}>
                    <a href="https://vk.com/neti_it" target="_blank"><img src="images/Vk-1.svg"/></a>
                    <a href="#" target="_blank"><img src="images/Telegram-1.svg"/></a>
                    <a href="#" target="_blank"><img src="images/google-1.svg"/></a>
                    <p className={styles.age}>12+</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;