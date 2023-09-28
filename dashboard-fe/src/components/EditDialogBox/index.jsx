import PropTypes from "prop-types";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "../../UI";
import UserDetailForm from "../UserDetailForm";

const EditDialogBox = ({ isOpen, onClose, onEdit }) => {
  return (
    <Modal
      size="xl"
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay
        bg="none"
        backdropFilter="auto"
        backdropInvert="80%"
        backdropBlur="2px"
      />
      <ModalContent>
        <ModalHeader align="center" fontSize={30}>
          Edit User Deatils
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <UserDetailForm />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button>Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditDialogBox;

EditDialogBox.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};
