import PropTypes from "prop-types";
import { ModalFooter as CHModalFooter } from "@chakra-ui/react";

const ModalFooter = ({ children, ...props }) => {
  return <CHModalFooter {...props}>{children}</CHModalFooter>;
};

export default ModalFooter;

ModalFooter.propTypes = {
  children: PropTypes.element,
};
