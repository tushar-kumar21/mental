import { useState } from 'react'
import Signup from './Signup';
import "./form.css";
import "./home.css";
import FPass from './FPass';
import RPass from './RPass';
import Navbar from './Navbar';
import Home from './Home';
import "./player.css";
import Goals from './goals/Goals';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Signup/> */}
     {/* <FPass/> */}
     {/* <RPass/> */}
      {/* <Home/> */}
      <Goals/>
    </>
  )
}

export default App;
