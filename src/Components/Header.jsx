import PropTypes from 'prop-types';
function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    // backgroundColor: 'blue',
    // color: 'red',
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <>
      {/* <header style={{ backgroundColor: 'blue', color: 'red' }}> */}
      <header style={headerStyles}>
        <div className="container">
          <h1>{text}</h1>
        </div>
      </header>
    </>
  );
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
};

Header.PropTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
