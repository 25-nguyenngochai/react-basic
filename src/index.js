import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './component/App';
import './component/index.scss';
import reportWebVitals from './reportWebVitals';
import ListTodo from './component/TodoList/ListTodo';
import Header from './component/Header/Header';
import DisplayCaculator from './component/Caculator/DisplayCaculator';
import Login from './component/User/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="todolist" element={<ListTodo />}/>
          <Route path="caculator" element={<DisplayCaculator />}/>
          <Route path="login" element={<Login />}/>
          <Route index element={<Header />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
