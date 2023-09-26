import PropsTypes from "prop-types";
import { Flex as CHFlex } from "@chakra-ui/react";

const Flex = ({ children, ...props }) => {
  return <CHFlex {...props}>{children}</CHFlex>;
};

export default Flex;

Flex.propTypes = {
  children: PropsTypes.element,
};
