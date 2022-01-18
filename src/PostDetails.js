import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { postId } = useParams(); // url peramiter recieve with useParams.
  const [postDetails, setPostDetails] = useState({});
  const [comments, setComments] = useState([]);
  const [show, setShow] = useState(false);
  const [likeColor, setLikeColor] = useState("");

  const { title, body } = postDetails; // destructure title and body from postDetails hook.
  const { email } = comments;

  useEffect(() => {
    // fetch post with id
    fetch("https://jsonplaceholder.typicode.com/posts/" + postId)
      .then((res) => res.json())
      .then((data) => setPostDetails(data))
      .catch((err) => console.log(err));

    // comments from json placeHolder with id.
    fetch("https://jsonplaceholder.typicode.com/comments/" + postId)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.log(err));
  }, [postId]);

  // show and hide comments.
  const showComment = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div>
      <h1>Post Id : {postId}</h1>
      <h3>
        <strong>Title : </strong> {title}
      </h3>
      <p>
        <strong>Body : </strong>
        {body}
      </p>

      <span
        className="material-icons"
        onClick={() => setLikeColor(likeColor ? "" : "blue")}
        style={{ color: likeColor }}
      >
        thumb_up
      </span>
      <button onClick={showComment}>
        {show ? "hide commnet " : "show comments..."}
      </button>
      <h5> {show ? "comment Id " + comments.id : ""}</h5>
      <p> {show ? "Email : " + email : ""}</p>
    </div>
  );
};

export default PostDetails;
