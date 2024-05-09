import { Box } from "@chakra-ui/react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

const columns = [
  {
    accessorKey: "task",
    header: "Task",
    cell: () => {
      "date";
    },
    size: 255,
  },
  // {
  //   accessorKey: "status",
  //   header: "Status",
  //   cell: StatusCell,
  // },
  // {
  //   accessorKey: "due",
  //   header: "Due",
  //   cell: DateCell,
  // },
  // {
  //   accessorKey: "notes",
  //   header: "Notes",
  //   cell: "notes",
  //   size: 300,
  // },
];

const TableEvent = () => {
  const [data, setData] = useState([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <Box>
      <Box className="table" w={table.getTotalSize()}>
        {table.getHeaderGroups().map((headerGroup) => (
          <Box key={headerGroup.id} className="tr">
            {headerGroup.headers.map((header) => (
              <Box key={header.id} className="th" w={header.getSize()}>
                {header.column.columnDef.header}
              </Box>
            ))}
          </Box>
        ))}
        {table.getRowModel().rows.map((row) => (
          <Box key={row.id} className="tr">
            {row.getVisibleCells().map((cell) => (
              <Box key={cell.id} className="td" w={cell.column.getSize()}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TableEvent;
