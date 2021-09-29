import './App.css';
import { FrontDriveOptions, DriveBrandOptions } from './components/DATA/Data'
import SelectInput from './components/UI/SelectInput';



function App() {

  const frontDriveOptions = FrontDriveOptions
  const driveBrandOptions = DriveBrandOptions

  console.log(frontDriveOptions)

  return (
    <div className="App">
      <h1>Bike Builder</h1>
      <form>      
       
      
          <SelectInput label="Front Drive Options" selectInitialValue="Please select 1x or 2x" selectOptions={frontDriveOptions} />

          <SelectInput label="Drivetrain Brand" selectInitialValue="Please drivetrain brand" selectOptions={driveBrandOptions} />
      

        
      </form>

    </div>
  );
}

export default App;
