import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
function reloj(){
    const elemento=(<div>
        <h1>Hola Este es el tiempo ahora!</h1>
        <h2>Esta es la hora : {new Date().toLocaleTimeString()}</h2>
    </div>);

}


setInterval(reloj,1000);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
