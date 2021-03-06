// import { useState } from 'react';

// import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card';
import PropTypes from 'prop-types';

function FeedbackItem({ item }) {
  //rating - is the state & setRating - is the function to edit this state
  // const [rating, setRating] = useState(7);
  // const [text, setText] = useState('This is an example of feedback item');

  //2. button onclick function
  // const handleClick = () => {
  //   console.log(item.id);
  // };

  //3. button onclick function catching the id
  // const handleClick = (id) => {
  //   console.log(id);
  // };

  return (
    // <div className="card">
    // <Card reversed={true}>
    <Card>
      <div className="num-display">{item.rating}</div>
      {/* <button className="close">
        <FaTimes color="purple"></FaTimes>
      </button> */}

      {/*1. inline onClick event listener. */}
      <button
        onClick={() => console.log(item.id)}
        //2.  Writing a function
        //  <button onClick={handleClick}

        //3. If we want to pass in the argument like id we can do like this
        // <button onClick={() => handleClick(item.id)}
        className="close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="close"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
    // </div>
  );
}

FeedbackItem.PropTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
