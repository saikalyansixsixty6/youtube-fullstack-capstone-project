import ShowVideo from "../ShowVideo/ShowVideo"


function ShowVideoList({videoId}) {

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
    <div className="Container_ShowVideoGrid">
        {
            vids?.filter(q=>q._id===videoId).map(vid=>{
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

export default ShowVideoList