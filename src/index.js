import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import Exercise from './components/Exercsie1.1/exercise';
import Quiz from "../src/components/Quiz1.1/Quiz"
// import App from './App-original';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Exercise /> */}
    <Quiz />
  </React.StrictMode>
);