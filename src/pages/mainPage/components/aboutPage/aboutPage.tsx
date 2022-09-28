import React from 'react';

import styles from './aboutPage.module.scss'
import chef from '../../../../assets/aboutPage/chef.svg'
import table from '../../../../assets/aboutPage/table.png'

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.about}>
                <h1 className={styles.title}>О нашем ресторане</h1>
                <p className={styles.subtitle}> Разнообразный и богатый опыт говорит нам, что граница обучения кадров требует анализа поэтапного и
                    последовательного развития общества. Как принято считать, явные признаки победы институционализации,
                    инициированные исключительно синтетически.</p>
                <div className={styles.text}>
                    <p>В рамках спецификации современных стандартов, некоторые особенности внутренней целой серии.</p>
                    <img src={chef} alt="chef"/>
                </div>
            </div>
            <div>
                <img src={table} alt="table"/>
            </div>
        </div>
    );
};

export default AboutPage;
