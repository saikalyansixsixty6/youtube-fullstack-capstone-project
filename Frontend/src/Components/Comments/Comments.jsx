import "./Comments.css"
import { useState } from "react"
import DisplayComments from "./DisplayComments";
function Comments() {

  const [commentText,setCommentText] = useState('');

  const commentsList = [
    {
      _id:"1",
      commentBody:"hello",
      userCommented:"abc"
    },
    {
      _id:"2",
      commentBody:"nice video",
      userCommented:"efg"
    },
    {
      _id:"3",
      commentBody:"keep it up",
      userCommented:"xyz"
    },
    { 
      _id:"4",
      commentBody:"hello",
      userCommented:"mno"
    }
  ]

  const handleOnSubmit = (e)=>{
    e.preventDefault();
  }

  return (
    <>
    <form className="comment_sub_form_comments" onSubmit={handleOnSubmit}>
        <input type="text"
        className="comment_inbox"
        value={commentText}
        placeholder="Add Comment"
        onChange={(e)=>setCommentText(e.target.value)}
        />
        <input type="submit" value="add" className="comment_add_btn_comments"/>
    </form>
    <div className="display_comment_container">
        {
          commentsList.map(m=>(
            <DisplayComments key={m} commentBody={m.commentBody} userCommented={m.userCommented} cid={m._id} />
          ))
        }
    </div>
    </>
  )
}

export default Comments