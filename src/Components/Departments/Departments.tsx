import React from 'react'
import styles from './Departments.module.scss';

export const Departments = () => {
    return (
        <div>
           <div>
               
            </div> {/*Fyrir hópana*/}
            <div className={styles.bigassqoute}>
                <div className={styles.upperchild}></div>
                <div>
                    <p className={styles.qoutetext}>„Langtímahugsun er mikilvæg þar sem traust <br/>
                        viðskiptasambönd verða til á löngum tíma. Kvika leggur <br/>
                        áherslu á alhliða þjónustu við núverandi viðskiptavini <br/>
                        og hefur hagsmuni þeirra í forgrunni.“</p>
                </div>
                <div className={styles.lowerchild}></div>
            </div>
        </div>
    )
}

