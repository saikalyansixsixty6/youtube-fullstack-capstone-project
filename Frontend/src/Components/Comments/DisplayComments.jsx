import "./Comments.css"
import { useState } from "react"

function DisplayComments({commentBody,userCommented,cid}) {
    const [cmtBdy,setCmtBdy] = useState('');
    const [Edit, setEdit] = useState(false)

    const handleEdit = (cid,ctBdy)=>{
           setEdit(cid);
           setCmtBdy(ctBdy);
    }
    const handleSubmit = (e)=>{
      e.preventDefault();
      setEdit(false);
    }

  return (
    <>

    {
      Edit ? (<>
      
      <form className="comment_sub_form_comments"
       onSubmit={handleSubmit}
       >
        <input type="text"
        className="comment_inbox"
        value={cmtBdy}
        placeholder="Edit Comment...."
        onChange={(e)=>setCmtBdy(e.target.value)}
        />
        <input type="submit" value="Change" className="comment_add_btn_comments"/>
    </form>
      
      </>):(<>
        <p className="comment_body">{commentBody}</p>
      </>)

    }
    
    <p className="user_commented">{userCommented} commented</p>
    <p className="editDelete_comment">
        <i onClick={()=>handleEdit(cid,commentBody)}>Edit</i>
        <i>Delete</i>
    </p>
    </>
  )
}

export default DisplayComments