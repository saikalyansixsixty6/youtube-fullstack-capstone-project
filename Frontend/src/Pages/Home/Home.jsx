import LeftsideBar from "../../Components/LeftsideBar/LeftsideBar"
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid"
import "./Home.css"

function Home() {
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
const navList = [
  "All",
  "Python",
  "Java",
  "C++",
  "Movies",
  "Animation",
  "Gaming",
  "Comedy",
  "Java",
  "C++",
  "C++",
  "Movies",
  "Animation"
  
  
  
];




  return (
    <div className="container_Pages_App">
      <LeftsideBar/>
      <div className="container2_Pages_App">
        <div className="navigation_Home">
          {
            navList.map((navItem) =>(
            <p key={navItem} className="btn_nav_home">
              {navItem} 
              </p>
            ))
          }
        </div>
             <ShowVideoGrid  vids={vids}/>
      </div>
    </div>
  )
}

export default Home