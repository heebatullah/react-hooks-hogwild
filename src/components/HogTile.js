import React from 'react';

function HogTile({ hog, onClick }) {
  return (
    <div className="ui card" onClick={() => onClick(hog)}>
      <div className="image">
        <img src={hog.image} alt={hog.name} />
      </div>
      <div className="content">
        <a className="header">{hog.name}</a>
      </div>
    </div>
  );
}

export default HogTile;
