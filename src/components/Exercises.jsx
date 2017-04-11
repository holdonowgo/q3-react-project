import React, { Component } from 'react';
import banner from '../banner.jpg';
import { connect } from 'react-redux'
import { fetchExercises } from '../actions'
import { bindActionCreators } from 'redux'
import $ from 'jquery';

const mapStateToProps = (state, ownProps) => {
  return {
    exercises: state.exercises
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchExercises }, dispatch);
}

class Exercies extends Component {

  refreshData = (event) => {
    this.props.fetchExercises();
  }

  render() {
    var cards = this.props.exercises.map(exercise => {
      return (
        <div className="card">
          <img src={banner} />
          <div className="card-section">
            <h3>{exercise.name}</h3>
            <h3>{exercise.type.name}</h3>
            <h3>{exercise.muscle.name}</h3>
            {/* <h3>{exercise.name}</h3> */}
          </div>
        </div>
      );
    });

    return (
      <div>
        <button
          type="button"
          className="hollow button"
          onClick={this.refreshData}>
          {this.props.children}
          'REFRESH'
        </button>
        <div>
          {cards}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Exercies);
