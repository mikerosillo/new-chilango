import React from 'react';
import UnlikePost from './unlikes.jsx';


const LikesUnlikesList = (props) => (
 <div className="likes">
 {props.likes.map((post) => <UnlikePost post={post} key={post.id}/>)}
 </div>
)

export default LikesUnlikesList;
