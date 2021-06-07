import incomeImg from '../../assets/income.svg';
import exitImg from '../../assets/exit.svg';
import totalImg from '../../assets/total.svg';
import { Container } from './styles';

export function Summary() {
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entrada" />
                </header>
                <strong>R$1000</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={exitImg} alt="Saídas" />
                </header>
                <strong>- R$100</strong>
            </div>
            <div>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entrada" />
                </header>
                <strong>R$900</strong>
            </div>
        </Container>
    )
}