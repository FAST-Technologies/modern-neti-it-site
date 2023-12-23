import React from 'react';
import styles from "./Modal.module.css"
import {popup} from "./../Teams/Teams.tsx";


const Modal: React.FC<popup> = ({account, setAccount, children}) => {
    return (
        <div className={account ? styles.modal_active : styles.modal} onClick={() => setAccount(false)}>
            <div className={account ? styles.modalContent_active : styles.modalContent} onClick={e => e.stopPropagation}>
                <div className={styles.form}>
                    <h2 className={styles.title}>Добро пожаловать!</h2>
                    <button className={styles.classicButton}>
                        <p className={styles.classicButtonText}>Регистрация с помощью Google</p>
                    </button>
                    <button  className={styles.classicButton1}>
                        <p className={styles.classicButtonText}>Регистрация с помощью Vkontakte</p>
                    </button>
                    <p className={styles.desc}>Или зарегистрироваться с помощью</p>
                    <input
                        type='text'
                        placeholder='Login'
                        className={styles.input}
                    />
                    <input
                        type='text'
                        placeholder='Password'
                        className={styles.input}
                    />
                    <p className={styles.meta}>Продолжая регистрацию, я соглашаюсь с условиями
                        <span>Пользовательского соглашения</span>, включая <span>условия обработки персональных данных</span></p>
                    <button className={styles.bigBlueButton}>
                        <p>Регистрация</p>
                    </button>
                    <div className={styles.endLine}>
                        <p className={styles.endLinetext}>Уже есть аккаунт?</p>
                        <p className={styles.endLinetext1}>Войти</p>
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;