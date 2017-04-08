import React, { Component } from 'react';
import banner from '../banner.jpg';

class Routines extends Component {
  render() {
    var cards = [1,2,3,4].map(function(item) {
      return (
        <div className="card">
          <img src={banner} />
          <div className="card-section">
            <p>This is a simple card with an image.</p>
          </div>
        </div>
      );
    });

    return (
      <div>
        {cards}
      </div>
    );
  }
}

export default Routines;
