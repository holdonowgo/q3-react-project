import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class NavBar extends Component {
  render() {
    return (
      <div className="container">
      <div className="icon-bar five-up" role="navigation">
        <a className="item" aria-labelledby="#itemlabel1">
          <i className="fi-home large"></i>
          <label id='itemlabel1'>Home</label>
        </a>
        <a className="item" aria-labelledby="#itemlabel2">
          <i className="fi-bookmark"></i>
          <label id='itemlabel2'>Bookmark</label>
        </a>
        <a className="item" aria-labelledby="#itemlabel3">
          <i className="fi-info"></i>
          <label id='itemlabel3'>Info</label>
        </a>
        <a className="item" aria-labelledby="#itemlabel4">
          <i className="fi-mail"></i>
          <label id='itemlabel4'>Mail</label>
        </a>
        <a className="item" aria-labelledby="#itemlabel5">
          <i className="fi-like"></i>
          <label id='itemlabel5'>Like</label>
        </a>
      </div>
    </div>
    );
  }
}

export default connect()(NavBar);
