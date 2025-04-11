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
  Button,
} from "@tremor/react";
import ModalEdit from "./ModalEdit";
import ModalSee from "./ModalSee";
import { useGetUsersQuery } from "../store/api/adminApi";
import { StopCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const TableComponent = () => {
  const { data, isLoading, error } = useGetUsersQuery();
  const users = data || [];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calcular el índice de los usuarios a mostrar en la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedUsers = users.slice(startIndex, endIndex);

  // Calcular el total de páginas
  const totalPages = Math.ceil(users.length / itemsPerPage);

  return (
    <Card className="mt-4">
      <Title>Listado de Usuarios</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Nombre</TableHeaderCell>
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
            paginatedUsers.map((usuario) => (
              <TableRow key={usuario.id}>
                <TableCell>{usuario.name}</TableCell>
                <TableCell>
                  <Text>{usuario.email}</Text>
                </TableCell>
                <TableCell>
                  <Badge
                    color={usuario.subscription ? "emerald" : "red"}
                    icon={StopCircleIcon}
                  >
                    {usuario.subscription
                      ? usuario.subscription.status
                      : "No cuenta con suscripción"}
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

      {/* Paginación */}
      {users.length > itemsPerPage && (
        <div className="flex justify-center items-center mt-4 gap-2">
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            variant="light"
          >
            Anterior
          </Button>
          <span className="text-gray-700">
            Página {currentPage} de {totalPages}
          </span>
          <Button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            variant="light"
          >
            Siguiente
          </Button>
        </div>
      )}
    </Card>
  );
};

export default TableComponent;
