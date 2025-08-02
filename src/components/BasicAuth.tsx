import React, { useState } from "react";

const USERNAME = "marcoDelMoro";
const PASSWORD = "Test123!";

interface BasicAuthProps {
  children: React.ReactNode;
}

const BasicAuth: React.FC<BasicAuthProps> = ({ children }) => {
  const [authorized, setAuthorized] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === USERNAME && password === PASSWORD) {
      setAuthorized(true);
      setError("");
    } else {
      setError("Credenziali errate");
    }
  };

  if (authorized) {
    return <>{children}</>;
  }

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "rgb(249, 112, 21)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 0 15px rgba(0,0,0,0.2)",
          width: "320px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "24px" }}>Accesso Protetto</h2>
        <input
          type="text"
          name="username"
          id="username"
          autoComplete="username"
          autoFocus
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "6px",
            border: "none",
            marginBottom: "16px",
            fontSize: "16px",
            color: "#333",
          }}
        />
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="current-password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "6px",
            border: "none",
            marginBottom: "16px",
            fontSize: "16px",
            color: "#333",
          }}
        />
        {error && (
          <p
            style={{ color: "#fff", marginBottom: "16px", fontWeight: "bold" }}
          >
            {error}
          </p>
        )}
        <button
          type="submit"
          style={{
            backgroundColor: "#fff",
            color: "rgb(249, 112, 21)",
            fontWeight: "bold",
            padding: "12px 0",
            width: "100%",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "rgb(255 200 170)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "#fff";
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};
export default BasicAuth;
