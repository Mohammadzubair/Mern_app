import PropTypes from "prop-types";
import { ModalOverlay as CHModalOverlay } from "@chakra-ui/react";

const ModalOverlay = ({ children, ...props }) => {
  return <CHModalOverlay {...props}>{children}</CHModalOverlay>;
};

export default ModalOverlay;

ModalOverlay.propTypes = {
  children: PropTypes.element,
};
