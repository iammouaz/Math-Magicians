import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Calculator">
        <input className="input" value="0" />
        <button type="submit" className="num">AC</button>
        <button type="submit" className="num">+/-</button>
        <button type="submit" className="num">%</button>
        <button type="submit" className="num math">÷</button>
        <button type="submit" className="num">7</button>
        <button type="submit" className="num">8</button>
        <button type="submit" className="num">9</button>
        <button type="submit" className="num math">×</button>
        <button type="submit" className="num">4</button>
        <button type="submit" className="num">5</button>
        <button type="submit" className="num">6</button>
        <button type="submit" className="num math">-</button>
        <button type="submit" className="num">1</button>
        <button type="submit" className="num">2</button>
        <button type="submit" className="num">3</button>
        <button type="submit" className="num math">+</button>
        <button type="submit" className="num zero">0</button>
        <button type="submit" className="num">.</button>
        <button type="submit" className="num math">=</button>
      </div>

    );
  }
}

export default Calculator;
