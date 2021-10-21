import React, { useState } from 'react'
import styles from './Container.module.scss'


type Input = {
    title: string, 
    content: string, 
    date?: string
}


export const Container = ({title, content, date}: Input) => {
    const[isFocused, setIsFocused] = useState<boolean>(false);

    return (
        <div className={isFocused ? styles.newsitemFocused : styles.newsitem} onMouseEnter={() => setIsFocused(true)} onMouseLeave={() => setIsFocused(false)}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.contentwrapper}>
                <p className={styles.content}>{content}</p>
            </div>
            {date ? <p className={styles.date}>{date}</p> : null }
        </div>
    )
}