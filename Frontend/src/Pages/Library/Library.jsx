import LeftsideBar from "../../Components/LeftsideBar/LeftsideBar"
import "./Library.css"
import {FaHistory} from "react-icons/fa"
import WHLvideoList from "../../Components/WHL/WHLvideoList"
import { MdOutlineWatchLater } from "react-icons/md"
import { AiOutlineLike } from "react-icons/ai"

function Library() {
  const vids = [

    {_id: 1,
    video_src: "vid",
    Chanel: "ezbafe6752cea35a6c30685F",
    title: "video 1",
    uploader:"abc",
    description: "description of video 1"},
  
    {_id: 2,
    video_src : "vid",
    Chanel:"cdd",
     title: "video 2",
     uploader:"def",
    description: "description of video 2"},
    {_id: 3,
    video_src: "vid",
    Chanel: "add",
    title: "video 3",
    uploader:"xyz",
    description: "description of video 3"},
    {_id: 4,
      video_src: "vid",
      Chanel: "add",
      title: "video 4",
      uploader:"jyz",
      description: "description of video 4"}
                
              ]




  return (
    <div className="Container_Pages_App">
      <LeftsideBar/>
      <div className="Container2_Pages_App">
            <div className="container_LibraryPage">
                <h1 className="title_LibraryPage">
                  <b>
                    <FaHistory/>
                  </b>
                  <b>History</b>
                </h1>
                <div className="container_videoList_library">
                    <WHLvideoList page={"WatchLater"} videoList={vids}/>
                </div>
            </div>

            <div className="container_LibraryPage">
                <h1 className="title_LibraryPage">
                  <b>
                    <MdOutlineWatchLater/>
                  </b>
                  <b>Watch Later</b>
                </h1>
                <div className="container_videoList_library">
                    <WHLvideoList page={"History"} videoList={vids}/>
                </div>
            </div>
            
            <div className="container_LibraryPage">
                <h1 className="title_LibraryPage">
                  <b>
                    <AiOutlineLike/>
                  </b>
                  <b>Liked Videos</b>
                </h1>
                <div className="container_videoList_library">
                    <WHLvideoList page={"LikedVideos"} videoList={vids}/>
                </div>
            </div>




            </div>
    </div>
  )
}

export default Library