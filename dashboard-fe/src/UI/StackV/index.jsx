import PropTypes from "prop-types";
import { VStack as CHVStack } from "@chakra-ui/react";

const VStack = ({ children, ...props }) => {
  return <CHVStack {...props}>{children}</CHVStack>;
};

export default VStack;

VStack.propTypes = {
  children: PropTypes.element,
};
