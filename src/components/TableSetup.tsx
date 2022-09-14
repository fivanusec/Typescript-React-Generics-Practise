import { Table, Td, Tr } from "@chakra-ui/react";

import React from "react";
import { TableData } from "./TableData";
import { UsersApidata } from "../api/UsersDataFromApi";
import { useQuery } from "react-query";

interface TableDataProps extends React.HTMLAttributes<HTMLElement> {}

export const TableSetup = ({}: TableDataProps) => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery("users", () => UsersApidata());
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <Table mt={5}>
      <TableData
        data={users!.data}
        renderItem={(data: UserType) => (
          <>
            <Td key={data.id}>{data.first_name}</Td>
            <Td>{data.last_name}</Td>
            <Td>{data.date_of_birth}</Td>
          </>
        )}
      />
    </Table>
  );
};
