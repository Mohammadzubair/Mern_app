import PropTypes from "prop-types";
import { FormControl as CHFormControl } from "@chakra-ui/react";

const FormControl = ({ children, ...props }) => {
  return <CHFormControl {...props}>{children}</CHFormControl>;
};

export default FormControl;

FormControl.propTypes = {
  children: PropTypes.element,
};
