import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

// components
import Home from '../components/Home';
import Calculator from '../components/Calculator';
import Quote from '../components/Quote';

describe('Components Matches Test', () => {
  it('Home Components Matches', () => {
    const home = renderer
      .create(<Home />)
      .toJSON();
    expect(home).toMatchSnapshot();
  });

  it('Calculator Components Matches', () => {
    const calculator = renderer
      .create(<Calculator />)
      .toJSON();
    expect(calculator).toMatchSnapshot();
  });

  it('quote Components Matches', () => {
    const quote = renderer
      .create(<Quote />)
      .toJSON();
    expect(quote).toMatchSnapshot();
  });
});

describe('User interaction simulation test', () => {
  it('Home route test', () => {
    render(<Home />);
  });
  it('Quote route test', () => {
    render(<Quote />);
  });
  it('Calculator route test', () => {
    render(<Calculator />);
  });
});
