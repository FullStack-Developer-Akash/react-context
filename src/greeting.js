import React from 'react';
import ReacrDOM from 'react-dom';

const Greeting = (props) => {
  const date = new Date(1999, 10, 29, 17);
  const hour = date.getHours();
  let greet;

  if (hour < 12) {
    greet = 'Good Morning';
  } else if ((hour >= 12) & (hour <= 17)) {
    greet = 'Good Evening;';
  } else {
    greet = 'Good Night';
  }

  const greetstyle = {
    color: 'white',
    fontSize: 50,
    backgroundColor: 'green',
  };
  const divstyle = {
    backgroundColor: 'blue',
  };

  const h2style = { backgroundColor: 'yellow' };
  return (
    <div style={divstyle}>
      <h1 style={greetstyle}>
        {greet} {props.name}
      </h1>
      <h2 style={h2style}>
        Welcome to the spotify.<br></br>
        Listen your Favourite musics
      </h2>
    </div>
  );
};

export default Greeting;
