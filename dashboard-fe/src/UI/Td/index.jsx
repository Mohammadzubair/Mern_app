import PropTypes from "prop-types";
import { Td as CHTd } from "@chakra-ui/react";

const Td = ({ children, ...props }) => {
  return <CHTd {...props}>{children}</CHTd>;
};

export default Td;

Td.propTypes = {
  children: PropTypes.element,
};
