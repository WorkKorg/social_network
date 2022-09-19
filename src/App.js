import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className={'aboba'}>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/87/87390.png"/>
            </header>
            <nav className={'biba'}>
                <div>
                    <a> Profile </a>
                </div>
                <div>
                    <a> Messages </a>
                </div>
                <div>
                    <a> News </a>
                </div>
                <div>
                    <a> Music </a>
                </div>
                <div>
                    <a> Settings </a>
                </div>
            </nav>
            <div className={'sanya'}>
                Main content
            </div>
        </div>);
}
export default App;