// @ts-ignore
import React from 'react';
import styles from "./AboutUs.module.css";
import Header from "../UsedUIComponents/Header/Header.tsx";
import Footer from "../UsedUIComponents/Footer/Footer.tsx";
import PersonCard from "./PersonCard.tsx";

export interface person {
    id?: number
    name: string
    job: string
    description: string
    img: string
}

const people: {id: number, name: string, job: string, description: string, img: string}[] = [
    { id: 1, name: "Игорь Иванов", job: "Руководитель", description: "6 лет опыта Senior developer Основал наш проект, нанял команду, открыл 4 направления.", img: './people/w1.jpg' },
    { id: 2, name: "Кристина Королёва", job: "Product manager", description: "5 лет опыта Data scientist Основал наш проект, нанял команду, открыл 4 направления.", img: './people/w2.jpg' },
    { id: 3, name: "Алиса Юркевич", job: "Разработчик", description: "6 лет опыта Senior developer Основал наш проект, нанял команду, открыл 4 направления.", img: './people/w3.jpg' },
    { id: 4, name: "Андрей Киселёв", job: "Разработчик", description: "6 лет опыта Senior developer Основал наш проект, нанял команду, открыл 4 направления.", img: './people/w4.jpg' }]
const AboutUs = () => {
    return (
        <div className={styles.cont}>
            <Header/>
            <main className={styles.main}>
                <div className={styles.social}>
                    <a href="https://vk.com/neti_it" target="_blank"><img src="images/Vkontakte.svg" alt="Vk"/></a>
                    <a href="#"><img src="images/Telegram1.svg" alt="Telegram"/></a>
                    <a href="#"><img src="images/Google1.svg" alt="Google"/></a>
                </div>
                <div className={styles.title_block}>
                    <div className={styles.main_text}>
                        <h1 className={styles.pagetitle}><span className={styles.title_text}>NETI IT</span> - это не просто сообщество</h1>
                    </div>
                    <p className={styles.about}><span className={styles.about_text}>NETI IT </span>
                        – это не просто сообщество НГТУ для программистов, это одно из ключевых мест для продвижения ваших
                        будущих стартапов и мини-проектов.</p>
                    <p className={styles.about}>Мы помогаем с развитием ваших идей и продвигаем проекты + помогаем в обучении тому или иному стеку
                        технологий от дизайна и моделирования до обучения фронтенду и бэкенду.
                    </p>
                </div>
                <div className={styles.aboutinfo}>
                    <div className={styles.aboutinfo_text}>
                        <h2 className={styles.title}>Кто мы такие?</h2>
                        <p className={styles.description}>NETI IT — это прогрессивная группа студентов со всех факультетов НГТУ,
                            объединённых общей целью — созданием благоприятной среды для появления новых продвижения
                            существующих IT проектов на базе НГТУ. На данный момент активно развиваются четыре наших направления:
                            Game DEV, WEB разработка, мобильная разработка и разработка ПО.
                            В дальнейшем мы планируем расширить свой филиал и увеличить количество направлений подготовки, включая Data Science и Machine Learning.</p>
                    </div>
                    <img src="./images/NSTU.svg" alt="NSTU"/>
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
                <h2 className={styles.title1}>Наши лидеры</h2>
                <section className={styles.person_block}>
                    {people.map((person: person)=><PersonCard
                            name={person.name}
                            job={person.job}
                            description={person.description}
                            key={person.id}
                            img={person.img}
                        />
                    )}
                </section>
                <h2 className={styles.title1}>Достижения</h2>
                <section className={styles.achivements}>
                    <div className={styles.achivements_item}>
                        <h3 className={styles.achivements_item_title}>Стартап выпускницы мехмата Алины Щегловой</h3>
                        <div className={styles.achivements_item_content}>
                            <img className={styles.achivements_img} src="./images/student.jpg" alt="student"/>
                            <div className={styles.achivements_text}>
                                <p className={styles.achivements_text_text}>Выпускница магистратуры Алина Щеглова основала стартап, который  выстрелил уже через год!
                                    Сейчас её команда находится в поиске...</p>
                                <p className={styles.achivements_text_text}><span>©Алина Щеглова</span>: Ребята из NETI IT очень помогли мне, направив на нужный путь! Спасибо им огромное!</p>
                                <button className={styles.blueButton}>
                                    <p className={styles.blueButton_text}>Узнать больше…</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.achivements_item}>
                        <h3 className={styles.achivements_item_title}>Стажировка студентов в Yandex</h3>
                        <div className={styles.achivements_item_content}>
                            <img className={styles.achivements_img} src="./images/company.jpg" alt="company"/>
                            <div className={styles.achivements_text}>
                                <p className={styles.achivements_text_text}>Уже пять наших студентов бакалавриата проходят стажировку у Yandex! Присоединяйтесь к нам,
                                    и мы поможет найти ваш первый опыт работы!</p>
                                <p className={styles.achivements_text_text}><span>©Евгений Баженов</span>: Я очень рад, что попал после университета сразу в крупную компанию. Надеюсь остаться здесь после стажировки!)</p>
                                <button className={styles.blueButton}>
                                    <p className={styles.blueButton_text}>Узнать больше…</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
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

export default AboutUs;