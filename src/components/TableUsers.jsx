import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeaderCell,
  TableRow,
  TableCell,
  Badge,
} from "@tremor/react";

export const MyTable = () => {
    // Datos de ejemplo para la tabla
const data = [
    { id: 1, name: "John Doe", status: "Active", role: "Admin" },
    { id: 2, name: "Jane Smith", status: "Inactive", role: "User" },
    { id: 3, name: "Michael Johnson", status: "Pending", role: "Moderator" },
  ];
  
  // Mapeo del estado a colores de los badges
  const statusColorMap = {
    Active: "green",
    Inactive: "red",
    Pending: "yellow",
  };
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>ID</TableHeaderCell>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((person) => (
          <TableRow key={person.id}>
            <TableCell>{person.id}</TableCell>
            <TableCell>{person.name}</TableCell>
            <TableCell>
              <Badge color={statusColorMap[person.status]}>
                {person.status}
              </Badge>
            </TableCell>
            <TableCell>{person.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

