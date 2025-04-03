import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Box, useMediaQuery} from "@mui/material";
import Grid from '@mui/material/Grid';
import Header from "../components/Header";
import MonthlySummary from "../components/MonthlySummary";
import Chart from "../components/Chart";
import {getMonthlyTotal} from "../services/api";
import MobileNav from "../components/MobileNav";
import Expenses from "./Expenses";

export default function Home() {
    const navigate = useNavigate();
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [total, setTotal] = useState<number | null>(null);
    const isMobile = useMediaQuery("(max-width: 900px)");

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }

        getMonthlyTotal(token, month)
            .then((res) => setTotal(res.data.total))
            .catch((err) => console.error("Erreur récupération du total", err));
    }, [month, navigate]);

    return (
        <Box>
            <Header/>

            <Grid container spacing={2} sx={{p: {xs: 2, md: 10}}}>
                <Grid
                    container
                    size={{xs: 12, md: 6}}
                    alignItems="center"
                    justifyContent={isMobile ? "center" : "flex-start"}
                    sx={{pt: {xs: 0, md: 8}, pl: {xs: 0, md: 10}}}
                >
                    <MonthlySummary month={month} setMonth={setMonth} total={total}/>
                </Grid>

                {!isMobile && (
                    <Grid
                        container
                        size={{xs: 12, md: 6}}
                        alignItems="center"
                        justifyContent="center"
                        sx={{p: {xs: 2, md: 10}}}
                    >
                        <Chart/>
                    </Grid>
                )}
            </Grid>
            <Expenses/>
            <MobileNav/>
        </Box>
    );
}
