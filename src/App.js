import './App.css';
import { FrontDriveOptions } from './components/DATA/Data'



function App() {

  const frontDriveOptions = FrontDriveOptions

  console.log(frontDriveOptions)

  return (
    <div className="App">
      <h1>Bike Builder</h1>
      <form>
        <select>
          <option value=''>Please select 1x or 2x</option>
          <option value="1x">1x</option>
          <option value="2x">2x</option>
        </select>
        <select>
          <option value=''>Please select 1x or 2x</option>
          {frontDriveOptions.map((driveOption) => {
            return <option value={driveOption}>{driveOption}</option>
          })}
        </select>
      </form>
      {frontDriveOptions.map((drive) => {
        <p>{drive}</p>
      })}

    </div>
  );
}

export default App;
