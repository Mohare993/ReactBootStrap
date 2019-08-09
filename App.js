import React from 'react';
import './App.css';
import Headercomponent from './HeaderComponent';

function App() {

  return (
    <>
    <Headercomponent/>
  

    <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Location</th>
      <th scope="col">Ops</th>
    </tr>
  </thead>
  </table>
    </>
  );
}

export default App;
