import React, { useState } from 'react'

import './App.css';
import { FrontDriveOptions, DriveBrandOptions, MechElectronicOptions, MechOptions, ElectronicOptions } from './components/DATA/Data'
import SelectInput from './components/UI/SelectInput';



function App() {

  const frontDriveOptions = FrontDriveOptions
  const driveBrandOptions = DriveBrandOptions
  const mechElectronicOptions = MechElectronicOptions
  const mechOptions = MechOptions
  const electronicOptions = ElectronicOptions

  const [frontDrive, setFrontDrive] = useState('')

  const frontDriveChangeHandler = (event) => {
    const selection = event.target.value
    setFrontDrive(selection)
    console.log(selection)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(frontDrive)
  }

  return (
    <div className="App">
      <h1>Bildr</h1>
      
      <form onSubmit={handleSubmit}>      
       
        <SelectInput onChange={frontDriveChangeHandler} value={frontDrive} label="Front Drive Options" selectInitialValue="Please select 1x or 2x" selectOptions={frontDriveOptions} />

        <SelectInput label="Drivetrain Brand" selectInitialValue="Please select drivetrain brand" selectOptions={driveBrandOptions} />

        <SelectInput label="Mechanical or Electric Shifting" selectInitialValue="Please select" selectOptions={mechElectronicOptions} />

        <SelectInput label="Mechanical Drivetrain Options" selectInitialValue="Please select mechanical options" selectOptions={mechOptions} />
        
        <SelectInput label="Electronic Options" selectInitialValue="Please select electronic options" selectOptions={electronicOptions} />
        
        <input type="submit" value="submit" />
      </form>

      <div>
        <h2>Selections</h2>
        <p>{frontDrive}</p>
      </div>


    </div>
  );
}

export default App;
