import {AiOutlineHome} from "react-icons/ai"
import {MdOutlineExplore,MdOutlineSubscriptions,MdOutlineVideoLibrary} from "react-icons/md"
import "./LeftsideBar.css"
import { NavLink,Link } from "react-router-dom"

function LeftsideBar() {
  return (
    <div className="container_leftSideBar">
      <NavLink to={"/"} className='icon_sidebar_div' >
          <AiOutlineHome size={22} className="icon_sidebar"/>
          <div className="text_sidebar_icon">Home</div>
      </NavLink>
      <Link className='icon_sidebar_div' >
          <MdOutlineExplore size={22} className="icon_sidebar"/>
          <div className="text_sidebar_icon">Explore</div>
      </Link>
      <Link className='icon_sidebar_div' >
          <MdOutlineSubscriptions size={22} className="icon_sidebar"/>
          <div className="text_sidebar_icon">Subscription</div>
      </Link>
      <NavLink to={"/library"} className='icon_sidebar_div' >
          <MdOutlineVideoLibrary size={22} className="icon_sidebar"/>
          <div className="text_sidebar_icon">Library</div>
      </NavLink>
    </div>
  )
}

export default LeftsideBar