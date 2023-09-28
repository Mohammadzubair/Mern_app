import PropTypes from "prop-types";
import { ModalHeader as CHModalHeader } from "@chakra-ui/react";

const ModalHeader = ({ children, ...props }) => {
  return <CHModalHeader {...props}>{children}</CHModalHeader>;
};

export default ModalHeader;

ModalHeader.propTypes = {
  children: PropTypes.element,
};
