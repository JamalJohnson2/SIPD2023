import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navigation from './Pages/Navigation/Nav';
import Header from './Pages/Header/Header';
import Content from './Pages/Body/Content';
import Gallery from './Pages/Body/Gallery';
import OfficerList from './Pages/Body/OfficerCards';
import Footer from './Pages/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation />
    <Header />
    <Content />
    <OfficerList />
    <Gallery />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
