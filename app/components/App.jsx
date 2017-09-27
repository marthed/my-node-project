import _ from 'underscore';
import path from 'path';
import React from 'react';
import ReactDOM from 'react-dom';
//import stadium from '../assets/images/stadium.jpg'
import Header from './Header.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {

  render() {
      return (
          <div className="container">
              <Header />
              <Footer creator="Martin Hedlund" />
          </div>
    );
  }
}
export default App;