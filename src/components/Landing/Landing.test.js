import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';

import Landing from './Landing.jsx';

describe('Search', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Landing />, div);
  });

  test('snapshots', () => {
    const component = shallow(
      <Landing />
    );
    expect(toJson(component)).toMatchSnapshot();
    //
    // component.find('[name="toggle-preview"]').simulate('click');
    // expect(toJson(component)).toMatchSnapshot();
  });
})
