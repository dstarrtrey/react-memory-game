import React from 'react';
import friends from './friends.json';
import './App.css';

function App() {
  return (
    <>
      <h1>Friends</h1>
      {friends.map(x => <img key={x.id} class="tile" alt={`${x.id}`} src={x.image} />)}
    </>
  );
}

export default App;
