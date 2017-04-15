import React from 'react'
import { Header, Icon, Image, Container } from 'semantic-ui-react';
import './Landing.css';

const Landing = () => (
  <div>
    <Container>
    <Header as='h2' icon textAlign='center' size='huge'>
      <Icon name='bicycle' color='purple' />
      <Header.Content>
        Fitness Redifined for the 21st Century
      </Header.Content>
    </Header>
    <br/>
    <p className='landing'>Fit-Init is here to redifine the way you think about fitness.  From routines, to excersizes, to complex charts mapping your progress and training, fit init provides the solutions you need to get fit now!  Fit-Init Dashboard uses state of the art tracking technology and complex data mapping to give you all you need to formulate your ideal routine.  In addition we have routines, exercises and more to get you started.  Whether you want to loose 200lbs or get 1st place in that turkey trot 5k, fit-init provides the tools to get you there.  What are you waiting for?!</p>
    <br/>
    <Icon name='child' size='huge' color='teal'/>
  </Container>
  </div>
)

export default Landing
