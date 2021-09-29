import './App.css';
import { FrontDriveOptions } from './components/DATA/Data'
import SelectInput from './components/UI/SelectInput';



function App() {

  const frontDriveOptions = FrontDriveOptions

  console.log(frontDriveOptions)

  return (
    <div className="App">
      <h1>Bike Builder</h1>
      <form>      
        <SelectInput selectLabel="Please select 1x or 2x" selectOptions={frontDriveOptions} />

        
      </form>

    </div>
  );
}

export default App;
