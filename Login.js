import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password
      });

      const user = res.data.user;
      const token = res.data.token;

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      localStorage.setItem("isLoggedIn", "true");

      setIsLoggedIn(true);

      // Redirect based on role
      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/home");
      }

    } catch (error) {
      console.error(error);
      alert("Invalid credentials or server error.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="form-control mb-2"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control mb-2"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-danger">Login</button>
      </form>
      <p className="mt-3">
        New user? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
