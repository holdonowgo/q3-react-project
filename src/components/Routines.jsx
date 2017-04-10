import React, { Component } from 'react';
import banner from '../banner.jpg';
import { connect } from 'react-redux'
import { doSearch } from '../actions'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state, ownProps) => {
  return {
    bicepRoutines: state.routines.bicepRoutines,
    chestRoutines: state.routines.chestRoutines,
    shoulderRoutines: state.routines.shoulderRoutines,
    tricepRoutines: state.routines.tricepRoutines
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ doSearch }, dispatch);
}

class Routines extends Component {

  handleSearch = (event) => {
    this.props.doSearch()
  }

  render() {
    console.log(this.props);
    var cards = this.props.bicepRoutines.map(routine => {
      return (
        <div className="card">
          <img src={banner} />
          <div className="card-section">
            <h3>{routine.name}</h3>
          </div>
        </div>
      );
    });

    return (
      <div>
        <button
          type="submit"
          className="hollow button"
          onClick={this.handleSearch}>
          {this.props.children}
          Get Routines
        </button>
        <div>
          {cards}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routines);
