import { Button, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSortableData } from "../hooks/tableSort";

interface TableDataProps<T> {
  data: T[];
}

export const TableData = <T extends {}>({ data }: TableDataProps<T>) => {
  const { items, requestSort, sortConfig } = useSortableData<T>(data as T[]);

  const getClassNamesFor = (name: string) => {
    if (!sortConfig) {
      return;
    }
    if (sortConfig.key === name) {
      switch (sortConfig.direction) {
        case "ascending":
          return (
            <FontAwesomeIcon style={{ marginLeft: "12px" }} icon={faAngleUp} />
          );
        case "descending":
          return (
            <FontAwesomeIcon
              style={{ marginLeft: "12px" }}
              icon={faAngleDown}
            />
          );
      }
    }
  };

  return (
    <>
      <Thead>
        <Tr>
          <Th>
            <Button
              bg="transparent"
              _hover={{ bg: "transparent" }}
              _selected={{ bg: "transparent" }}
              onClick={() => requestSort("first_name")}
            >
              First name
              {getClassNamesFor("first_name")}
            </Button>
          </Th>
          <Th>
            <Button
              bg="transparent"
              _hover={{ bg: "transparent" }}
              _selected={{ bg: "transparent" }}
              onClick={() => requestSort("last_name")}
            >
              Last name
              {getClassNamesFor("last_name")}
            </Button>
          </Th>
          <Th>
            <Button
              bg="transparent"
              _hover={{ bg: "transparent" }}
              _selected={{ bg: "transparent" }}
              onClick={() => requestSort("date_of_birth")}
            >
              Date
              {getClassNamesFor("date_of_birth")}
            </Button>
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {items.map((e: any) => (
          <Tr>
            <Td>{e.first_name}</Td>
            <Td>{e.last_name}</Td>
            <Td>{e.date_of_birth}</Td>
          </Tr>
        ))}
      </Tbody>
    </>
  );
};
