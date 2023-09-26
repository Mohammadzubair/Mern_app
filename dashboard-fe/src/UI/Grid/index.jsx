import PropsTypes from "prop-types";
import { Grid as CHGrid } from "@chakra-ui/react";

const Grid = ({ children, ...props }) => {
  return <CHGrid {...props}>{children}</CHGrid>;
};

export default Grid;

Grid.propTypes = {
  children: PropsTypes.element,
};
