import React from 'react';
import ReactDOM from 'react-dom';

const tasks = ['Take out the trash', 'Shovel the driveway', 'Walk the dog'];

const element = <ol>
  <li>{tasks[0]}</li>
  <li>{tasks[1]}</li>
  <li>{tasks[2]}</li>
  </ol>;

ReactDOM.render(element, document.getElementById('root'));
