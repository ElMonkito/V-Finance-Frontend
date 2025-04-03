import {
    Box,
    Card,
    CardContent,
    FormControl,
    MenuItem,
    Select,
    Typography,
} from "@mui/material";

type MonthlySummaryProps = {
    month: number;
    setMonth: (month: number) => void;
    total: number | null;
};

const monthNames = Array.from({ length: 12 }).map((_, idx) =>
    new Date(0, idx).toLocaleString("default", { month: "long" })
);

export default function MonthlySummary({ month, setMonth, total }: MonthlySummaryProps) {
    return (
        <Box sx={{ mt: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 1, mb: 3 }}>
                <Typography variant="h4">
                    Expenses for the month of
                </Typography>

                <FormControl>
                    <Select
                        variant="standard"
                        value={month}
                        onChange={(e) => setMonth(Number(e.target.value))}
                        disableUnderline
                        sx={{ fontSize: "2.2rem", color: "primary.main" }}
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
}
