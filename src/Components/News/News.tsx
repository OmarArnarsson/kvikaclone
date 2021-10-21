import { Fragment, Key } from 'react';
import './News.scss';
import { mockdata } from '../../Data/Mockdata';
import { Container } from '../Containers/Container';

export const News = () => {
    return (
        <div className="News-wrapper">
            <div>
                <h2 className="Title">Fréttir</h2>
            </div>
            <div>
                <div className="Items-wrapper">
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

