import PropTypes from "prop-types";
import { Flex, IconButton } from "../../UI";
import { DeleteIcon, EditIcon } from "../../assets/Icons";

const ActionItems = ({ onEdit, onDelete }) => {
  return (
    <Flex gap="8px">
      <IconButton
        variant=""
        bg-color="blue"
        aria-label="Search database"
        size="xs"
        icon={<EditIcon />}
        onClick={onEdit}
      />
      <IconButton
        variant=""
        colorScheme="blue"
        aria-label="Search database"
        size="xs"
        icon={<DeleteIcon />}
        onClick={onDelete}
      />
    </Flex>
  );
};

export default ActionItems;

ActionItems.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
