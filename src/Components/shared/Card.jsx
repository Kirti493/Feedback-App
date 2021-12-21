import PropTypes from 'prop-types';

function Card({ children, reversed }) {
  //Conditional Class
  // return <div className={`card ${reversed && 'reverse'}`}>{children}</div>;

  //conditional styling
  return (
    <div
      className="card"
      style={{
        backgroundColor: reversed ? 'rgba(0,0,0,0.4)' : '#fff',
        color: reversed ? '#fff' : 'rgba(0,0,0,0.4)',
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProp = {
  reversed: false,
  //to make the background as dark
  //reversed: true,
};

Card.PropTypes = {
  children: PropTypes.node.isRequired,
  reversed: PropTypes.bool,
}

export default Card;
