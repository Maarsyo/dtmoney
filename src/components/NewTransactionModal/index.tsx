import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import exitImg from '../../assets/exit.svg'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import { useState } from 'react'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

  const [type, setType] = useState('deposit');

    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <button type="button" onClick={onRequestClose} className="modal-close">
           <img src={closeImg} alt="" /> 
        </button>

        <Container>
          <h2>Cadastrar transação</h2>
          <input 
            placeholder="Título"
          />

          <input 
            type="number"
            placeholder="Valor"
          />

          <TransactionTypeContainer>
            <RadioBox
              type="button"
              onClick={() => { setType('deposit') }}
              isActive={type === 'deposit'}
              activeColor="green"
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>
            <RadioBox
              type="button"
              onClick={() => { setType('withdraw') }}
              isActive={type === 'withdraw'}
              activeColor="red"
            >
              <img src={exitImg} alt="Entrada" />
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>

          <input 
            placeholder="Categoria"
          />

          <button type="submit">
            Cadastrar
          </button>
        </Container>
      </Modal>
    )
}