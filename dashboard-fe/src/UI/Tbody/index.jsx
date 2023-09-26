import PropTypes from "prop-types";
import { Tbody as CHTbody } from "@chakra-ui/react";

const Tbody = ({ children, ...props }) => {
  return <CHTbody {...props}>{children}</CHTbody>;
};

export default Tbody;

Tbody.propTypes = {
  children: PropTypes.element,
};
