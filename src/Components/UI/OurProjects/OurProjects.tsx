// @ts-ignore
import React, {useState} from 'react';
import styles from "./OurProjects.module.css";
import {Link} from "react-router-dom";
import Footer from "../UsedUIComponents/Footer/Footer.tsx";
import EndedProjects from "./ProjectBlocks/EndedProjects/EndedProjects.tsx";


export interface projectAndMembers {
     id?: number
     img: string,
     title: string,
     result: string,
     tasks: string,
     img1: string,
     name: string,
     job: string,
     id1?:number
}

export type Project = {
    id?: number
    img: string,
    title: string,
    result: string,
    tasks: string,
}

export type TeamMember = {
    id1?: number
    img1: string,
    name: string,
    job: string,
}

export interface Props extends Project, TeamMember {}

export interface myComp {
    props: { id?: number, id1?: number, result: string, img: string, title: string, tasks: string, name: string, job: string, img1: string },
}

const projects: {id: number, img: string, title: string, result: string, tasks: string}[] = [
    { id: 1, tasks: "Выполненные задачи проекта:\n" + "1. Состоит в создании платформера\n" + "2. Состоит в создании платформера\n" + "3. Состоит в создании платформера остоит в создании платформера", title: "Платформер на C#", result: "Итогом проекта стала кроссплатформерная игра", img: './members/Владимир.jpg' },
    { id: 2, tasks: "Выполненные задачи проекта:\n" + "1. Состоит в создании платформера\n" + "2. Состоит в создании платформера\n" + "3. Состоит в создании платформера остоит в создании платформера", title: "Сайт NETI IT", result: "Итогом проекта стал сайт NETI IT", img: './members/Тамерлан.jpg' },]

const teamMembers: {id: number, name: string, job: string, img1: string}[] = [
    { id: 1, name: "Ямщиков Владимир", job: "Руководитель проекта", img1: './members/Владимир.jpg' },
    { id: 2, name: "Тамерлан Алиев", job: "Фронтенд-разработчик", img1: './members/Тамерлан.jpg' },
    { id: 3, name: "Вадим Колесников", job: "Бекенд-разработчик", img1: './members/Вадим.jpg' },
    { id: 4, name: "Сергей Панарин", job: "Бекенд-разработчик", img1: './members/Сергей.jpg' },
    { id: 5, name: "Сергей Панарин", job: "Бекенд-разработчик", img1: './members/Сергей.jpg' },
    { id: 6, name: "Сергей Панарин", job: "Бекенд-разработчик", img1: './members/Сергей.jpg' }]

const OurProjects = () => {
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
                    <a href="#" className={styles.nav_item}>
                        <span>● Проекты</span>
                    </a>
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
                <h1 className={styles.page_title}><span>Наши проекты</span></h1>
                <div className={styles.projectBlock}>
                    <div className={styles.progress_projects}>
                        <h2 className={styles.block_title}>Текущие проекты</h2>
                        <div className={styles.project_information}>
                            {projects.map((project: Project)=><EndedProjects
                                    props={{title: project.title,
                                        result: project.result,
                                        tasks: project.tasks,
                                        img: project.img
                                    }}
                                    />
                            )}
                            {teamMembers.map((teamMember: TeamMember)=><EndedProjects
                                    props={{
                                        name: teamMember.name,
                                        job: teamMember.job,
                                        img1: teamMember.img1
                                    }}
                                />
                            )}
                        </div>
                    </div>
                    <div className={styles.ended_projects}>
                        <h2 className={styles.block_title}>Завершённые проекты</h2>
                        <div className={styles.project_information}>
                        </div>
                    </div>
                    <div className={styles.plannin_projects}>
                        <h2 className={styles.block_title}>Планируемые проекты</h2>
                        <div className={styles.project_information}>
                        </div>
                    </div>
                </div>
                <div className={styles.commentBlock}>
                    <div></div>
                    <div></div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default OurProjects;