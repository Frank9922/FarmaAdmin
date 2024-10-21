import React from "react";
import { StopCircleIcon } from "@heroicons/react/24/solid";
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
    Nombre: "Viola Amherd",
    profesion: "Estudiante",
    correo: "correo@example.com",
    status: "active",
  },
  {
    Nombre: "Simonetta Sommaruga",
    profesion: "Docente",
    correo: "correo@example.com",
    status: "active",
  },
  {
    Nombre: "Alain Berset",
    profesion: "Personal de Salud",
    correo: "correo@example.com",
    status: "active",
  },
  {
    Nombre: "Ignazio Cassis",
    profesion: "Personal de Salud",
    correo: "correo@example.com",
    status: "active",
  },
  {
    Nombre: "Karin Keller-Sutter",
    profesion: "Estudiante",
    correo: "correo@example.com",
    status: "active",
  },
  {
    Nombre: "Guy Parmelin",
    profesion: "Personal de Salud",
    correo: "correo@example.com",
    status: "active",
  },
  {
    Nombre: "Elisabeth Baume-Schneider",
    profesion: "Docente",
    correo: "correo@example.com",
    status: "active",
  },
];

const TableComponent = () => {
  return (
    <Card className="mt-4">
      <Title>Listado de Usuarios activos</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Nombre</TableHeaderCell>
            <TableHeaderCell>Profesión</TableHeaderCell>
            <TableHeaderCell>Correo</TableHeaderCell>
            <TableHeaderCell>Estado</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.Nombre}>
              <TableCell>{item.Nombre}</TableCell>
              <TableCell>
                <Text>{item.profesion}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.correo}</Text>
              </TableCell>
              <TableCell>
                <Badge color="emerald" icon={StopCircleIcon}>
                  {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default TableComponent;
