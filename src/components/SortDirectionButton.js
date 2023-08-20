import React from 'react';

const SortDirectionButton = ({ direction, active, onClick }) => {
  return (
    <button
      className={`sort-direction${active ? ` ${direction}` : ''}`}
      onClick={onClick}
    >
      {direction.toUpperCase()}
    </button>
  );
};

export default SortDirectionButton;
