import React from 'react';


const UnlikePost = (props) => (
  <div>
  <span>{props.post.likes}</span>{" : "}<span className="con2">{props.post.unlikes}</span>
  </div>
)

export default UnlikePost;
