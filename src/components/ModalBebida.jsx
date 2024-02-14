import { Modal, Image } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

const ModalBebida = () => {

    const { modal, handleModalClick } = useBebidas()

  return (
    <Modal show={modal} onHide={handleModalClick}>

            <Modal.Body>
                <p>Cuerpo de Modal</p>
            </Modal.Body>
    </Modal>
  )
}

export default ModalBebida
