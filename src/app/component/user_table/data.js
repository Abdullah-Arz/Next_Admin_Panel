"use client";

import React from "react";

const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "First Name", uid: "first_name", sortable: true},
  {name: "Email Address", uid: "email", sortable: true},
  {name: "Phone Number", uid: "phone_number", sortable: true},
  {name: "Gender", uid: "gender", sortable: true},
  {name: "STATUS", uid: "is_active", sortable: true},
  {name: "Deactive/Active", uid: "actions"},
  {name: "Details", uid: "detail"},
];

const statusOptions = [
  {name: "Active", uid: "true"},
  {name: "Deactive", uid: "false"},
];

const users = [
  {
    id: 1,
    first_name: "Tony Reichert",
    status: "active",
    phone_number: "+92-111-111-111",
    email: "tony.reichert@example.com",
    gender: "Male"
  },
  {
    id: 1,
    first_name: "Tony Reichert",
    status: "active",
    phone_number: "+92-111-111-111",
    email: "tony.reichert@example.com",
    gender: "Male"
  },
  {
    id: 1,
    first_name: "Tony Reichert",
    status: "active",
    phone_number: "+92-111-111-111",
    email: "tony.reichert@example.com",
    gender: "Male"
  }
];

export {columns, users, statusOptions};
