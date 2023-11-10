import "./SearchBar.css"
import {FaSearch} from "react-icons/fa"
import {BsMicFill} from "react-icons/bs"
import {IoMdNotificationsOutline} from "react-icons/io"
import SearchList from "./SearchList"
const SearchBar = ()=> {
  return (
    <>
     <div className="SearchBar_Container">
        <div className="SearchBar_Container2">
            <div className="search_div">
            <input type="text" className="iBox_SearchBar"/>
            <FaSearch className="SearchIcon"/>
            <BsMicFill className="Mic_SearchBar"/>
              {
                <SearchList/>
              }

            <IoMdNotificationsOutline className="Mic_SearchBar"/>
            </div>
              
        </div>

           
     </div>

    </>
  )
}

export default SearchBar