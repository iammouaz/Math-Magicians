import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [states, setState] = useState({});

  const Calculate = (e) => {
    setState(calculate(states, e.target.value));
  };

  const Display = () => {
    const { total, next } = states;
    if (total === null && next == null) {
      return 0;
    }
    if (next === null) {
      return total;
    }
    return next;
  };

  return (
    <div className="Calculator">
      <span className="input"><span className="number">{Display() || 0 }</span></span>
      <button onClick={Calculate} type="button" value="AC" className="num">AC</button>
      <button onClick={Calculate} type="button" value="+/-" className="num">+/-</button>
      <button onClick={Calculate} type="button" value="%" className="num">%</button>
      <button onClick={Calculate} type="button" value="÷" className="num math">÷</button>
      <button onClick={Calculate} type="button" value="7" className="num">7</button>
      <button onClick={Calculate} type="button" value="8" className="num">8</button>
      <button onClick={Calculate} type="button" value="9" className="num">9</button>
      <button onClick={Calculate} type="button" value="x" className="num math">×</button>
      <button onClick={Calculate} type="button" value="4" className="num">4</button>
      <button onClick={Calculate} type="button" value="5" className="num">5</button>
      <button onClick={Calculate} type="button" value="6" className="num">6</button>
      <button onClick={Calculate} type="button" value="-" className="num math">-</button>
      <button onClick={Calculate} type="button" value="1" className="num">1</button>
      <button onClick={Calculate} type="button" value="2" className="num">2</button>
      <button onClick={Calculate} type="button" value="3" className="num">3</button>
      <button onClick={Calculate} type="button" value="+" className="num math">+</button>
      <button onClick={Calculate} type="button" value="0" className="num zero">0</button>
      <button onClick={Calculate} type="button" value="." className="num">.</button>
      <button onClick={Calculate} type="button" value="=" className="num math">=</button>
    </div>

  );
};

export default Calculator;
