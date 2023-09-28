import PropTypes from "prop-types";
import { ModalBody as CHModalBody } from "@chakra-ui/react";

const ModalBody = ({ children, ...props }) => {
  return <CHModalBody {...props}>{children}</CHModalBody>;
};

export default ModalBody;

ModalBody.propTypes = {
  children: PropTypes.element,
};
