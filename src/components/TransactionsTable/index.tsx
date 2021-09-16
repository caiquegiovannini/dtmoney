import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
    id: number;
    title: string;
    type: string;
    category: string;
    amount: number;
    createdAt: string;
};

export function TransactionsTable() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td className="deposit">R$ 14.000</td>
                        <td>Desenvolvimento</td>
                        <td>26/08/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$ 1.200</td>
                        <td>Casa</td>
                        <td>24/08/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
};