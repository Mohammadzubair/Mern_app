import PropTypes from "prop-types";
import { TableContainer as CHTableContainer } from "@chakra-ui/react";

const TableContainer = ({ children, ...props }) => {
  return <CHTableContainer {...props}>{children}</CHTableContainer>;
};

export default TableContainer;

TableContainer.propTypes = {
  children: PropTypes.element,
};
