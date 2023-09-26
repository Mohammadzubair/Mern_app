import PropTypes from "prop-types";
import { Button as CHButton } from "@chakra-ui/react";

const Button = ({ children, ...props }) => {
  return <CHButton {...props}>{children}</CHButton>;
};

export default Button;

Button.propTypes = {
  children: PropTypes.element,
};
