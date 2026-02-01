import { useState } from "react";

const Gitfetch = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    if (!username) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://api.github.com/users/${username}`
      );

      if (!res.ok) {
        throw new Error("User not found");
      }

      const data = await res.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>GitHub User Search</h1>

      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={fetchUser}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {user && (
        <div>
          <h2>{user.name || "No name provided"}</h2>
          <img
            src={user.avatar_url}
            alt={user.name}
            width={120}
          />

          
          <p>📍 Location: {user.location || "Not available"}</p>
          <p>📦 Public Repos: {user.public_repos}</p>
        </div>
      )}
    </>
  );
};

export default Gitfetch;
