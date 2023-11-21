import ShowVideo from "../ShowVideo/ShowVideo"
import "./ShowVideoGrid.css"
function ShowVideoGrid({vids}) {
  return (
    <div className="Container_ShowVideoGrid">
        {
            vids?.map(vid=>{
                return(
                    <div key={vid._id} className="video_box_app">
                        <ShowVideo vid={vid}/>
                    </div>
                )
            })
        };

    </div>
  )
}

export default ShowVideoGrid