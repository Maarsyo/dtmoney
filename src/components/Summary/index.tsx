import incomeImg from '../../assets/income.svg';
import exitImg from '../../assets/exit.svg';
import totalImg from '../../assets/total.svg';
import { Container } from './styles';
import { entradas, retiradas } from '../TransactionsTable/index'

export function Summary() {
    const somaEntradas = entradas.primeiraEntrada + entradas.segundaEntrada;
    const somaSaidas = retiradas.primeiraRetirada + retiradas.segundaRetirada;
    const total = somaEntradas - somaSaidas;
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entrada" />
                </header>
                <strong>R${somaEntradas}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={exitImg} alt="Saídas" />
                </header>
                <strong>R${somaSaidas}</strong>
            </div>
            <div>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entrada" />
                </header>
                <strong>R${total}</strong>
            </div>
        </Container>
    )
}