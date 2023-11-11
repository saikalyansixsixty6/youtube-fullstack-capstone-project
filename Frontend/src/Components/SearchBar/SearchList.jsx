import "./SearchList.css";
import {FaSearch} from "react-icons/fa"

function SearchList({titleArray,setSearchQuery}) {

  return (
    <>
    <div className="SearchList_Container">
        {
            titleArray.map((each,index)=>(
                <p key={index} 
                onClick={(e)=>setSearchQuery(each)}
                className="titleList">
            <FaSearch/>
            {each}</p>
            ))
        }
         <p className="titleList">
            <FaSearch/>
            item1</p>
         
    </div>
    </>
  )
}

export default SearchList