import {render} from 'react-dom';
import React from 'react';
import Slider from './Slider';
import './index.css';

const slides = [
  <div key={0} style={{width: '100%', height: '100%'}}>
    <img
      alt="slide1"
      src="https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    />
    <p>HELLO</p>
  </div>,
  <img
    key={1}
    style={{width: '100%', height: '100%'}}
    alt="slide2"
    src="https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  />,
  <img
    key={2}
    style={{width: '100%', height: '100%'}}
    alt="slide3"
    src="https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  />,
  <img
    key={3}
    style={{width: '100%', height: '100%'}}
    alt="slide4"
    src="https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  />,
  <img
    key={4}
    style={{width: '100%', height: '100%'}}
    alt="slide4"
    src="https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  />,
];

const App = () => {
  return <Slider bullets>{slides}</Slider>;
};

render(<App />, document.getElementById('root'));
