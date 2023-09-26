import PropTypes from "prop-types";
import { Th as CHTh } from "@chakra-ui/react";

const Th = ({ children, ...props }) => {
  return <CHTh {...props}>{children}</CHTh>;
};

export default Th;

Th.propTypes = {
  children: PropTypes.element,
};
