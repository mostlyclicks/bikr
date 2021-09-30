import './App.css';
import { FrontDriveOptions, DriveBrandOptions, MechElectronicOptions, MechOptions, ElectronicOptions } from './components/DATA/Data'
import SelectInput from './components/UI/SelectInput';



function App() {

  const frontDriveOptions = FrontDriveOptions
  const driveBrandOptions = DriveBrandOptions
  const mechElectronicOptions = MechElectronicOptions
  const mechOptions = MechOptions
  const electronicOptions = ElectronicOptions

  console.log(frontDriveOptions)

  return (
    <div className="App">
      <h1>Bildr</h1>
      <form>      
       
      
          <SelectInput label="Front Drive Options" selectInitialValue="Please select 1x or 2x" selectOptions={frontDriveOptions} />

          <SelectInput label="Drivetrain Brand" selectInitialValue="Please select drivetrain brand" selectOptions={driveBrandOptions} />

          <SelectInput label="Mechanical or Electric Shifting" selectInitialValue="Please select" selectOptions={mechElectronicOptions} />

          <SelectInput label="Mechanical Drivetrain Options" selectInitialValue="Please select mechanical options" selectOptions={mechOptions} />
          
          <SelectInput label="Electronic Options" selectInitialValue="Please select electronic options" selectOptions={electronicOptions} />
      

        
      </form>

    </div>
  );
}

export default App;
