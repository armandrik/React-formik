import React from 'react';
import './App.css';
import { Register } from './Views/Register';
import { Validate } from './Views/Validate';
import { Routes, Route } from 'react-router-dom';
import { Succses } from './Views/Succses';
import { StepByStep } from './Views/StepByStep';

function App() {

  const [data , setData] = React.useState([])
  const [step , setStep] = React.useState(1)

  const changeData = (item) =>{
    setData(item)
    setStep(prevState => prevState - 1)
  }

  const getData = (info) =>{
    setData(info)
    setStep(prevState => prevState + 1)
  }

  const endStep = () =>{
    setStep(prevState => prevState + 1)

  }

  return (
    <div className="App">
      <StepByStep stepNumber={step}/>
      <Routes>
        <Route path='/' exact element={<Register getData={getData} changedData={data}/>} />
        <Route path='/register' element={<Validate data={data} changeData={changeData} endStep={endStep}/>} />
        <Route path='/succses' element={<Succses/>}/>
      </Routes>
    </div>
  );
}

export default App;
