import React, { Component } from 'react';
import banner from '../banner.jpg';
import { connect } from 'react-redux'
import { fetchRoutines } from '../actions'
import { bindActionCreators } from 'redux'
import $ from 'jquery';

const mapStateToProps = (state, ownProps) => {
  return {
    routines: state.routines
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchRoutines }, dispatch);
}

class Routines extends Component {

  handleSearch = (event) => {
    this.props.fetchRoutines(event.target.value);
  }

  render() {
    var cards = this.props.routines.map(routine => {
      return (
        <div className="card">
          <img src={banner} />
          <div className="card-section">
            <h3>Exercise: {routine.name}</h3>
            <h3>Muscle: {routine.muscle.name}</h3>
            <h3>Type: {routine.type.name}</h3>
            <h3>Equipment: {routine.equipment.name}</h3>
          </div>
        </div>
      );
    });

    return (
      <div>
        <button
          value="biceps"
          type="submit"
          className="hollow button"
          onClick={this.handleSearch}>
          {this.props.children}
          BICEPS
        </button>
        <button
          value="chest"
          type="submit"
          className="hollow button"
          onClick={this.handleSearch}>
          {this.props.children}
          CHEST
        </button>
        <button
          value="shoulders"
          type="submit"
          className="hollow button"
          onClick={this.handleSearch}>
          {this.props.children}
          SHOULDERS
        </button>
        <button
          value="triceps"
          type="submit"
          className="hollow button"
          onClick={this.handleSearch}>
          {this.props.children}
          TRICEPS
        </button>
        <div>
          {cards}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routines);