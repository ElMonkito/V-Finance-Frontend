import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login")
    };

    return (
        <Button color="inherit" onClick={handleLogout} sx={{float: "right"}}>
            <ExitToAppIcon sx={{fontSize: {xs: 22, md: 32}, color: "black"}} />
        </Button>
    );
}