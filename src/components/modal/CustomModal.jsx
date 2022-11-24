import { closeModal } from '@/redux/features/modal/modalSlice'
import { useModalState } from '@/redux/store'
import { Modal, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const CustomModal = ({ children }) => {
  const { show, title } = useModalState()
  const dispatch = useDispatch()

  const handleClose = () => dispatch(closeModal())

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='primary' onClick={handleClose}>
          Editar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default CustomModal
