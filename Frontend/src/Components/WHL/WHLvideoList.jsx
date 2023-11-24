import ShowVideoList from "../ShowVideoList/ShowVideoList"


function WHLvideoList({page,videoList}) {
  return (
    <>
    {
        videoList.map(item=>{
            return(
                <>
                <ShowVideoList videoId={item._id} key={item._id}/>
                </>

            )
        })
    }
    </>
  )
}

export default WHLvideoList