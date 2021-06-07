import { Container } from "./styles";

export function TransactionsTable() {
    return(
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
                        <td>Açai do bão</td>
                        <td className="withdraw">- R$14.00</td>
                        <td>Alimento</td>
                        <td>06/06/2021</td>
                    </tr>
                    <tr>
                        <td>Freelance de desenvolvimento front-end</td>
                        <td className="deposit">R$582.00</td>
                        <td>Desenvolvimetno</td>
                        <td>04/06/2021</td>
                    </tr>
                    <tr>
                        <td>Garrafinha de água</td>
                        <td className="withdraw">- R$5.00</td>
                        <td>Alimento</td>
                        <td>03/06/2021</td>
                    </tr>
                    <tr>
                        <td>Ajuda na casa</td>
                        <td className="deposit">R$30.00</td>
                        <td>Ajuda</td>
                        <td>06/06/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}