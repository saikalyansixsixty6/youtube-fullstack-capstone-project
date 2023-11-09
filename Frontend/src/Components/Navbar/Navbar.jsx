import "./Navbar.css"
import logo from "./youtube-logo-2431.svg"
import SearchBar from "../SearchBar/Searchbar"


const  Navbar = ()=> {
  return (
    <div className="Container_navbar">
      <div className="Burger_logo_navbar">
          <div className="burger">
            <p></p>
            <p></p>
            <p></p>
          </div>

         <div className="logo_navbar">
              <img src={logo} className="logo" alt="Youtube" />
              <p className="logo_title_navbar">Youtube</p>
          </div>
         <SearchBar/>
      </div>
    </div>
  )
}

export default Navbar