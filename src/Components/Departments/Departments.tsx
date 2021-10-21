import React, { Key, useState } from 'react'
import styles from './Departments.module.scss';
import { mockdata2 } from '../../Data/Mockdata';
import { DepContainer } from '../Containers/DepContainer/DepContainer';

export const Departments = () => {
    const[isFocused, setIsFocused] = useState<boolean>(false);

    return (
        <div>
           <div className={styles.list}>
               {
                   mockdata2.map((depitem: { id: Key; title: string; content: string;}) =>(
                        <DepContainer key={depitem.id} title={depitem.title} content={depitem.content} />
                   ))
               }
               {/*<div className={styles.smallchild}></div>
               <div className={styles.smallchild}></div>
               <div className={styles.smallchild}></div>
            <div className={styles.smallchild}></div>*/}
             <div className={isFocused ? styles.bigchildFocused : styles.bigchild} onMouseEnter={() => setIsFocused(true)} onMouseLeave={() => setIsFocused(false)}>
                <h1 className={styles.title}>Tryggingar</h1>
                <div className={styles.contentwrapper}>
                    <p className={styles.content}>TM dótturfélag Kviku er alhliða tryggingarfélga fyrir einstaklinga og fyrirtæki. 
                    TM leggur áherslu á stafrænar lausnir og skilvirka þjónustu og er leiðandi í því að einfalda tryggingamál og 
                    færa samskipti milli tryggingafélags og viðskiptavinar inn í nýja tíma.</p>
                </div>
            </div>
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

