import React, {useState} from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Pies from './components/Pies/Pies';

function App() {

  const [sessionToken, setSessionToken] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <p>This is a test of React</p>

      <button onClick={() => setSessionToken(!sessionToken)} />


      {/* {sessionToken} */}
      {/* TODO: Toggle between Auth & Pies */}
      {
        sessionToken ? <Pies /> : <Auth />
      }
    </div>
  );
}

export default App;


// let [first, second, third] = ['Fellowship of the Ring', 'Two Towers', 'Return of the King'];
// console.log(first);
// console.log(second);
// console.log(third);

// let [a, ,c] = ['Mercury', 'Venus', 'Earth'];
// console.log(a, c);

// let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];

// let [first, , third, ...others] = planets;
// console.log(first);
// console.log(third);
// console.log(others)
