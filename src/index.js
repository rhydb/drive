import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './components/AuthProvider';

import { Root } from "./routes/root";
import { Login } from './routes/login';
import { ProtectedLayout } from './components/ProtectedLayout';

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<AuthProvider />}>
    <Route path="/login" element={<Login />}></Route>
    <Route element={<ProtectedLayout />}>
      <Route path="/*" element={<Root />}></Route>
    </Route>
  </Route>
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
