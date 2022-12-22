import React, { Component, useState, memo, useEffect, useMemo } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

const App = () => {
  const [count, setCount] = useState(0);
  const colors = ['red', 'green'];

  const callbackFucn = useMemo(() => colors, []);

  const increase = () => setCount(count + 1);

  return (
    <>
      <button onClick={increase}>Increase</button>
      <div>{count}</div>
      <ChildComp callbackFucn={callbackFucn} />
    </>
  );
};

const ChildComp = memo(({ callbackFucn }) => {
  console.log('updated');
  return <div>Child component</div>;
});

render(<App appName="User Details" />, document.getElementById('root'));
