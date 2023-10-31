import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from "./components/handlingEvents/FunctionalGreeting"  // Imported from the functional greeting .js
import FunctionalGreetingWithProps from "./components/handlingEvents/FunctionalGreetingWithProps"  // Imported from the functional greeting .js
import StatefulGreeting from './components/handlingEvents/StatefulGreeting';
import EventsClass from './components/handlingEvents/EventsClass';
import EventsFunctional from './components/handlingEvents/EventsFunctional';
import EventBinding from './components/handlingEvents/EventBinding';
import ConditionalRenderingClass from './components/handlingEvents/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/handlingEvents/ConditionalRenderingFunctional';
import NestingComponents from './components/handlingEvents/NestingComponents';
import MethodsAsPropsChild from './components/handlingEvents/MethodsAsPropsChild';
import MethodsAsPropsParent from './components/handlingEvents/MethodsAsPropsParent';
import RenderingLists from './components/Lists/RenderingLists';
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from './components/LifeCyclesCWU';

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

// function App() {
//   return (
//   <div className="App">
//     <ConditionalRenderingClass />
//     <ConditionalRenderingFunctional connected={true} />
//   </div>
//   );
// }


// function App() {
//   return (
//   <div className="App">
//     <NestingComponents />
//   </div>
//   );
// }

// function App() {
//   return (
//   <div className="App">
//     <MethodsAsPropsParent />
//   </div>
//   );
// }

// function App() {
//   return (
//   <div className="App">
//     <RenderingLists />
//   </div>
//   );
// }

// function App() {
//   return (
//   <div className="App">
//     <LifeCyclesCDM />
//   </div>
//   );
// }

// function App() {
//   return (
//   <div className="App">
//     <LifeCyclesCDU />
//   </div>
//   );
// }

function App() {
  return (
  <div className="App">
    <LifeCyclesCWU />
  </div>
  );
}



export default App;
