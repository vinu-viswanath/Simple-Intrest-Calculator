import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  //state creation
  const [principle,setPrinciple] = useState('')
  const [year,setYear] = useState('')
  const [rate,setRate] = useState('')
  const [intrest,setIntrest] = useState('')

  console.log(principle);
  console.log(rate);
  console.log(year);

  const handleCalculate = (e) => {
    let output = principle * year * rate / 100
    console.log(output);
    setIntrest(output)
  }

  const handleReset = (e) => {
    setRate('')
    setYear('')
    setPrinciple('')
    setIntrest('')
  }


  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>

          <div className='head'>
            <h1>Simple Intrest Calculator</h1>
            <p>A = P (1+rt) The rate at which you borrow or lend money is called the simple interest. If a borrower takes money from a lender, an extra amount of money is paid back to the lender. The borrowed money which is given for a specific period is called the principal.</p>
          </div>

          <div className='card'>
            <h3 className='symbol'>&#8377;{intrest}</h3>
            <p id='para'>Your Total Simple Intrest</p>
          </div>

          <div className='input'>
            <TextField id="outlined-basic" label="Principal Amount" variant="outlined" 
              onChange={e=>setPrinciple(e.target.value)} value={principle}
            />
            <br/>
            <TextField id="outlined-basic" label="Rate of Intrest" variant="outlined"
              onChange={e=>setRate(e.target.value)} value={rate}
            />
            <br/>
            <TextField id="outlined-basic" label="Year" variant="outlined"
              onChange={e=>setYear(e.target.value)} value={year}
            />
            <br/>
            <Button
              onClick={handleCalculate}
              variant="contained">Calculate</Button>
            <br/>
            <Button 
            onClick={handleReset}
            variant="outlined">Reset</Button>
          </div>



        </div>
        
      </header>
    </div>
  );
}

export default App;
