import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Typography,
    Box,
    Card,
    CardContent,
    Select,
    MenuItem,
    FormControl,
} from "@mui/material";
import { getMonthlyTotal } from "../services/api";

const Dashboard = () => {
    const navigate = useNavigate();
    const [total, setTotal] = useState<number | null>(null);
    const [month, setMonth] = useState<number>(new Date().getMonth() + 1);

    const monthNames = Array.from({ length: 12 }).map((_, idx) =>
        new Date(0, idx).toLocaleString("default", { month: "long" })
    );

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
            return;
        }

        getMonthlyTotal(token, month)
            .then((res) => {
                setTotal(res.data.total);
            })
            .catch((err) => {
                console.error("Erreur récupération du total", err);
            });
    }, [month, navigate]);


    return (
        <Box sx={{ mt: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 1, mb: 3 }}>
                <Typography variant="h4">
                    Expenses for the month of
                </Typography>

                <FormControl >
                    <Select
                        variant="standard"
                        value={month}
                        disableUnderline
                        onChange={(e) => setMonth(Number(e.target.value))}
                        sx={{fontSize: "2.2rem", color: "primary.main"}}
                    >
                        {monthNames.map((name, idx) => (
                            <MenuItem key={idx + 1} value={idx + 1}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            <Card sx={{ maxWidth: 400 }}>
                <CardContent>
                    <Typography variant="h6">Total</Typography>
                    <Typography variant="h4" color="primary">
                        {total !== null ? `${total.toFixed(2)} CHF` : "Chargement..."}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Dashboard;
