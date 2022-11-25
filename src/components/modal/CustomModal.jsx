import { closeModal } from '@/redux/features/modal/modalSlice'
import { useModalState } from '@/redux/store'
import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const CustomModal = ({ children, show, title, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className='fs-2 fw-bold text-uppercase'>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  )
}
export default CustomModal
