import React, { Component } from 'react';
// import banner from '../banner.jpg';
import { connect } from 'react-redux';
import { fetchExercises } from '../../actions';
import { bindActionCreators } from 'redux';
import strength from '../../../public/images/Health_Fitness_Icons/PNGs - Multicolor/dumbbell@2x.png';
import cardio from '../../../public/images/Health_Fitness_Icons/PNGs - Multicolor/heartbeat@2x.png';
import biceps from '../../../public/images/muscular-hand-barbell.png';
import chest from '../../../public/images/male-muscular-bust.png';
import shoulders from '../../../public/images/male-muscular-shoulder.png';
import triceps from '../../../public/images/bodybuilder-barbells-his-hands.png';
import Navbar from '../NavBar/NavBar';
import $ from 'jquery';
import { Grid, Image, Button, Message, Menu, Segment } from 'semantic-ui-react'
import '../../App.css';
import './Exercies.css';
import RatingExampleHeart from '../Rating/Rating'

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
    var segments = this.props.exercises.map(exercise => {
      let image = null;
      switch (exercise.muscle.name) {
        case 'Biceps':
          image = <Image src={biceps} size='small' shape='circular'/>;
          break;
        case 'Chest':
          image = <Image src={chest} size='small' shape='circular'/>;
          break;
        case 'Shoulders':
          image = <Image src={shoulders} size='small' shape='circular'/>;
          break;
        case 'Triceps':
          image = <Image src={triceps} size='small' shape='circular'/>;
          break;
        default:
          image = null;
          break;
      }
      return (
        <Grid.Row centered key={exercise.id}>
          <Grid.Column className='four wide'/>
            <Grid.Column className='eight wide'>
              <Segment raised='true' textAlign='center'>
                <Image src='../../images/profiles/matthew.png' size='small' shape='circular'/>
                <Image src={exercise.type.name === 'Strength' ? strength : cardio} size='small' shape='circular'/>
                {image}<div />
                <RatingExampleHeart />
                <Message header={exercise.name}
                  list={[`MUSCLE:  ${  exercise.muscle.name}`, `TYPE:  ${  exercise.type.name}`, `EQUIPMENT:  ${  exercise.equipment.name}`]} />
              </Segment>
            </Grid.Column>
          <Grid.Column className='four wide'/>
        </Grid.Row>
      );
    });

    return (
      <div>
        <Button.Group size='big' className='button-group'>
          <Button className={this.props.status === 'pending' ? 'loading' : 'primary'}
            color='olive' value='biceps' onClick={this.refreshData}>{this.props.children}REFRESH</Button>
        </Button.Group>
        <Grid centered columns={3} padding='20px'>
          {segments}
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Exercies);
