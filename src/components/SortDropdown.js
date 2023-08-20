import React from 'react';
import SortDirectionButton from './SortDirectionButton';
import './SortDropdown.css';

const SortDropdown = ({ sortData, sortObject, applySort, clearSort, clearAllSorts }) => {
  return (
    <div className="sort-dropdown">
      {Object.entries(sortData).map(([property, config]) => (
        <div key={property} className="sort-option">
          <span>{config.displayName}</span>
          <SortDirectionButton
            direction="asc"
            active={sortObject[property] === 'asc'}
            onClick={() => applySort(property, 'asc')}
          />
          <SortDirectionButton
            direction="desc"
            active={sortObject[property] === 'desc'}
            onClick={() => applySort(property, 'desc')}
          />
          {sortObject[property] && (
            <button className="clear-sort" onClick={() => clearSort(property)}>
              Clear
            </button>
          )}
        </div>
      ))}
      {Object.keys(sortObject).length > 0 && (
        <button className="clear-all" onClick={clearAllSorts}>
          Clear All
        </button>
      )}
    </div>
  );
};

export default SortDropdown;
