import { Fragment, Key } from 'react';
import { mockdata } from '../../Data/Mockdata';
import { Container } from '../Containers/Container';
import styles from './News.module.scss';

export const News = () => {
    return (
        <div className={styles.newswrapper}>
            <div>
                <h2 className={styles.title}>Fréttir</h2>
            </div>
            <div>
                <div className={styles.itemswrapper}>
                    {<Fragment>
                        {
                            mockdata.map((newsitem: { id: Key | null | undefined; title: string; content: string; date: string;}) =>(
                                <Container key={newsitem.id} title={newsitem.title} content={newsitem.content} date={newsitem.date} />
                            ))
                        }
                    </Fragment>}
                </div>
            </div>
        </div>
    )
}

