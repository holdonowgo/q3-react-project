import React, { Component } from 'react';
// import banner from '../../banner.jpg';
import strength from '../../../public/images/Health_Fitness_Icons/PNGs - Multicolor/dumbbell@2x.png';
import cardio from '../../../public/images/Health_Fitness_Icons/PNGs - Multicolor/heartbeat@2x.png';
import biceps from '../../../public/images/muscular-hand-barbell.svg';
import chest from '../../../public/images/male-muscular-bust.svg';
import shoulders from '../../../public/images/male-muscular-shoulder.svg';
import triceps from '../../../public/images/bodybuilder-barbells-his-hands.svg';
import { connect } from 'react-redux'
import { fetchRoutines } from '../../actions'
import { bindActionCreators } from 'redux'
import Navbar from '../NavBar/NavBar'
import $ from 'jquery';
import { Grid, Image, Button, Message, Menu, Segment } from 'semantic-ui-react';
import RatingExampleHeart from '../Rating/Rating';
import '../../App.css';
import './Routines.css';

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
    var segments = this.props.routines.map(routine => {
      let image = null;
      switch (routine.muscle.name) {
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
        <Grid.Row centered key={routine.id}>
          <Grid.Column className={'four wide computer one wide mobile column'} />
            <Grid.Column className={'eight wide computer fourteen wide mobile column'}>
              <Segment raised='true' textAlign='center'>
                <Image src='../../images/profiles/elyse.png' size='small' shape='circular'/>
                <Image src={routine.type.name === 'Strength' ? strength : cardio} size='small' shape='circular'/>
                {image}<div />
                <RatingExampleHeart />
                <Message header={routine.name} list={[routine.muscle.name, routine.type.name, routine.equipment.name]} />
              </Segment>
            </Grid.Column>
          <Grid.Column className={'four wide computer one wide mobile column'} />
        </Grid.Row>
      );
    });

    return (
      <div>
        <Button.Group size='medium' round className='button-group'>
          <Button color='olive' value='biceps' onClick={this.handleSearch}>BICEPS</Button>
          <Button.Or />
          <Button color='teal' value='chest' onClick={this.handleSearch}>CHEST</Button>
          <Button.Or />
          <Button color='violet' value='shoulders' onClick={this.handleSearch}>SHOULDERS</Button>
          <Button.Or />
          <Button color='pink' value='triceps' onClick={this.handleSearch}>TRICEPS</Button>
        </Button.Group>

        <Grid centered columns={3} className='grid'>
          {segments}
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routines);
