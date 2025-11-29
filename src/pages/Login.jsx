import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("Bret");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    const API_URL = import.meta.env.VITE_APP_API_URL;
    const SECRET = import.meta.env.VITE_APP_SECRET_PASSWORD;

    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(`${API_URL}/users?_limit=3`);
                if (!response.ok) throw new Error("Failed to fetch users");
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                console.error(err);
                setError("Could not load users. Try again later.");
            }
        };

        fetchUsers();
    }, [API_URL]);

    const handleLogin = () => {
        setError(""); // reset error

        if (!password) {
            setError("Please enter a password.");
            return;
        }

        const foundUser = users.find(user => user.username === username);

        if (!foundUser) {
            setError("Username not found!");
            return;
        }

        if (password !== SECRET) {
            setError("Incorrect password!");
            return;
        }

        localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
        navigate("/todos"); // React Router navigation
    };

    return (
        <div>
            <h2>Login</h2>

            <input
                type="text"
                placeholder="Enter username (e.g., Bret)"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />

            <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <button onClick={handleLogin}>Login</button>

            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}
