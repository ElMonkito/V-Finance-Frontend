import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Box} from "@mui/material";
import {getMonthlyTotal} from "../services/api";
import Header from "../components/Header";
import MonthlySummary from "../components/MonthlySummary";
import MobileNav from "../components/MobileNav";

export default function Home()  {
    const navigate = useNavigate();
    const [total, setTotal] = useState<number | null>(null);
    const [month, setMonth] = useState<number>(new Date().getMonth() + 1);

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
        <Box>
            <Header/>
            <Box sx={{mt: 4}}>
                    <MonthlySummary month={month} setMonth={setMonth} total={total} />
                </Box>
            <MobileNav />
        </Box>
    );
};

