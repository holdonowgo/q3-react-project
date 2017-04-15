import React from 'react'
import { Header, Icon, Image, Container, Button, Checkbox, Form, Input, Message } from 'semantic-ui-react'
import $ from 'jquery'

const handleSearch = (event) => {
  event.preventDefault();
  this.props.toggleLogin(event.target.value);
    event.preventDefault();
}
const FormExampleForm = () => (
  <div>
    <Container>
    <Header as='h2' icon textAlign='center' size='huge'>
      <Icon name='bicycle' color='purple' />
      <Header.Content>
        Register Now
      </Header.Content>
    </Header>
    <br/>
    <p className='landing'>Let Get Ready To Init Your Fitness</p>
    <br/>
  <Form warning onSubmit={handleSearch}>
    <Form.Group widths='equal'>
      <Form.Input name='firstname' required inline label='First name' placeholder='First name' />
      <Form.Input name='lastname' required inline label='Last name' placeholder='Last name' />
      <Form.Input name='email' required inline label='Email' placeholder='Email' type='email' />
      <Form.Input name='password' required inline label='Password' placeholder='Enter Passwordd'  type='password' />
      <Form.Input name='confirm' required inline label='Confirm' placeholder='Confirm Password'  type='password' />
    </Form.Group>
    <Form.Checkbox required label='I agree to the Terms and Conditions' />
    {/* get contenet messages from state */}
    <Message
      success
      header='Form Completed'
      content="You're all signed up for Fit-Init!"
    />
    <Message
      error
      header='Action Forbidden'
      content='You can only sign up for an account once with a given e-mail address.'
    />
    <Message
      warning
      header='Could you check something!'
      list={[
        'That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.',
      ]}
    />
    <Form.Button>Submit</Form.Button>
  </Form>
  <Icon name='child' size='huge' color='teal'/>
</Container>
</div>
)

// $('.ui.form')
//   .form({
//     fields: {
//       password : ['minLength[6]', 'empty'],
//       confirm   : 'match[password]',
//       // terms    : 'checked'
//     }
//   });

export default FormExampleForm
