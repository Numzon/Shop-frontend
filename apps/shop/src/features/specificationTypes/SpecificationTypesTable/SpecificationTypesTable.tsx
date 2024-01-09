import {
  MRT_ColumnDef,
  MRT_PaginationState,
  MRT_Row,
  MaterialReactTable,
} from "material-react-table";
import { SpecificationTypeListDto } from "../../../types";
import { useMemo, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Paths } from "../../../constants";
import { useRouter } from "../../../routes/hooks";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import YesNoDialog from "../../../components/YesNoDialog";
import ErrorDialog from "../../../components/ErrorDialog";
import {
  useDeleteSpecificationType,
  useGetAllSpecificationTypes,
} from "../../../api/hooks/SpecificationType";

export const SpecificationTypesTable = () => {
  const [selectedRow, setSelectedRow] =
    useState<MRT_Row<SpecificationTypeListDto>>();
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [globalFilter, setGlobalFilter] = useState("");
  const router = useRouter();

  const {
    data: { data = [], meta } = {},
    isLoading,
    isError,
    isFetching,
    refetch,
  } = useGetAllSpecificationTypes({
    searchString: globalFilter,
    pageIndex: pagination.pageIndex.toString(),
    pageSize: pagination.pageSize.toString(),
  });

  const { mutateAsync, isPending } = useDeleteSpecificationType();

  const columns = useMemo<MRT_ColumnDef<SpecificationTypeListDto>[]>(
    () => [
      {
        accessorKey: "id",
        header: "Id",
        size: 100,
      },
      {
        accessorKey: "name",
        header: "Name",
        size: 100,
      },
      {
        accessorKey: "subspecificationTypeCount",
        header: "Subtypes count",
        size: 100,
      },
    ],
    []
  );

  const onDelete = async (row: MRT_Row<SpecificationTypeListDto>) => {
    await mutateAsync(
      { id: row.original.id },
      {
        onSuccess: () => {
          refetch();
        },
        onError: (error) => {
          setErrorOpen(true);
        },
      }
    );
  };

  const onEdit = (row: MRT_Row<SpecificationTypeListDto>) => {
    const id = row.original.id;
    router.push(Paths.EDIT_SPECIFICATION_TYPES.replace(":id", id));
  };

  return (
    <>
      <MaterialReactTable
        data={data}
        columns={columns}
        enableGlobalFilter={true}
        enableColumnFilters={false}
        enableSorting={false}
        manualPagination
        manualFiltering
        manualSorting
        rowCount={meta?.total ?? 0}
        onPaginationChange={setPagination}
        onGlobalFilterChange={setGlobalFilter}
        state={{
          isLoading,
          showProgressBars: isFetching,
          showAlertBanner: isError,
          pagination,
          globalFilter,
        }}
        enableRowActions
        renderRowActions={({ row }) => (
          <Box>
            <IconButton color="info" onClick={() => onEdit(row)}>
              <EditIcon />
            </IconButton>
            <IconButton
              color="error"
              onClick={() => {
                setSelectedRow(row);
                setOpen(true);
              }}
              disabled={isPending}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        )}
      />
      <YesNoDialog
        title="Do you want to delete this specification type?"
        open={open}
        onYes={() => {
          if (selectedRow) {
            onDelete(selectedRow);
          }
          setOpen(false);
        }}
        onNo={() => {
          setOpen(false);
        }}
      />
      <ErrorDialog
        open={errorOpen}
        onOk={() => setErrorOpen(false)}
        title="Error"
        description="Something went wrong!"
      />
    </>
  );
};

export default SpecificationTypesTable;
