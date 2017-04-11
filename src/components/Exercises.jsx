import React, { Component } from 'react';
import banner from '../banner.jpg';
import { connect } from 'react-redux'
import { fetchRoutines } from '../actions'
import { bindActionCreators } from 'redux'
import $ from 'jquery';

const mapStateToProps = (state, ownProps) => {
  return {
    routines: state.exercises
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchExercises }, dispatch);
}

class Exercies extends Component {

  handleSearch = (event) => {
    this.props.fetchExercises();
  }

  render() {
    var cards = this.props.exercises.map(exercise => {
      return (
        <div className="card">
          <img src={banner} />
          <div className="card-section">
            <h3>{exercise.name}</h3>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div>
          {cards}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Exercies);
