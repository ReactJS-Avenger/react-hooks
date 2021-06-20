import axios from "axios";
import React, { useEffect, useState } from "react";

const DataFetchingUseState = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPosts({});
        setError("Something wents wrong");
      });
  }, []);

  return (
    <div>
      {loading ? "Loading..." : posts.title}
      {error ? error : null}
    </div>
  );
};
export default DataFetchingUseState;
