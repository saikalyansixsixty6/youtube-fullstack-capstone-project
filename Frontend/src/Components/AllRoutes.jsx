import {
    Routes,
    Route}
    from "react-router-dom";
import Home from "../Pages/Home/Home";

function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        
    </Routes>
  )
}

export default AllRoutes