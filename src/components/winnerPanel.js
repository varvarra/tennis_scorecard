import React from 'react';
// import PropTypes from 'prop-types';

const WinnerPanel = ({ completed, player }) => {

  return(
    <div style={{
        textDecoration: completed ? 'inline' : 'none'
      }}> {player} has won! </div>

  )
}


  // WinnerPanel.propTypes = {
  //   completed: PropTypes.boolean.isRequired,
  //   player: PropTypes.string.isRequired
  // }

  export default WinnerPanel
