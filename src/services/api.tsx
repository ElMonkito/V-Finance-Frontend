import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000/api",
});

export const getMonthlyTotal = (token: string, month:number) => {
    return api.get(`/expenses/monthly_total/?month=${month}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const getExpenses = (token: string) =>
    api.get("/expenses", {
        headers: {Authorization: `Bearer ${token}`}
    });

export default api;
