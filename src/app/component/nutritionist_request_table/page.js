"use client";

import React, { useMemo } from "react";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Pagination,
  useDisclosure,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { SearchIcon } from "./searchicon";
import { columns, users, statusOptions } from "./data";
import axios from "axios";
import { toast } from "react-toastify";
import { useMyContext } from "@/app/context";
import Switch from '../switch/page'
import Nutritionlist_detailmodal from '../nutritionlist_detailmodal/page'
import { VerticalDotsIcon } from "./verticaldotsicon";

const statusColorMap = {
  true: "success",
  false: "danger",
};

// const INITIAL_VISIBLE_COLUMNS = ["name", "email", "phone_number", "active", "actions"];
const INITIAL_VISIBLE_COLUMNS = ["full_name", "email", "phone_number", "license", "actions"];

export default function page({data}) {

  const {static_driver, update_Driver } = useMyContext();
  const { isOpen, onOpen, onClose , onOpenChange } = useDisclosure();

  // console.log('Driver table 1 -----', data)
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "age",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);
  
  let api = localStorage.getItem('api');
  let token = sessionStorage.getItem("Token");

  const config = {
    headers: { Authorization: `Bearer ${token}` }
};

  const Handle_Active = (id, name,active) => {
    
    console.log('Active ----- ',id, name)
    
    axios.patch(`${api}/user_management/activate_driver/${id}/`,{},config)
    .then((res)=>{
      console.log('Driver User Active res ----- ', res.data)
      res.data.status === true ? (
        active === true ? (
          toast.success(`${name} Deactivate Successfully`)
        ) : (
          toast.success(`${name} Activate Successfully`)
        ),
        update_Driver(static_driver+1)
      ) : (
        toast.error('Something Went Wrong')
      )
    }).catch((err)=>{
      console.log('Driver User Active err ----- ', err)
      toast.error('Something Went Wrong')
    })
  }

  const Handle_Post = (id) => {
    console.log("Post ----- ", id);
    // view_PostId(id)
    // setPost_Id(id);
    onOpen();
  };

  const Handle_Accept = () => {

  }

  const Handle_Reject = () => {
    
  }

  const pages = Math.ceil(data?.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...data];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.first_name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.active)
      );
    }

    return filteredUsers;
  }, [data, filterValue, statusFilter]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-medium capitalize">{cellValue}</p>
            {/* <p className="text-bold text-tiny capitalize text-default-500">{user.team}</p> */}
          </div>
        );
      case "email":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-medium capitalize">{cellValue}</p>
            {/* <p className="text-bold text-tiny capitalize text-default-500">{user.team}</p> */}
          </div>
        );
      case "phone":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-medium capitalize">{cellValue}</p>
            {/* <p className="text-bold text-tiny capitalize text-default-500">{user.team}</p> */}
          </div>
        );
   
      // case "actions":
      //   return (
      //     <div className="relative flex justify-start  items-center gap-2">
      //       <Switch 
      //       id={user.pk}
      //       name={user.first_name}
      //       active={user.is_active}
      //       status={user.role}
      //       />
           
      //     </div>
      //   );
        case "actions":
        return (
          <div className="relative flex justify-center items-center gap-2">
            <Dropdown className="bg-[#0e0f12] text-[#ffffffa3] border-0 border-default-200">
              <DropdownTrigger>
                <Button isIconOnly radius="full" size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-400" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu >
                <DropdownItem
                className="hover:bg-[#00000040]"
                  onClick={() => {
                    // Handle_Edit(user.id, user.type, user.title, user.description);
                    Handle_Post();
                  }}
                >
                  Show Details
                </DropdownItem>
                <DropdownItem
                className="hover:bg-[#00000040]"
                  onClick={() => {
                    Handle_Accept(user.id,user.type);
                  }}
                >
                  Accept
                </DropdownItem>
                <DropdownItem
                className="hover:bg-[#00000040]"
                  onClick={() => {
                    Handle_Reject(user.id,user.type);
                  }}
                >
                  Reject
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          // <div className="flex flex-col cursor-pointer ">
          //   <p className="text-bold text-medium capitalize hover:text-[#00aeff]" onClick={() => {Handle_Post()}}>View Details</p>
          //   {/* <p className="text-bold text-tiny capitalize text-default-500">{user.team}</p> */}
          // </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            classNames={{
              base: "w-full sm:max-w-[44%] border-1 border-[#ffffffa3] rounded",
              inputWrapper: "border-1 border-[#ffffffa3] rounded",
            }}
            underlined
            placeholder="Search by name..."
            size="sm"
            startContent={<SearchIcon className="text-default-300" />}
            value={filterValue}
            variant="bordered"
            onClear={() => setFilterValue("")}
            onValueChange={onSearchChange}
          />
          {/* <d00 */}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {data.length} users
          </span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    data.length,
    hasSearchFilter,
  ]);
  const bottomContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          showControls
          classNames={{
            cursor: "bg-foreground text-background text-[#ffffffa3]",
            item : "text-[#ffffffa3] hover:text-black",
            next : "text-[#ffffffa3] hover:text-black",
            prev : "text-[#ffffffa3] hover:text-black"
          }}
          color="#ffffffa3"
          isDisabled={hasSearchFilter}
          page={page}
          total={pages}
          variant="light"
          onChange={setPage}
        />
        {/* <span className="text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${items.length} selected`}
        </span> */}
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  const classNames = useMemo(
    () => ({
      wrapper: ["max-h-[382px]", "max-w-3xl"],
      th: ["bg-transparent", "text-default-500", "border-b","border-black	", "border-divider"],
      td: [
        // changing the rows border radius
        // first

        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        // middle
        "group-data-[middle=true]:before:rounded-none",
        // last
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
    }),
    []
  );

  return (
    <>
    <Nutritionlist_detailmodal
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              onOpen={onOpen}
              onClose={onClose}
              type='request'
              // post_id={post_id}
             
           />
    <Table
      className="bg-bgColor text-[#ffffffa3] border-none overflow-x-scroll overflow-y-hidden xl:overflow-x-auto md:overflow-x-auto"
      // isCompact
      removeWrapper
      aria-label="Example table with custom cells, pagination and sorting"
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      checkboxesProps={{
        classNames: {
          wrapper: "after:bg-foreground after:text-background text-background",
        },
      }}
      classNames={classNames}
      selectedKeys={selectedKeys}
      // selectionMode="single"
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
    >
      <TableHeader className="bg-[#0E0F12]" columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
            className="text-[#ffffffa3] bg-[#0E0F12]"
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No users found"} items={sortedItems}>
        {(item, index) => (
          <TableRow  className="hover:bg-[#00000040] hover:opacity-100 hover:text-[#ffffffa3]"
          key={item.pk}
          >
            {(columnKey) => (
              <TableCell className="border-b-1 border-textColor1 hover:text-[#ffffffa3]">{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
    </>
  );
}
