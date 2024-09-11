import React from 'react';

function FilterSortControls({ setFilterGreased, setSortOrder }) {
  return (
    <div>
      <button onClick={() => setFilterGreased(prev => !prev)}>
        {`Greased Only: ${setFilterGreased ? 'On' : 'Off'}`}
      </button>
      <select onChange={(e) => setSortOrder(e.target.value)}>
        <option value="">Sort By</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  );
}

export default FilterSortControls;
