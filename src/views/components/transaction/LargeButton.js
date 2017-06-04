import React, { PropTypes } from 'react';

function LargeButton(props) {
  return (
    <button
      type="button"
      className="btn sign-in__button"
      onClick={props.onSubmit}>
      {props.label}
    </button>
    );
}

LargeButton.propTypes = {
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default LargeButton;
