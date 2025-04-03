import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function MobileNav()  {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: { xs: "block", md: "none" } }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(_, newValue) => {
                    setValue(newValue);
                    navigate(newValue === 0 ? "/" : "/stats");
                }}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Liste" icon={<FormatListNumberedIcon />} />
                <BottomNavigationAction label="Graphique" icon={<BarChartIcon />} />
            </BottomNavigation>
        </Paper>
    );
};

