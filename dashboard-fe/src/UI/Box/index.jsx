import PropTypes from "prop-types";
import { Box as CHBox } from "@chakra-ui/react";

const Box = ({ children, ...props }) => {
  return <CHBox {...props}>{children}</CHBox>;
};

export default Box;

Box.propTypes = {
  children: PropTypes.element,
};
