import PropTypes from "prop-types";
import { Text as CHText } from "@chakra-ui/react";

const Text = ({ children, ...props }) => {
  return <CHText {...props}>{children}</CHText>;
};

export default Text;

Text.propTypes = {
  children: PropTypes.element,
};
