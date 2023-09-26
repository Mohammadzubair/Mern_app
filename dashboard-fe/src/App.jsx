import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "./UI";

import "./App.css";

function App() {
  const URL = `http://localhost:5000/users`;
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    await fetch(URL)
      .then((response) => response.json())
      .then((responseData) => setUsers(responseData))
      .catch((error) => console.log("Error agaya hai bhai", error));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Flex as={"main"} h={"100%"} w={"100%"}>
      <Box as="section" bgColor={"purple.400"}>
        <Stack
          w={"250px"}
          spacing={8}
          h={"100%"}
          align={"center"}
          justify={"center"}
        >
          <Text>Left Side</Text>
        </Stack>
      </Box>
      <Box as="section" h={"100%"} w={"100%"} bgColor={"lightgray"} p={4}>
        <TableContainer>
          <Table variant="striped" bgColor="purple.400">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>User Name</Th>
                <Th>Address</Th>
                <Th>Email</Th>
                <Th>Phone</Th>
                <Th>Company</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user) => (
                <Tr key={user.id}>
                  <Td>{user.name}</Td>
                  <Td>{user.username}</Td>
                  <Td>{user.address}</Td>
                  <Td>{user.email}</Td>
                  <Td>{user.phone}</Td>
                  <Td>{user.company}</Td>
                  <Td>
                    <Flex>
                      <IconButton
                        variant=""
                        colorScheme="blue"
                        aria-label="Search database"
                        icon={<>H</>}
                      />
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Td colspan="7">Pagination will applied</Td>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>
    </Flex>
  );
}

export default App;
