import { Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

import React from "react";
import { TableData } from "./TableData";
import { UsersApidata } from "../api/UsersDataFromApi";
import { useQuery } from "react-query";

interface TableDataProps extends React.HTMLAttributes<HTMLElement> {}

export const TableSetup = ({}: TableDataProps) => {
  const { data, isLoading, error } = useQuery("users", () => UsersApidata());

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error ...</div>;
  }

  return (
    <Table mt={5}>
      <TableData data={data!.data} />
    </Table>
  );
};
