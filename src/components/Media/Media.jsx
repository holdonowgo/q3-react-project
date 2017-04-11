import React, { Component } from 'react';
// import banner from '../banner.jpg';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import media from '../../data/media';

class Media extends Component {

  render() {
    var cards = media.map(m => {
      let url = `https://www.${m.url}`;
      return (
        <div className="responsive-embed">
          <iframe width="420" height="315" src={`https://www.youtube.com/embed/dXiR7kQGegQ`} frameborder="0" allowfullscreen></iframe>
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

export default connect()(Media);
