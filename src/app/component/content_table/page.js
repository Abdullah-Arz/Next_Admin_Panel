// "use client";

// import React,{useState} from "react";

// import {
//   Table,
//   TableHeader,
//   TableColumn,
//   TableBody,
//   TableRow,
//   TableCell,
//   Input,
//   Button,
//   DropdownTrigger,
//   Dropdown,
//   DropdownMenu,
//   DropdownItem,
//   Chip,
//   User,
//   Pagination,
// } from "@nextui-org/react";

// import {PlusIcon} from "../table_child_comp/plusicon";
// import {VerticalDotsIcon} from "../table_child_comp/verticaldotsicon";
// import {SearchIcon} from "../table_child_comp/searchicon";
// import {ChevronDownIcon} from "../table_child_comp/chevrondownicon";
// import {columns, users, statusOptions} from "../table_child_comp/data";
// import {capitalize} from "../table_child_comp/utils";
// import dynamic from "next/dynamic";

// const statusColorMap = {
//   active: "success",
//   deactive: "danger"
// };

// const INITIAL_VISIBLE_COLUMNS = ["Type", "Title", "Content", "Edit", "delete"];

// const page = () => {
//   const [filterValue, setFilterValue] = React.useState("");
//   const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
//   const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
//   const [statusFilter, setStatusFilter] = React.useState("all");
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);
//   const [sortDescriptor, setSortDescriptor] = React.useState({
//     column: "age",
//     direction: "ascending",
//   });
//   const [page, setPage] = React.useState(1);

//   const Handle_Status_Active = (id,data) => {
//     console.log('Activate ---- ',id ,data)
//   }

//   const Handle_Status_Deactive = (id,data) => {
//     console.log('Deactivate ---- ',id ,data)
//   }

//   const pages = Math.ceil(users.length / rowsPerPage);

//   const hasSearchFilter = Boolean(filterValue);

//   const headerColumns = React.useMemo(() => {
//     if (visibleColumns === "all") return columns;

//     return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
//   }, [visibleColumns]);

//   const filteredItems = React.useMemo(() => {
//     let filteredUsers = [...users];

//     if (hasSearchFilter) {
//       filteredUsers = filteredUsers.filter((user) =>
//         user.name.toLowerCase().includes(filterValue.toLowerCase()),
//       );
//     }
//     if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
//       filteredUsers = filteredUsers.filter((user) =>
//         Array.from(statusFilter).includes(user.status),
//       );
//     }

//     return filteredUsers;
//   }, [users, filterValue, statusFilter]);

//   const items = React.useMemo(() => {
//     const start = (page - 1) * rowsPerPage;
//     const end = start + rowsPerPage;

//     return filteredItems.slice(start, end);
//   }, [page, filteredItems, rowsPerPage]);

//   const sortedItems = React.useMemo(() => {
//     return [...items].sort((a, b) => {
//       const first = a[sortDescriptor.column];
//       const second = b[sortDescriptor.column];
//       const cmp = first < second ? -1 : first > second ? 1 : 0;

//       return sortDescriptor.direction === "descending" ? -cmp : cmp;
//     });
//   }, [sortDescriptor, items]);

//   const renderCell = React.useCallback((user, columnKey) => {
//     const cellValue = user[columnKey];

//     switch (columnKey) {
//       case "name":
//         return (
//           <div className="flex flex-col">
//             <p className="text-bold text-small capitalize">{cellValue}</p>
//             {/* <p className="text-bold text-tiny capitalize text-default-500">{user.team}</p> */}
//           </div>
//         );
//       case "email":
//         return (
//           <div className="flex flex-col">
//             <p className="text-bold text-small capitalize">{cellValue}</p>
//             {/* <p className="text-bold text-tiny capitalize text-default-500">{user.team}</p> */}
//           </div>
//         );
//         case "phone":
//         return (
//           <div className="flex flex-col">
//             <p className="text-bold text-small capitalize">{cellValue}</p>
//             {/* <p className="text-bold text-tiny capitalize text-default-500">{user.team}</p> */}
//           </div>
//         );
//       case "status":
//         return (
//           <Chip
//             className="capitalize border-none gap-1 text-default-600"
//             color={statusColorMap[user.status]}
//             size="sm"
//             variant="dot"
//           >
//             {cellValue}
//           </Chip>
//         );
//       case "actions":
//         return (
//           <div className="relative flex justify-end items-center gap-2">
//             <Dropdown className="bg-background border-1 border-default-200">
//               <DropdownTrigger>
//                 <Button isIconOnly radius="full" size="sm" variant="light">
//                   <VerticalDotsIcon className="text-default-400" />
//                 </Button>
//               </DropdownTrigger>
//               <DropdownMenu>
//                 <DropdownItem onClick={()=>{Handle_Status_Active(user.id,user.name)}}>Activate</DropdownItem>
//                 <DropdownItem onClick={()=>{Handle_Status_Deactive(user.id,user.name)}}>Deactivate</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//           </div>
//         );
//       default:
//         return cellValue;
//     }
//   }, []);

//   const onRowsPerPageChange = React.useCallback((e) => {
//     setRowsPerPage(Number(e.target.value));
//     setPage(1);
//   }, []);


//   const onSearchChange = React.useCallback((value) => {
//     if (value) {
//       setFilterValue(value);
//       setPage(1);
//     } else {
//       setFilterValue("");
//     }
//   }, []);

//   const topContent = React.useMemo(() => {
//     return (
//       <div className="flex flex-col gap-4">
//         <div className="flex justify-between gap-3 items-end">
//           <Input
//             isClearable
//             classNames={{
//               base: "w-full sm:max-w-[44%]",
//               inputWrapper: "border-1",
//             }}
//             placeholder="Search by name..."
//             size="sm"
//             startContent={<SearchIcon className="text-default-300" />}
//             value={filterValue}
//             variant="bordered"
//             onClear={() => setFilterValue("")}
//             onValueChange={onSearchChange}
//           />
//           {/* <d00 */}
//         </div>
//         <div className="flex justify-between items-center">
//           <span className="text-default-400 text-small">Total {users.length} users</span>
//           <label className="flex items-center text-default-400 text-small">
//             Rows per page:
//             <select
//               className="bg-transparent outline-none text-default-400 text-small"
//               onChange={onRowsPerPageChange}
//             >
//               <option value="5">5</option>
//               <option value="10">10</option>
//               <option value="15">15</option>
//             </select>
//           </label>
//         </div>
//       </div>
//     );
//   }, [
//     filterValue,
//     statusFilter,
//     visibleColumns,
//     onSearchChange,
//     onRowsPerPageChange,
//     users.length,
//     hasSearchFilter,
//   ]);

//   const bottomContent = React.useMemo(() => {
//     return (
//       <div className="py-2 px-2 flex justify-between items-center">
//         <Pagination
//           showControls
//           classNames={{
//             cursor: "bg-foreground text-background",
//           }}
//           color="default"
//           isDisabled={hasSearchFilter}
//           page={page}
//           total={pages}
//           variant="light"
//           onChange={setPage}
//         />
//         {/* <span className="text-small text-default-400">
//           {selectedKeys === "all"
//             ? "All items selected"
//             : `${selectedKeys.size} of ${items.length} selected`}
//         </span> */}
//       </div>
//     );
//   }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

//   const classNames = React.useMemo(
//     () => ({
//       wrapper: ["max-h-[382px]", "max-w-3xl"],
//       th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
//       td: [
//         // changing the rows border radius
//         // first
//         "group-data-[first=true]:first:before:rounded-none",
//         "group-data-[first=true]:last:before:rounded-none",
//         // middle
//         "group-data-[middle=true]:before:rounded-none",
//         // last
//         "group-data-[last=true]:first:before:rounded-none",
//         "group-data-[last=true]:last:before:rounded-none",
//       ],
//     }),
//     [],
//   );

//   return (
//     <Table
//     className="overflow-x-scroll overflow-y-hidden"
//       isCompact
//       removeWrapper
//       aria-label="Example table with custom cells, pagination and sorting"
//       bottomContent={bottomContent}
//       bottomContentPlacement="outside"
//       checkboxesProps={{
//         classNames: {
//           wrapper: "after:bg-foreground after:text-background text-background",
//         },
//       }}
//       classNames={classNames}
//       // selectedKeys={selectedKeys}
//       // selectionMode="multiple" 
//       sortDescriptor={sortDescriptor}
//       topContent={topContent}
//       topContentPlacement="outside"
//       onSelectionChange={setSelectedKeys}
//       onSortChange={setSortDescriptor}
//     >
//       <TableHeader columns={headerColumns}>
//         {(column) => (
//           <TableColumn
//             key={column.uid}
//             align={column.uid === "actions" ? "center" : "start"}
//             allowsSorting={column.sortable}
//           >
//             {column.name}
//           </TableColumn>
//         )}
//       </TableHeader>
//       <TableBody emptyContent={"No users found"} items={sortedItems}>
//         {(item) => (
//           <TableRow  key={item.id}>
//             {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
//           </TableRow>
//         )}
//       </TableBody>
//     </Table>
//   );
// }

// export default page

import React from 'react'

function page() {
  return (
    <div>page</div>
  )
}

export default page