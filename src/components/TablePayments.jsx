import React from "react";
import ModalPayments from "./ModalPayments";
import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";

const data = [
  {
    name: "Viola Amherd",
    method: "Efectivo",
    email: "correo@example.com",
    date: "2025-02-26",
  },
  {
    name: "Simonetta Sommaruga",
    method: "Transferencia",
    email: "correo@example.com",
    date: "2024-12-26",
  },
];
const TablePayments = () => {
  return (
    <>
      <Card className="mt-4">
        <div className="flex justify-between items-center mb-4">
          <Title>Listado de Pagos</Title>
          <ModalPayments></ModalPayments>
        </div>

        <Table className="mt-5">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Nombre</TableHeaderCell>
              <TableHeaderCell>Correo</TableHeaderCell>
              <TableHeaderCell>Metodo</TableHeaderCell>
              <TableHeaderCell>Fecha</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((data) => (
              <TableRow key={data.name}>
                <TableCell>{data.name}</TableCell>
                <TableCell>
                  <Text>{data.email}</Text>
                </TableCell>
                <TableCell>
                  <Text>{data.method}</Text>
                </TableCell>
                <TableCell>
                  <Text>{data.date}</Text>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  );
};
export default TablePayments;
