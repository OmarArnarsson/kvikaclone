import React from 'react'
import styles from './Container.module.scss'


type Input = {
    title: string, 
    content: string, 
    date?: string
}


export const Container = ({title, content, date}: Input) => {
    return (
        <div className={styles.NewsItem}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.contentwrapper}>
                <p className={styles.content}>{content}</p>
            </div>
            <p className={styles.date}>{date}</p>
        </div>
    )
}