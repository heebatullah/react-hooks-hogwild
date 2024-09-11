import React, { useState } from 'react';
import hogs from '../porkers_data'; // Importing the hogs data 
import HogTile from './HogTile'; // Correct import for the HogTile component
import FilterSortControls from './FilterSortControls'; // Correct import for the FilterSortControls component
import AddHogForm from './AddHogForm'; // Correct import for the AddHogForm component
import Nav from './Nav'; 
import '../index.css'; // Importing CSS for styling

function App() {
  const [hogList, setHogList] = useState(hogs); // State for hog data
  const [filterGreased, setFilterGreased] = useState(false); // State for filter toggle
  const [sortOption, setSortOption] = useState(''); // State for sort option
  const [hiddenHogs, setHiddenHogs] = useState(new Set()); // State to manage hidden hogs

  // Function to handle adding new hogs
  const addHog = (newHog) => {
    setHogList([...hogList, newHog]);
  };

  // Function to filter hogs based on greased status
  const filterHogs = () => {
    if (filterGreased) {
      return hogList.filter((hog) => hog.greased);
    }
    return hogList;
  };

  // Function to sort hogs based on user selection
  const sortHogs = (filteredHogs) => {
    if (sortOption === 'name') {
      return [...filteredHogs].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'weight') {
      return [...filteredHogs].sort((a, b) => a.weight - b.weight);
    }
    return filteredHogs;
  };

  // Function to handle hiding hogs
  const hideHog = (hogName) => {
    setHiddenHogs(new Set(hiddenHogs.add(hogName)));
  };

  // Filter and sort hogs based on user inputs
  const displayedHogs = sortHogs(filterHogs()).filter(
    (hog) => !hiddenHogs.has(hog.name)
  );

  return (
    <div className="ui grid container">
      <Nav />
      <FilterSortControls
        filterGreased={filterGreased}
        setFilterGreased={setFilterGreased}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <AddHogForm addHog={addHog} />
      <div className="ui eight wide column">
        {displayedHogs.map((hog) => (
          <HogTile key={hog.name} hog={hog} hideHog={hideHog} />
        ))}
      </div>
    </div>
  );
}

export default App;
