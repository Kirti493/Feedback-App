// import { useState } from 'react';

function FeedbackItem({ item }) {
  //rating - is the state & setRating - is the function to edit this state
  // const [rating, setRating] = useState(7);
  // const [text, setText] = useState('This is an example of feedback item');

  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </div>
  );
}

export default FeedbackItem;
