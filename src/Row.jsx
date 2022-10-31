import React from 'react';
import './Row.css';
const Row = ({ keyName, value }) => {
  return (
    <div className="row">
      <div className="key-container">{keyName}:</div>
      {typeof value === 'string' ? (
        <div className="value-container">{value}</div>
      ) : (
        <div className="value-container">
          {Object.entries(value).map((entry) => {
            return <Row key={entry[0]} keyName={entry[0]} value={entry[1]} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Row;
