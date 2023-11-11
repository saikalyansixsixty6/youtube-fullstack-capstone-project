import {AiOutlineHome} from "react-icons/ai"
import {MdOutlineExplore,MdOutlineSubscriptions,MdOutlineVideoLibrary} from "react-icons/md"
import "./LeftsideBar.css"
function LeftsideBar() {
  return (
    <div className="container_leftSideBar">
      <div className='icon_sidebar_div' >
          <AiOutlineHome size={22} className="icon_sidebar"/>
          <div className="text_sidebar_icon">Home</div>
      </div>
      <div className='icon_sidebar_div' >
          <MdOutlineExplore size={22} className="icon_sidebar"/>
          <div className="text_sidebar_icon">Explore</div>
      </div>
      <div className='icon_sidebar_div' >
          <MdOutlineSubscriptions size={22} className="icon_sidebar"/>
          <div className="text_sidebar_icon">Subscription</div>
      </div>
      <div className='icon_sidebar_div' >
          <MdOutlineVideoLibrary size={22} className="icon_sidebar"/>
          <div className="text_sidebar_icon">Library</div>
      </div>
    </div>
  )
}

export default LeftsideBar