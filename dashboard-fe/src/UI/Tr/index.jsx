import PropTypes from "prop-types";
import { Tr as CHTr } from "@chakra-ui/react";

const Tr = ({ children, ...props }) => {
  return <CHTr {...props}>{children}</CHTr>;
};

export default Tr;

Tr.propTypes = {
  children: PropTypes.element,
};
