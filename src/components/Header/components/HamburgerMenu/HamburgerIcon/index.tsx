import React from 'react';
import styles from "./styles.module.scss"
import classNames from 'classnames';

function HamburgerIcon({ isOpen, setOpen }: any) {
    return (
        <div
            className={classNames(styles.hamburger, {
                [styles.open]: isOpen === true
            })}
            onClick={() => setOpen(!isOpen)}
        >
            <span />
            <span />
            <span />
        </div>
    );
}

export default HamburgerIcon;
