import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate(); // alternative of useHistory

  // data from json placeholder.
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  // morde details e click korle navigate kore details page e niye jabe.
  function postDetails(id) {
    navigate("/postDetails/" + id);
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>Post id : {post.id}</h2>
          <h3>{post.title}</h3>
          <p onClick={() => postDetails(post.id)}>more details...</p>
        </div>
      ))}
    </div>
  );
};

export default Post;
