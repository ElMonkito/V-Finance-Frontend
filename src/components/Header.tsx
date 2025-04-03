import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import Logout from "./Logout";

export default function Header() {
    return (
        <AppBar position="static" sx={{height: {xs: 70, md: 100}, boxShadow: "none", backgroundColor: "white"}}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", height: 1 }}>
                <Typography variant="h4" component="div" sx={{ flex: 1, color: "black"}}>
                    V-Finance
                </Typography>
                <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
                    <Logout />
                </Box>
            </Toolbar>
        </AppBar>
    );
}
