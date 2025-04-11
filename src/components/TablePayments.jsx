import { useGetPaymentsQuery } from "../store/api/adminApi";
import ModalPayments from "./ModalPayments";
import {
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
import { ModalEditPayment } from "./ModalEditPayment";
import { ModalDestroyPayment } from "./ModalDestroyPayment";

const TablePayments = () => {
  const { data, isLoading, isError: error } = useGetPaymentsQuery();

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
              <TableHeaderCell>Acciones</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center py-4 text-blue-600"
                >
                  Cargando usuarios...
                </TableCell>
              </TableRow>
            ) : error ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center py-4 text-red-600"
                >
                  Error al cargar usuarios. Intenta nuevamente.
                </TableCell>
              </TableRow>
            ) : data.payments.length > 0 ? (
              data?.payments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>{payment.subscription.user.name}</TableCell>

                  <TableCell>{payment.subscription.user.email}</TableCell>
                  <TableCell>
                    <Text>{payment.payment_method}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{payment.created_at}</Text>
                  </TableCell>
                  <TableCell>
                    <div className="inline-flex gap-2 align-middle justify-center items-center">
                      <ModalEditPayment payment={payment} />
                      {}
                      <ModalDestroyPayment payment={payment} />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center py-4 text-gray-500"
                >
                  No hay usuarios registrados.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
    </>
  );
};
export default TablePayments;
