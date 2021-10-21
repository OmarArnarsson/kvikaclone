import React from 'react'
import viti from './viti.jpg';
import styles from './Management.module.scss';

export const Management = () => {
    return (
        <div className={styles.wrapper}>
                <img src={viti} alt="Viti" className={styles.backgroundimg}></img>
                <div className={styles.imgholder}>
                    <div className={styles.contentholder}>
                        <a href="https://www.kvikaeignastyring.is/">
                            <h1 className={styles.header}>Eignastýring</h1>
                            <p className={styles.texti}>Eignastýring Kviku veitir alhliða fjármálaþjónustu með áherslu á langtímaárangur.</p>
                        </a>
                    </div>
                </div>
        </div>
    )
}

