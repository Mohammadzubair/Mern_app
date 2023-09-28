import PropTypes from "prop-types";
import { ModalCloseButton as CHModalCloseButton } from "@chakra-ui/react";

const ModalCloseButton = ({ children, ...props }) => {
  return <CHModalCloseButton {...props}>{children}</CHModalCloseButton>;
};

export default ModalCloseButton;

ModalCloseButton.propTypes = {
  children: PropTypes.element,
};
