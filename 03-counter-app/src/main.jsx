import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './helloWorldApp';
import FirstApp from './firstApp';
import './styles.css';
import CounterApp from './CounterApp/counterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <FirstApp title='abc'/>
    <CounterApp value={ 123 }/>
  </React.StrictMode>
);
