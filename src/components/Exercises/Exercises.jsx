import React, { Component } from 'react';
// import banner from '../banner.jpg';
import { connect } from 'react-redux';
import { fetchExercises } from '../../actions';
import { bindActionCreators } from 'redux';
import strength from '../../../public/images/Health_Fitness_Icons/PNGs - Multicolor/dumbbell@2x.png';
import cardio from '../../../public/images/Health_Fitness_Icons/PNGs - Multicolor/heartbeat@2x.png';
import Navbar from '../NavBar/NavBar';
import $ from 'jquery';
import { Grid, Image, Button, Message, Menu, Segment } from 'semantic-ui-react'
import '../../App.css';
import './Exercies.css';

const mapStateToProps = (state, ownProps) => {
  return {
    exercises: state.exercises.data,
    status: state.exercises.status
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
    // var cards = this.props.exercises.map(exercise => {
    //   return (
    //     <div className="card">
    //       <img src={banner} />
    //       <div className="card-section">
    //         <h3>{exercise.name}</h3>
    //         <h3>{exercise.type.name}</h3>
    //         <h3>{exercise.muscle.name}</h3>
    //         {/* <h3>{exercise.name}</h3> */}
    //       </div>
    //     </div>
    //   );
    // });
      console.log(this.props);
      var segments = this.props.exercises.map(exercise => {
        return (
          <Grid.Row centered key={exercise.id}>
            <Grid.Column />
              <Grid.Column>
                <Segment raised='true' textAlign='center'>
                  <Image src='../../images/profiles/matthew.png' size='small' shape='circular'/>
                  <Image src={exercise.type.name === 'Strength' ? strength : cardio} size='small' shape='circular'/>
                  <Message header={exercise.name} list={[`MUSCLE:  ${  exercise.muscle.name}`, `TYPE:  ${  exercise.type.name}`, `EQUIPMENT:  ${  exercise.equipment.name}`]} />
                </Segment>
              </Grid.Column>
            <Grid.Column />
          </Grid.Row>
        );
      });

    console.log('status:', this.props.status);
    return (
      <div>
        <Button.Group className='button-group'>
          <Button className={this.props.status === 'pending' ? 'loading' : 'primary'}
            color='olive' value='biceps' onClick={this.refreshData}>{this.props.children}REFRESH</Button>
        </Button.Group>
        <Grid centered columns={3}>
          {segments}
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Exercies);
