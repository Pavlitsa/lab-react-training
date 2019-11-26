import React, { Component } from 'react';
import IdCard from "./IdCard";
import Greetings from "./Greetings";
import Random from "./Random";
import BoxColor from "./BoxColor";

// creating the component where we add all the parameters for all the actual information that goes inside the App variable
// components can be reused as by having something like a template by creating them, we can pass in them any information we want
// Creating different files for different components to have cleaner code

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard firstName="John" 
        lastName="Doe" gender="male" height={178} birth={new Date("1992-07-14")} picture="https://randomuser.me/api/portraits/men/44.jpg" alt="male picture" />

        <IdCard firstName="Obrien" lastName="Dolores" gender="female" height={172} birth={new Date("1988-05-11")} picture="https://randomuser.me/api/portraits/women/44.jpg" alt="female picture" />

        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">Francois</Greetings>
        <Greetings lang="es">Luis</Greetings>
        <Greetings lang="en">Colin</Greetings>

        <h1>Random</h1>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>

        <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
    );
  }
}

export default App;
