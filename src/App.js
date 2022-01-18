import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Post from "./components/pages/Post";
import SignIn from "./components/SignIn";
import PostDetails from "./PostDetails";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/postDetails/:postId" element={<PostDetails />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
