import PropTypes from "prop-types";
import { Tfoot as CHTfoot } from "@chakra-ui/react";

const Tfoot = ({ children, ...props }) => {
  return <CHTfoot {...props}>{children}</CHTfoot>;
};

export default Tfoot;

Tfoot.propTypes = {
  children: PropTypes.element,
};
