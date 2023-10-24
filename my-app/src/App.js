import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from "./components/FunctionalGreeting"  // Imported from the functional greeting .js
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps"  // Imported from the functional greeting .js
import StatefulGreeting from './components/StatefulGreeting';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import EventBinding from './components/EventBinding';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';

// function App() {
//   return (
//     <div className="App">
//       <StatefulGreeting greeting="i'm a stateful class component" name="Karlo"/>
//       {/* <FunctionalGreeting />
//       <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Karlo" age="29" /> */}
//     </div>
//   );
// }

// function App() {
//   return ( 
//    <div className="App">
//     <EventsFunctional />
//     <EventsClass />
//   </div>
//   )
// }

// function App() {
//   return <div className="App">
//     <EventBinding />
//   </div>
// }

function App() {
  return (
  <div className="App">
    <ConditionalRenderingClass />
    <ConditionalRenderingFunctional connected={true} />
  </div>
  );
}


export default App;
