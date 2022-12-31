import "../styles/App.css";
import { Dropdown } from "./";
function App() {

  // array of options that can be passed to Dropdown component
  const dropdownOptions = ["MongoDB", "Express", "React", "NodeJs"];
  return (
    <div className="App">
      <h1 id="main-heading"> Select one of the options from the following dropdown to display the logo</h1>
      <Dropdown dropdownOptions={dropdownOptions} />
    </div>
  );
}

export default App;
