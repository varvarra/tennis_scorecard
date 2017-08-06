// this component is responsible for showing the results for two players. The results are passed as props.
// I chose for results board to have a dumb component as the view template may endure changes in future, and have it isolated will serve useful. the same is with the winnerPanel
import React from 'react';
// import PropTypes from 'prop-types'

const Results = ({ pl1Result, pl2Result }) => {
  return (
    <div>
      <div>Player 1 Score: {pl1Result} </div>
      <div>Player 1 Score: {pl2Result}</div>
    </div>
  )
}



  // Results.propTypes = {
  //   pl1Result: PropTypes.number.isRequired,
  //   pl2Result: PropTypes.number.isRequired
  // }

  export default Results
