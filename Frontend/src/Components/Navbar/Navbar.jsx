import "./Navbar.css"
import logo from "./youtube-logo-2431.svg"
import SearchBar from "../SearchBar/Searchbar"
import {RiVideoAddLine} from "react-icons/ri"
import {IoMdNotificationsOutline} from "react-icons/io"
import {BiUserCircle} from "react-icons/bi"

const  Navbar = ()=> {
  const currentUser = {
     result:{
      name:"kalyan",
      email:"xyz@gmail.com",
      joinedOn:"2023-07-07"
     }
  };



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
          </div>  
         <SearchBar/>
         <RiVideoAddLine className="vid_bell_Navbar" size={22}/>
         <div className="apps_box">
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
         </div>
         <IoMdNotificationsOutline className="vid_bell_Navbar" size={22}/>
         <div className="Auth_cont_Navbar">
          {currentUser ? (
           <>
            <div className="channel_logo_app">
              <p className="fstChar_logo_app">
                   {
                    currentUser?.result?.name? (
                       <>
                         {currentUser?.result?.name.charAt(0).toUpperCase()}

                       </>

                    ):(
                      <>
                          {currentUser?.result?.email.charAt(0).toUpperCase()}

                     
                      </>

                    )
                   }
              </p>    
            </div>
           </>
          ):(
          <>
          <p className="Auth_Btn">
            <BiUserCircle size={22}/>
            <b>Sign in</b>
          </p>
          </>
          )}
          
         </div>

      
    </div>
  )
}

export default Navbar