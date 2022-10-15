import React from 'react';
import './App.css';
import { useQuery, gql } from '@apollo/client'

function App() {

  const ListCourses = gql`
    query ListCourses {
      getAllCourses {
        name
      }
    }`
  function CourseList() {
    const { loading, error, data } = useQuery(ListCourses);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(  </p>;
    return data.getAllCourses.map(({ name }) => (
      <div key={name} className="courseName">
        <a href="#">{name}</a>
      </div>
    ));
  }

  



  return (
    <div className="App">
      <header className="App-header">
        <div className="shell">
          <CourseList></CourseList>
          <div className="courseName">
            +
          </div>
          <br />
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
        <p>Todo:</p>
          <ul>
            <li className='done'>Mock up the layout pages</li>
            <li>Learn how to route and set that up</li>
            <li className='done'>Build a Graphql server</li>
            <li>Line out the elements to be stored</li>
            <li>Mock up a query of those elements</li>
            <li>Build a schema for queries and mutations, and types for the data</li>
            <li>Add links to course names</li>
            <li>Add adding a course</li>
          </ul>
        
    </div>
  );
}

export default App;
