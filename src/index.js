import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Browse from './pages/browse/browse.component';
import Login from './pages/login-pages/login/login.component';
import Registration from './pages/login-pages/registration/registration.component';
import LogInHelp from './pages/login-pages/help/login-help.component';
import ListPage from './pages/list-page/list-page.component';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/nextmovie' element={<App />} />
        <Route path='browse' element={<Browse />} />
        <Route path='login' element={<Login />} />
        <Route path='registration' element={<Registration />} />
        <Route path='loginHelp' element={<LogInHelp />} />
        <Route path='list/fav' element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
