import React from 'react';

function HogDetails({ hog }) {
  return (
    <div className="ui card">
      <div className="content">
        <h3>{hog.name}</h3>
        <p>Specialty: {hog.specialty}</p>
        <p>Weight: {hog.weight}</p>
        <p>Greased: {hog.greased ? 'Yes' : 'No'}</p>
        <p>Highest Medal: {hog.highestMedal}</p>
      </div>
    </div>
  );
}

export default HogDetails;
