import React from 'react';

import logo from '../../assets/img/logo.png';

import './styles.css';

export default class App extends React.Component {
  render() {
    return (
      <div className='test'>
        <h1>Star Track</h1>
        <h2>Discovery</h2>
        <img
          className='test-img'
          src={logo}
          alt="Discovery"
        />
      </div>
    );
  }
}