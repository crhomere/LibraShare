import { useDispatch } from 'react-redux';
import { closeModal } from '../../features/modalRemoveAll/modalRemoveAllSlice';
import { clearCart } from '../../features/cart/cartSlice';
import { Modal, Button } from 'react-bootstrap';

const ModalRemoveAll = () => {
  const dispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(closeModal());
  };

  const handleConfirm = () => {
    dispatch(clearCart());
    dispatch(closeModal());
  };

  return (
    <Modal show={true} onHide={handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Remove all books from your cart?</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button
          variant="danger"
          onClick={() => {
            dispatch(handleConfirm);
          }}
        >
          Confirm
        </Button>
        <Button variant="secondary" onClick={handleModalClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalRemoveAll;
