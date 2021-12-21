// import { useState } from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types';

function FeedbackItem({ item }) {
  //rating - is the state & setRating - is the function to edit this state
  // const [rating, setRating] = useState(7);
  // const [text, setText] = useState('This is an example of feedback item');

  return (
    // <div className="card">
    // <Card reversed={true}>
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
    // </div>
  );
}

FeedbackItem.PropTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
