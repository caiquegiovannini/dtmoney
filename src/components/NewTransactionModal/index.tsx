import Modal from 'react-modal';

import { Container } from './styles';

interface NewTransactionProps {
    isOpen: boolean;
    onRequestClose: () => void;
};

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionProps) {

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <h2>Nova transação</h2>
        </Modal>
    );
};