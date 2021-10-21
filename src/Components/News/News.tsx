import { Key } from 'react';
import { mockdata } from '../../Data/Mockdata';
import { Container } from '../Containers/NewsContainer/Container';
import styles from './News.module.scss';

export const News = () => {
    return (
        <div className={styles.newswrapper}>
            <div>
                <h2 className={styles.title}>Fréttir</h2>
            </div>
            <div>
                <div className={styles.itemswrapper}>
                        {
                            mockdata.map((newsitem: { id: Key; title: string; content: string; date: string;}) =>(
                                <Container key={newsitem.id} title={newsitem.title} content={newsitem.content} date={newsitem.date} />
                            ))
                        }
                </div>
            </div>
        </div>
    )
}

