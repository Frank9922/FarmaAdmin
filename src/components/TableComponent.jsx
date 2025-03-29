import React, { useEffect, useState } from "react";

import {
  StopCircleIcon,
  EyeIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";
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
import { api } from "../api/api";
import ModalEdit from "./ModalEdit";
import ModalSee from "./ModalSee";
import { useGetUsersQuery } from "../store/api/adminApi";

const TableComponent = () => {
  
  const { data, isLoading, error } = useGetUsersQuery();

  const users = data?.data || [];

  return (
    <Card className="mt-4">
      <Title>Listado de Usuarios</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Nombre</TableHeaderCell>
            <TableHeaderCell>Profesión</TableHeaderCell>
            <TableHeaderCell>Correo</TableHeaderCell>
            <TableHeaderCell>Subscripción</TableHeaderCell>
            <TableHeaderCell>Acciones</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-4 text-blue-600">
                Cargando usuarios...
              </TableCell>
            </TableRow>
          ) : error ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-4 text-red-600">
                Error al cargar usuarios. Intenta nuevamente.
              </TableCell>
            </TableRow>
          ) : users.length > 0 ? (
            users.map((usuario) => (
              <TableRow key={usuario.id}>
                <TableCell>{usuario.name}</TableCell>
                <TableCell>
                  <Text>{usuario.rol}</Text>
                </TableCell>
                <TableCell>
                  <Text>{usuario.email}</Text>
                </TableCell>
                <TableCell>
                  <Badge color={usuario.subscription ? "emerald" : "red"} icon={StopCircleIcon}>
                    {usuario.subscription ? usuario.subscription.status : "No cuenta con suscripción"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="inline-flex gap-2 align-middle justify-center items-center">
                    <ModalSee user={usuario} />
                    <ModalEdit user={usuario} />
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-4 text-gray-500">
                No hay usuarios registrados.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Card>
  );
};

export default TableComponent;
