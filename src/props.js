import React from 'react';
import ReactDOM from 'react-dom';

const Propstutorial = (props) => {
  function itr() {
    for (var i = 1; i < 8; i++) {
      console.log(i);
    }
  }

  return (
    <div style={{ backgroundColor: 'green' }}>
      <h1>Props tutorial </h1>
      <h1>Name:{props.obj.name}</h1>
      <h1>Age:{props.obj.age}</h1>
      <h1>Dept:{props.obj.dept}</h1>
      <h1>College:{props.obj.clg}</h1>
    </div>
  );
};

export default Propstutorial;
