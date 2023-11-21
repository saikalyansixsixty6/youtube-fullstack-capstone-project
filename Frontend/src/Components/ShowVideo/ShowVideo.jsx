import "./ShowVideo.css"
import { Link } from "react-router-dom"
function ShowVideo({vid}) {
  return (
    <>
     <Link to={`"/videopage/:${vid._id}"`}>
        <video
         src={`${vid?.src}`}
         className="video_showvideo"
        >
            
        </video>
        
     </Link>
     <div className="video_description">
      <div className="channel_logo_app">
        <div className="channel_logo_app">
            <p className="fstChar_logo_app">{vid?.uploader?.charAt(0).toUpperCase()}</p>

        </div>
      </div>
       <div className="video_details">
        <p className="title_video_ShowVideo">title</p>
        <pre className="upload_time">1-1-1999</pre>
        <pre className="upload_time">89 views <div className="dot"></div> video uploaded 1 year ago
        </pre>

       </div>

     </div>
     
    
    </>
  )
}

export default ShowVideo