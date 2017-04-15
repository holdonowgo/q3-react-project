import React from 'react'
import { Header, Icon, Image, Container, Button, Checkbox, Form, Input, Message } from 'semantic-ui-react'
// import $ from 'jquery'

const handleSearch = (event) => {
  event.preventDefault();
  this.props.toggleLogin(event.target.value);
    event.preventDefault();
}
const LoginForm = () => (
  <div>
    <Container>
    <Header as='h2' icon textAlign='center' size='huge'>
      <Icon name='bicycle' color='purple' />
      <Header.Content>
        Sign In
      </Header.Content>
    </Header>
    <br/>
    <p className='landing'>Let Get Ready To Init Your Fitness</p>
    <br/>
  <Form warning onSubmit={handleSearch}>
    <Form.Group widths='equal'>
      <Form.Input name='email' required inline label='Email' placeholder='Email' type='email' />
      <Form.Input name='password' required inline label='Password' placeholder='Enter Passwordd'  type='password' />
    </Form.Group>
    {/* get contenet messages from state */}
    <Message
      success
      header='Form Completed'
      content="You're logged into Fit-Init!"
    />
    <Message
      error
      header='Action Forbidden'
      content='Your email or password are incorrect.'
    />
    <Form.Button>Submit</Form.Button>
  </Form>
  <Icon name='child' size='huge' color='teal'/>
</Container>
</div>
)

export default LoginForm
