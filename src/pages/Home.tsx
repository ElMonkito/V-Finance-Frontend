import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import Grid from '@mui/material/Grid';
import Header from "../components/Header";
import MonthlySummary from "../components/MonthlySummary";
import Chart from "../components/Chart";
import { getMonthlyTotal } from "../services/api";
import MobileNav from "../components/MobileNav";

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
    }, [month]);

    return (
        <Box>
            <Header />
            <Grid container spacing={2} sx={{ p:{xs: 2, md: 10 }}}>
                <Grid size={{ xs: 12, md: 6}}  display="flex" justifyContent={isMobile ? "center" : "flex-start"}>
                    <MonthlySummary month={month} setMonth={setMonth} total={total} />
                </Grid>
                {!isMobile && (
                    <Grid size={{ xs: 12, md: 6}}>
                        <Chart />
                    </Grid>
                )}
            </Grid>
            <MobileNav />
        </Box>
    );
}
