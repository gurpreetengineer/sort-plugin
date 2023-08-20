import React, { useState } from 'react';
import SortComponent from './components/SortComponent';

const App = () => {
  const [sortObject, setSortObject] = useState({});
  // Define your API endpoint and sort data here
  const apiEndpoint = 'YOUR_API_ENDPOINT';
  const sortData = {
    // Your sort data configuration
  };

  const updateSortObject = (newSortObject) => {
    setSortObject(newSortObject);
    // Update your table data based on the new sort object
  };

  return (
    <div className="app">
      <h1>Table with Sorts</h1>
      <SortComponent
        apiEndpoint={apiEndpoint}
        sortData={sortData}
        sortObject={sortObject}
        updateSortObject={updateSortObject}
      />
    </div>
  );
};

export default App;
