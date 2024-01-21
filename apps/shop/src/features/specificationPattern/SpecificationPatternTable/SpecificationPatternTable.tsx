import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  MRT_PaginationState,
  MRT_Row,
} from "material-react-table";
import { SpecificationPatternListItemDto } from "../../../types";
import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "../../../routes/hooks/useRouter";
import { Paths } from "../../../constants";
import YesNoDialog from "../../../components/YesNoDialog";
import ErrorDialog from "../../../components/ErrorDialog";
import {} from "../../../api/hooks/SpecificationType";
import {
  useDeleteSpecificationPattern,
  useGetAllSpecificationPatterns,
} from "../../../api/hooks/SpecificationPattern";

export const SpecificationPatternTable = () => {
  const router = useRouter();
  const [selectedRow, setSelectedRow] =
    useState<MRT_Row<SpecificationPatternListItemDto>>();
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [globalFilter, setGlobalFilter] = useState("");
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const {
    data: { data = [], meta } = {},
    isLoading,
    isError,
    isFetching,
    refetch,
  } = useGetAllSpecificationPatterns({
    searchString: globalFilter,
    pageIndex: pagination.pageIndex.toString(),
    pageSize: pagination.pageSize.toString(),
  });
  const { mutateAsync, isPending } = useDeleteSpecificationPattern();

  const columns = useMemo<MRT_ColumnDef<SpecificationPatternListItemDto>[]>(
    () => [
      {
        accessorKey: "id",
        header: "Id",
        size: 150,
      },
      {
        accessorKey: "name",
        header: "Name",
        size: 150,
      },
    ],
    []
  );

  const onDelete = async (row: MRT_Row<SpecificationPatternListItemDto>) => {
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

  const onEdit = (row: MRT_Row<SpecificationPatternListItemDto>) => {
    const id = row.original.id;
    router.push(
      Paths.SpecificationPatterns.EDIT_SPECIFICATION_PATTERNS.replace(":id", id)
    );
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
        title="Do you want to delete this specification pattern?"
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
export default SpecificationPatternTable;
