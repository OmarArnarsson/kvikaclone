import React, { useState } from 'react'
import styles from './DepContainer.module.scss'

type Input = {
    title: string, 
    content: string
}

export const DepContainer = ({title, content}: Input) => {
    const[isFocused, setIsFocused] = useState<boolean>(false);

    return (
        <div className={isFocused ? styles.depitemFocused : styles.depitem} onMouseEnter={() => setIsFocused(true)} onMouseLeave={() => setIsFocused(false)}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.contentwrapper}>
                <p className={styles.content}>{content}</p>
            </div>
        </div>
        
    )
}
