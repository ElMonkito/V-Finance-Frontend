import {
    Card,
    CardContent,
    Typography,
    Grid,
    Box
} from "@mui/material";

type Expense = {
    id: number;
    title: string;
    amount: number;
    date: string;
    description: string;
    category: string;
};

type Props = {
    expenses: Expense[];
};

export default function ExpensesList({ expenses }: Props) {

    return (
        <Box sx={{ p: { xs: 2, md: 6 }, mb: {xs: 8, md: 0}}}>
            <h1>Last Expenses</h1>
            <Grid container spacing={2}>
                {expenses.slice(0, 6).map((expense) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={expense.id}>
                        <Card elevation={3}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {expense.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <strong>{Number(expense.amount).toFixed(2)} CHF</strong>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Date: {expense.date}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Category: {expense.category}
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    {expense.description || "No description"}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
