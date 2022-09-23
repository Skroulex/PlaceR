import React from 'react';
import styles from './welcomePage.module.scss'
import Office from "../../../assets/welcomePage/office.png"

const WelcomePage = () => {
    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.image}>
                    <img src={Office} alt="office"/>
                </div>
                <div className={styles.text}>
                    <p className={styles.title}>
                        Добро пожаловать в Наш ресторан
                    </p>
                    <p className={styles.subtitle}>
                        Cвоевременного выполнения сверхзадачи. В частности, новая модель организационной деятельности
                        создаёт предпосылки для модели развития.
                    </p>
                    <div className={styles.menu}>
                        <button className={styles.sign_up}>Регистрация</button>
                        <button className={styles.sign_in}>Меню</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WelcomePage;
