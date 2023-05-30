import { useState } from 'react'
import './App.css'
import { RoutesApp } from './Routes'
import React from 'react';
import ChartComponent from './components/ChartComponent';

function App() {
  return (
    <div>
      {/* Outros componentes do seu aplicativo */}
      <ChartComponent />
    </div>
  );
}

export default App;



function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <RoutesApp />
    </>
  )
}

export default App