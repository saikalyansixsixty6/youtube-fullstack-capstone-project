import { MdPlaylistAddCheck } from "react-icons/md"
import "./LikeWatchLaterSaveBtns.css"
import {BsThreeDots} from "react-icons/bs"
import {RiHeartAddFill, RiPlayListAddFill, RiShareForwardLine} from "react-icons/ri"
import {useState} from "react";
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
function LikeWatchLaterSaveBtns() {

  const [saveVideo,setSaveVideo] = useState(true)
  const [disLikeBtn,setDisLikeBtn] = useState(false)
  const [likeBtn,setLikeBtn] = useState(false)

  const toggleSaveVideo = ()=>{
    if(saveVideo){
        setSaveVideo(false);
    }else{
        setSaveVideo(true);
    }
  }

  const toggleLikeVideo = ()=>{
    if(likeBtn){
      setLikeBtn(false);
  }else{
     setLikeBtn(true);
  }
}
  const toggleDisLikeVideo = () =>{
    if(disLikeBtn){
        setDisLikeBtn(false);
  }else{
       setDisLikeBtn(true)
  }
  }



  return (
    <div className="btns_container_videoPage">
        <div className="btn_videoPage">
            <BsThreeDots/>
        </div>
        <div className="btn_videoPage">

        <div className="like_videoPage" onClick={()=>toggleLikeVideo()}>
                {
                    likeBtn ? <>
                    <AiFillLike size={22} className="btns_videoPage"/>
                    <b>1</b>
                    </> : <>
                    <AiOutlineLike size={22} className="btns_videoPage"/>
                       <b>1</b>
                    </>
                }
            </div>

        <div className="like_videoPage" onClick={()=>toggleDisLikeVideo()}>
                {
                    disLikeBtn ? <>
                    <AiFillDislike size={22} className="btns_videoPage"/>
                        <b>Disliked</b>
                    </> : <>
                    <AiOutlineDislike size={22} className="btns_videoPage"/>
                       <b>DISLIKE</b>
                    </>
                }
            </div>

            <div className="like_videoPage" onClick={()=>toggleSaveVideo()}>
                {
                    saveVideo ? <>
                    <RiPlayListAddFill size={22} className="btns_videoPage"/>
                        <b>Save</b>
                    </> : <>
                    <MdPlaylistAddCheck size={22} className="btns_videoPage"/>
                       <b>Saved</b>
                    </>
                }
            </div>

            <div className="like_videoPage">
                    <>
                    <RiHeartAddFill size={22} className="btns_videoPage"/>
                        <b>Thanks</b>
                    </> 
            </div>

            <div className="like_videoPage">
                    <>
                    <RiShareForwardLine size={22} className="btns_videoPage"/>
                        <b>Share</b>
                    </> 
            </div>



        </div>
        </div>
  )
}

export default LikeWatchLaterSaveBtns