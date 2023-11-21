import {
    Routes,
    Route}
    from "react-router-dom";
import Home from "../Pages/Home/Home";
import Library from "../Pages/Library/Library";
import YourVideos from "../Pages/YourVideos/YourVideos";
import WatchHistory from "../Pages/WatchHistory/WatchHistory";
import WatchLater from "../Pages/WatchLater/WatchLater";
import LikedVideos from "../Pages/LikedVideos/LikedVideos";
import VideoPage from "../Pages/VideoPage/VideoPage";

function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/library" element={<Library/>}/>
        <Route path="/yourvideos" element={<YourVideos/>}/>
        <Route path="/history" element={<WatchHistory/>}/>
        <Route path="/watchlater" element={<WatchLater/>}/>
        <Route path="/likedvideos" element={<LikedVideos/>}/>
        <Route path="/videopage/:vid" element={<VideoPage/>}/>
        
    </Routes>
  )
}

export default AllRoutes