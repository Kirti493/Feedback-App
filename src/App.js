import React from 'react';
import { render } from 'react-dom';
window.React = React;
import './style.css';
import { useState } from 'react';
import Header from './Components/Header';
// import FeedbackItem from './Components/FeedbackItem';
import FeedbackList from './Components/FeedbackList';
import FeedbackData from './data/FeedbackData';

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      {/* <Header text="Hello World!" /> */}
      {/* <Header bgColor="red" textColor="blue" /> */}
      <Header />
      <div className="components">
        {/* <FeedbackItem /> */}
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}
