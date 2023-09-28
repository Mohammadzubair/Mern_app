import PropTypes from "prop-types";
import { Input as CHInput } from "@chakra-ui/react";

const Input = ({ children, ...props }) => {
  return <CHInput {...props}>{children}</CHInput>;
};

export default Input;

Input.propTypes = {
  children: PropTypes.element,
};
