import React from 'react';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="shell">
          <div className='courseName'>
            Pawnee
          </div>
          <div className="courseName">
            +
          </div>
          <br />
          <p>{!data ? "Loading..." : data}</p>
          <div className='row'>
            <div className='date'>2022/01/01</div>
            <div className='cell'>4</div>
            <div className='cell'>5</div>
            <div className='cell'>6</div>
            <div className='cell'>8</div>
            <div className='cell'>3</div>
            <div className='cell'>2</div>
            <div className='cell'>7</div>
            <div className='cell'>25</div>
            <div className='cell'>4</div>
          </div><br />
          <div className='newgame'>New Game</div>
        </div>
      </header>
        <p>Todo:
          <ul>
            <li className='done'>Mock up the layout pages</li>
            <li>Learn how to route and set that up</li>
            <li className='done'>Build a Graphql server</li>
            <li>Line out the elements to be stored</li>
            <li>Mock up a query of those elements</li>
            <li>Build a schema for queries and mutations, and types for the data</li>
          </ul>
        </p>
    </div>
  );
}

export default App;
