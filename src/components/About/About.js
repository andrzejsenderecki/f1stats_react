import React from 'react';
import Title from '../Title/Title';

const About = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-12'>
                    <Title 
                        styles='title'
                        title='O projekcie'
                        description='Projekt przedstawia statystyki z wyścigów F1 na bazie danych pobranych z Ergast API.
                        Na podstawie przetworzonych danych generowane są wykresy lub tabele ze statystykami dotyczącymi najbardziej
                        prestiżowego sportu motorowego na świecie!'
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-12 aboutListContainer'>
                    <ul className='aboutList'>
                        <li className='aboutDecoration'>Link do repozytorium:
                            <ul>
                                <li><a className='aboutLink' href='https://github.com/andrzejsenderecki/f1stats_react' target='_blank' rel='noopener noreferrer'>Repozytorium F1stats!</a></li>
                            </ul>
                        </li>
                        <li className='aboutListTitle'>Technologie wykorzystane w projekcie:</li>

                        <li className='aboutDecoration'>React:
                            <ul>
                                <li>React Router</li>
                                <li>React SASS Loader</li>
                                <li>React Responsive</li>
                                <li>React Google Charts</li>
                            </ul>
                        </li>
                        <li className='aboutDecoration'>JavaScript:
                            <ul>
                                <li>ES6</li>
                                <li>Fetch</li>
                            </ul>
                        </li>
                        <li className='aboutDecoration'>HTML, CSS:
                            <ul>
                                <li>SASS</li>
                                <li>Responsive Web Design</li>
                            </ul>
                        </li>
                        <li className='aboutDecoration'>Inne technologie:
                            <ul>
                                <li>JSON</li>
                                <li>Webpack</li>
                                <li>Git</li>
                                <li>Projekt wykorzystuje dane dynamicznie pobierane z Ergast API</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;
