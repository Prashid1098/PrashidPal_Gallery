import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./style.css";

function HeadBar() {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="Head-Container">
        <div className="Icon">Social Media App</div>
        <hr/>
        <div className="Signs"></div>
      </div>
      <div className="Posts-Container">
        {posts.map(post => (
          <div key={post.id} className="Post">
            <img src={`https://picsum.photos/200?random=${post.id}`} alt="Random" className="Post-Image" />
            <h3>User ID: {post.id}</h3>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}

ReactDOM.render(<HeadBar />, document.getElementById("root"));