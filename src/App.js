import React from 'react';
import { render } from 'react-dom';
window.React = React;
import './style.css';
import Header from './Components/Header';

export default function App() {
  return (
    <>
      {/* <Header text="Hello World!" /> */}
      {/* <Header bgColor="red" textColor="blue" /> */}
      <Header />
      <div className="components">
        <h1>Hello </h1>
      </div>
    </>
  );
}
