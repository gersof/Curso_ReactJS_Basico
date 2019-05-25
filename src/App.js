import React,{Component}from 'react';
import logo from './logo.svg';
import './App.css';
import Bienvenido from './Bienvenido'

// function App(props) {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hola {props.MiNombre} Este es mi primer proyecto con create-react-app
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component{
  render(){
    return (
      <div>
        <Bienvenido MiNombre="Juan" MiPais="Colombia"/>
        <Bienvenido MiNombre="Maria" MiPais="Colombia"/>
        <Bienvenido MiNombre="Jose" MiPais="Colombia"/>
        <Bienvenido MiNombre="David" MiPais="Colombia"/>
      </div>
    )
  }
}

export default App;
