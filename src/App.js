import React from 'react';
import './App.css';
import State from './components/State';



class App extends React.Component{
 render(){
   return(
     <div style={{textAlign:"center",marginTop:"10vh"}}>
       <State />
     </div>
   )
 }
}

export default App;
