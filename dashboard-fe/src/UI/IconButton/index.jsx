import PropTypes from "prop-types";
import { IconButton as CHIconButton } from "@chakra-ui/react";

const IconButton = ({ children, ...props }) => {
  return <CHIconButton {...props}>{children}</CHIconButton>;
};

export default IconButton;

IconButton.propTypes = {
  children: PropTypes.element,
};
