import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from "./components/FunctionalGreeting"  // Imported from the functional greeting .js
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps"  // Imported from the functional greeting .js

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Karlo" age="29" />
    </div>
  );
}

export default App;
