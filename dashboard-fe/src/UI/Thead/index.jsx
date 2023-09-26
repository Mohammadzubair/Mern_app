import PropTypes from "prop-types";
import { Thead as CHThead } from "@chakra-ui/react";

const Thead = ({ children, ...props }) => {
  return <CHThead {...props}>{children}</CHThead>;
};

export default Thead;

Thead.propTypes = {
  children: PropTypes.element,
};
