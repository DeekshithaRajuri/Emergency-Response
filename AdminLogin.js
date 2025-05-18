import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      setLoading(false);

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || "Login failed");
      }

      const data = await res.json();
      console.log("Login response:", data);

      if (data.token) {
        sessionStorage.setItem("authToken", data.token);
        sessionStorage.setItem("userRole", data.user.role);
        sessionStorage.setItem("userName", data.user.name);
        navigate("/admin/dashboard");
      } else {
        setError(data.msg || "Login failed");
      }
    } catch (err) {
      setLoading(false);
      console.error("Login error:", err.message);
      setError("Login failed. Please check the console for details.");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        color: "#b30000",
        minHeight: "100vh",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Admin Login</h2>

      {error && (
        <div
          style={{
            color: "#b30000",
            textAlign: "center",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          {error}
        </div>
      )}

      <form
        onSubmit={handleLogin}
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid #b30000",
            borderRadius: "4px",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid #b30000",
            borderRadius: "4px",
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "10px",
            backgroundColor: "#b30000",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
