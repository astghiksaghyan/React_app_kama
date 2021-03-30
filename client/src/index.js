import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const postsData = [
  {id: 1, message: 'Hy, how are you?', likesCount: 1},
  {id: 2, message: 'It is my first post', likesCount: 5}
];

const dialogsData = [
  {
      id: 1,
      name: 'Astghik',
      message: 'Hi'
  },
  {
      id: 2,
      name: 'Davit',
      message: 'How are you?'
  },
  {
      id: 3,
      name: 'Yerem',
      message: 'Yo'
  },
  {
      id: 4,
      name: 'Poghos',
      message: 'Bo'
  }
];

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
