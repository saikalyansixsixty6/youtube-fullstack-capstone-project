import Navbar from './Components/Navbar/Navbar'
import './App.css'
import {BrowserRouter as Router} from "react-router-dom";
import AllRoutes from './Components/AllRoutes';
import DrawerSidebar from './Components/LeftsideBar/DrawerSidebar';
import { useState } from 'react';

function App() {
  const [toggleDrawerSidebar,setToggleDrawerSidebar] = useState({display:"none"})
  
  const toggleDrawer = ()=>{
    if(toggleDrawerSidebar.display === "none"){
      setToggleDrawerSidebar({display:"flex"})
    }else{
      setToggleDrawerSidebar({display:"none"})
    }
  }
  
  return (
    <Router>

      <Navbar toggleDrawer={toggleDrawer} toggleDrawerSidebar={toggleDrawerSidebar}/>
      
        <DrawerSidebar toggleDrawer={toggleDrawer} toggleDrawerSidebar={toggleDrawerSidebar}/>
      
      <AllRoutes/>
    </Router>
  )
}

export default App
