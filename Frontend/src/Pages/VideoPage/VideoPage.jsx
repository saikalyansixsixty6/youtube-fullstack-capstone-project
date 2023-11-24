import Comments from "../../Components/Comments/Comments"
import LikeWatchLaterSaveBtns from "./LikeWatchLaterSaveBtns"
import "./VideoPage.css"

function VideoPage() {
  return (
    <div className="container_videoPage">
        <div className="container2_videoPage">
          <div className="video_display_screen_videoPage">
            <video src='' className='video_showVideo_videoPage' controls ></video>
            <div className="video_details_videoPage">
                <div className="video_btns_title_videoPage_cont">
                    <p className="video_title_videoPage">Title</p>
                    <div className="video_date_btns_videoPage">
                        <div className="views_videoPage">
                        5 views <div className="dot"></div> uploaded 1 year ago
                        </div>
                        <LikeWatchLaterSaveBtns/>
                    </div>
                </div>
                <div className="channel_details_videoPage">
                    <b className="channel_logo_video_page"> 
                         <p>C</p>
                    </b>
                    <p className="channel_name_videoPage">Channel name</p>
                </div>
                <div className="comments_videoPage">
                    <h2>
                        <u>0 Comments</u>
                    </h2>
                    <Comments/>
                </div>
            </div>
          </div>
          <div className="more_videoBar_videoPage">
            More Videos
          </div>
        </div>
    </div>
  )
}

export default VideoPage