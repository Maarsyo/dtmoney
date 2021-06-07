import Modal from 'react-modal'
import close from '../../assets/close.svg'
import { Container } from './styles'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <Container>
          <h2>Cadastrar transação</h2>
          <input 
            placeholder="Título"
          />

          <input 
            type="number"
            placeholder="Valor"
          />
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