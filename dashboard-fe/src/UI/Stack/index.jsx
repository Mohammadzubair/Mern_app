import PropTypes from "prop-types";
import { Stack as CHStack } from "@chakra-ui/react";

const Stack = ({ children, ...props }) => {
  return <CHStack {...props}>{children}</CHStack>;
};

export default Stack;

Stack.propTypes = {
  children: PropTypes.element,
};
