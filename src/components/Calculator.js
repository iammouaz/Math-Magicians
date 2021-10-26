/* eslint-disable react/destructuring-assignment */
const Calc = (int) => (
  <div className={int.class}>
    {int.number}
  </div>
);

const App = () => (
  <div className="Calculator">
    <input className="input" value="0" />
    <Calc class="num" number="AC" />
    <Calc class="num" number="+/-" />
    <Calc class="num" number="%" />
    <Calc class="num math" number="÷" />
    <Calc class="num" number="7" />
    <Calc class="num" number="8" />
    <Calc class="num" number="9" />
    <Calc class="num math" number="×" />
    <Calc class="num" number="4" />
    <Calc class="num" number="5" />
    <Calc class="num" number="6" />
    <Calc class="num math" number="-" />
    <Calc class="num" number="1" />
    <Calc class="num" number="2" />
    <Calc class="num" number="3" />
    <Calc class="num math" number="+" />
    <Calc class="num zero" number="0" />
    <Calc class="num" number="." />
    <Calc class="num math" number="=" />
  </div>
);

export default App;
