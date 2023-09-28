import PropTypes from "prop-types";
import { FormLabel as CHFormLabel } from "@chakra-ui/react";

const FormLabel = ({ children, ...props }) => {
  return <CHFormLabel {...props}>{children}</CHFormLabel>;
};

export default FormLabel;

FormLabel.propTypes = {
  children: PropTypes.element,
};
