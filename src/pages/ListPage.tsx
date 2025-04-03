import { useEffect, useState } from "react";
import { getExpenses } from "../services/api";
import List from "../components/List";
import MobileNav from "../components/MobileNav";
import {Box} from "@mui/material";

export default function ListPage() {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) return;

        getExpenses(token)
            .then(res => setExpenses(res.data))
            .catch(err => console.error("Erreur chargement dépenses", err));
    }, []);

    return (
        <Box>
        <List expenses={expenses} />
            <MobileNav />
        </Box>
    );
}
