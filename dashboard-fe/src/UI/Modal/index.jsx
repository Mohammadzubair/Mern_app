import PropTypes from "prop-types";
import { Modal as CHModal } from "@chakra-ui/react";

const Modal = ({ children, ...props }) => {
  return <CHModal {...props}>{children}</CHModal>;
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.element,
};
