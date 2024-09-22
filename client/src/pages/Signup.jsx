import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      username,
      email,
      password,
    };

    console.log(userData);

    const response = await fetch("http://localhost:3001/api/Users", {
      method: "POST",
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    console.log(data);
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            type="username"
            onChange={(event) => setUsername(event.target.value)}
            name="username"
            id="username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            name="username"
            id="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="username"
            onChange={(event) => setPassword(event.target.value)}
            id="password"
          />
        </div>
        <button>Signup</button>
      </form>
    </div>
  );
};
export default Signup;
