import ReactDOM from 'react-dom';
import React from 'react';
import List from './containers/list';
import 'bootswatch/dist/darkly/bootstrap.min.css';

ReactDOM.render(
  <main className='bg-dark'>
    <div className='container'>
      <List />
    </div>
  </main>,
  document.getElementById('root')
);
