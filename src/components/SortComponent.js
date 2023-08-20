import React, { useState, useEffect } from 'react';
import SortDropdown from './SortDropdown';
import SortIndicator from './SortIndicator';
import './SortComponent.css';

const SortComponent = ({ apiEndpoint, sortData, sortObject, updateSortObject }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // const response = await fetch(apiEndpoint);
      // const responseData = await response.json();
      const responseData = {
        "scheduled_class_sort_fields": {
          "date": {
            "displayName": "Date",
            "defaultDirection": "desc" // or "asc" for ascending
          },
          "class": {
            "displayName": "Class",
            "defaultDirection": "asc"
          },
          "start_time": {
            "displayName": "Start Time",
            "defaultDirection": "asc"
          },
          "students": {
            "displayName": "Number of Students",
            "defaultDirection": "desc"
          }
        }
      }
      setData(responseData);
      setIsLoading(false);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err);
      setIsLoading(false);
    }
  };

  const applySort = (property, direction) => {
    const updatedSortObject = { ...sortObject, [property]: direction };
    updateSortObject(updatedSortObject);
  };

  const clearSort = (property) => {
    const updatedSortObject = { ...sortObject };
    delete updatedSortObject[property];
    updateSortObject(updatedSortObject);
  };

  const clearAllSorts = () => {
    updateSortObject({});
  };

  return (
    <div className="sort-component">
      <button
        className={`sort-button${Object.keys(sortObject).length > 0 ? ' active' : ''}`}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        Sort {Object.keys(sortObject).length > 0 && <SortIndicator count={Object.keys(sortObject).length} />}
      </button>
      {isDropdownOpen && (
        <SortDropdown
          sortData={sortData}
          sortObject={sortObject}
          applySort={applySort}
          clearSort={clearSort}
          clearAllSorts={clearAllSorts}
        />
      )}
      <div className="table">
        {/* Render your table here using the fetched data and applied sorts */}
      </div>
    </div>
  );
};

export default SortComponent;
