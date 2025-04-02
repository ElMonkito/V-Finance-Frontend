import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "../services/api";
import {Alert, Box, Button, Container, TextField, Typography} from "@mui/material";


export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSumbit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const res = await axios.post("/token/", {username, password});
            localStorage.setItem("token", res.data.access);
            navigate("/");
        } catch (err) {
            setError("Wrong username or password")
        }
    }

    return (
        <Container maxWidth="xs">
            <Box sx={{mt: 8}}>
                <Typography variant="h5" align="center" gutterBottom>Connexion</Typography>
                <form onSubmit={handleSumbit}>
                    <TextField
                        label="Username"
                        fullWidth
                        margin="normal"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <TextField
                        label="Password"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <Alert severity="error">{error}</Alert>}
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{mt: 2}}
                    >
                        Login
                    </Button>
                </form>
            </Box>
        </Container>
    );
};