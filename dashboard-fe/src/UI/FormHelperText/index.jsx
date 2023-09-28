import PropTypes from "prop-types";
import { FormHelperText as CHFormHelperText } from "@chakra-ui/react";

const FormHelperText = ({ children, ...props }) => {
  return <CHFormHelperText {...props}>{children}</CHFormHelperText>;
};

export default FormHelperText;

FormHelperText.propTypes = {
  children: PropTypes.element,
};
