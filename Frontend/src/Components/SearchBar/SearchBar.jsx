import "./SearchBar.css"
import {FaSearch} from "react-icons/fa"
import {BsMicFill} from "react-icons/bs"

import SearchList from "./SearchList"
import { useState } from "react"

const SearchBar = ()=> {

  const [searchQuery,setSearchQuery] = useState("");
  const [searchList,setSearchList] = useState(false);
  const titleArray = ["video1","video2","Animation videos","Movies"].filter(each=>each.includes(searchQuery))

  return (
    <>
     <div className="SearchBar_Container">
        <div className="SearchBar_Container2">
            <div className="search_div">
             
            <input type="text" className="iBox_SearchBar"
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            onClick={()=>setSearchList(true)}
            />            <FaSearch className="SearchIcon" onClick={()=>setSearchList(false)}/>
            <BsMicFill className="Mic_SearchBar"/>
            {
              searchQuery && searchList && 
            <SearchList   titleArray={titleArray} setSearchQuery={setSearchQuery}/>
           }
              

            
            </div>
        </div>
      </div>

    </>
  )
}

export default SearchBar