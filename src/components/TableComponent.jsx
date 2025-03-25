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
import ModalPayments from "./ModalPayments";
const TableComponent = () => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await api("usuarios");
      console.log(data);
      if (data.status == 200) {
        setUsers(data.data.data);
      }
    };

    fetchData();
  }, []);

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
          {users && users.length > 0
            ? users.map((usuario) => (
                <TableRow key={usuario.id}>
                  <TableCell>{usuario.name}</TableCell>
                  <TableCell>
                    <Text>{usuario.rol}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{usuario.email}</Text>
                  </TableCell>
                  <TableCell>
                    <Badge color="emerald" icon={StopCircleIcon}>
                      {usuario.subscriptions.length > 0
                        ? usuario.subscriptions[0].status
                        : "No cuenta con suscripcion"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="inline-flex gap-2 align-middle justify-center items-center">
                      <ModalSee user={usuario} />
                      <ModalEdit user={usuario} />
                      <ModalPayments user={usuario} />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </Card>
  );
};

export default TableComponent;
