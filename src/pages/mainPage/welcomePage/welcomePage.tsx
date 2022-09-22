import React from 'react';
import styles from './welcomePage.module.scss'
import Office from "../../../assets/welcomePage/office.png"
const WelcomePage = () => {
    return (
        <div>
            <div className={styles.wrapper}>
                <div>
                    <img src={Office} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;
