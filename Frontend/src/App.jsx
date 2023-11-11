import Navbar from './Components/Navbar/Navbar'
import './App.css'
import {BrowserRouter as Router} from "react-router-dom";
import AllRoutes from './Components/AllRoutes';

function App() {
  
  
  return (
    <Router>

      <Navbar/>
      <AllRoutes/>
    </Router>
  )
}

export default App
