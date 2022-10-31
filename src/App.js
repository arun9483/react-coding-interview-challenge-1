import React, { useState } from 'react';
import './App.css';

import Row from './Row';
function App() {
  const [nestedObjected] = useState({
    taxi: 'a car licensed to transport passengers in return for payment of a fare',
    food: {
      sushi:
        'a traditional Japanese dish of prepared rice accompanied by seafood and vegetables',
      apple: {
        HoneycrispHoneycrispHoneycrispHoneycrispHoneycrisp:
          'an apple cultivar developed at the MAES Horticultural Research Center',
        Fuji: 'an apple cultivar developed by growers at Tohoku Research Station',
      },
    },
  });
  return (
    <div className="react-challenge">
      {Object.entries(nestedObjected).map((entry) => {
        return <Row key={entry[0]} keyName={entry[0]} value={entry[1]} />;
      })}
    </div>
  );
}

export default App;
