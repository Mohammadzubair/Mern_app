import PropTypes from "prop-types";
import { ModalContent as CHModalContent } from "@chakra-ui/react";

const ModalContent = ({ children, ...props }) => {
  return <CHModalContent {...props}>{children}</CHModalContent>;
};

export default ModalContent;

ModalContent.propTypes = {
  children: PropTypes.element,
};
