import React from 'react';
import styles from './style.css'

const buttonFactory = type => ({ children, className, ...props }) => {
    return <button className={[styles.button, styles[type], className].join(" ")} { ...props }>{ children }</button>
}

export const NormalButton = buttonFactory("")
export const PrimaryButton = buttonFactory("primary")
export const WarningButton = buttonFactory("warning")