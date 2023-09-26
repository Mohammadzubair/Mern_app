import PropTypes from "prop-types";
import { Table as CHTable } from "@chakra-ui/react";

const Table = ({ children, ...props }) => {
  return <CHTable {...props}>{children}</CHTable>;
};

export default Table;

Table.propTypes = {
  children: PropTypes.element,
};
