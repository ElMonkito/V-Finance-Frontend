import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MobileNav()  {
    const navigate = useNavigate();
    const location = useLocation();

    const [value, setValue] = useState(0);

    useEffect(() => {
        if (location.pathname === "/") setValue(0);
        else if (location.pathname === "/list") setValue(1);
        else if (location.pathname === "/stats") setValue(2);
    }, [location.pathname]);

    const handleChange = (_: any, newValue: number) => {
        setValue(newValue);
        if (newValue === 0) navigate("/");
        else if (newValue === 1) navigate("/list");
        else if (newValue === 2) navigate("/stats");
    };

    return (
        <Paper
            sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: { xs: "block", md: "none" } }}
            elevation={3}
        >
            <BottomNavigation value={value} onChange={handleChange} showLabels>
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Liste" icon={<FormatListNumberedIcon />} />
                <BottomNavigationAction label="Graphique" icon={<BarChartIcon />} />
            </BottomNavigation>
        </Paper>
    );
}
