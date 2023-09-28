import PropTypes from "prop-types";
import { FormControl, FormLabel, Input, StackV } from "../../UI";

const UserDetailForm = ({
  name,
  userName,
  address,
  email,
  phone,
  company,
  id,
  onEdit,
  onDelete,
}) => {
  return (
    <StackV spacing={6} align="start">
      <FormControl isRequired>
        <FormLabel mb={1}>Name:</FormLabel>
        <Input
          size="md"
          type="text"
          name="name"
          value={name}
          placeholder="Name"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel mb={1}>User Name:</FormLabel>
        <Input
          size="md"
          type="text"
          name="userName"
          value={userName}
          placeholder="User Name"
        />
      </FormControl>
      <FormControl>
        <FormLabel mb={1}>Address:</FormLabel>
        <Input
          size="md"
          type="text"
          name="address"
          value={address}
          placeholder="Address"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel mb={1}>Email:</FormLabel>
        <Input
          size="md"
          type="email"
          name="email"
          value={email}
          placeholder="Email"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel mb={1}>Phone:</FormLabel>
        <Input
          size="md"
          type="number"
          name="phone"
          value={phone}
          placeholder="Phone"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel mb={1}>Company:</FormLabel>
        <Input
          size="md"
          type="text"
          name="company"
          value={company}
          placeholder="Company"
        />
      </FormControl>
    </StackV>
  );
};

export default UserDetailForm;

UserDetailForm.propTypes = {
  name: PropTypes.string,
  userName: PropTypes.string,
  address: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.number,
  company: PropTypes.string,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};
