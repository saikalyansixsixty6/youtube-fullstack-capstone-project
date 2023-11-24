import LeftsideBar from "../LeftsideBar/LeftsideBar"
import "./WHLcss.css"
import WHLvideoList from "./WHLvideoList"

function WHL({page,videoList}) {
  return (
    <div className="Container_Pages_App">
      <LeftsideBar/>
      <div className="Container2_Pages_App">
          <p className="container_whl">
            <div className="box_WHL leftside_whl">
                <b className="">Your {page} shown here</b>
                {
                  page==="History" && <div className="clearHistory_btn">
                  Clear History
               </div>
                }
                
            </div>
            <div className="rightSide_whl">
                <h1>{page}</h1>
                <div className="whl_list">
                    <WHLvideoList page={page} videoList={videoList}/>
                </div>
            </div>
          </p>

        </div>
      </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default WHL