"use client";

import React from "react";

const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "name", uid: "name", sortable: true },
  { name: "TITLE", uid: "title", sortable: true },
  { name: "CONTENT", uid: "content", sortable: true },
  //   {name: "STATUS", uid: "status", sortable: true},
  { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Deactive", uid: "deactive" },
];

const users = [
  {
    id: 1,
    name: "Andy Reichert",
    status: "active",
    title: "+92-111-111-111",
    content: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Abd Lang",
    status: "deactive",
    title: "+92-111-111-111",
    content: "tony.reichert@example.com",
  },
  {
    id: 3,
    name: "Abd Lang",
    status: "deactive",
    title: "+92-111-111-111",
    content: "tony.reichert@example.com",
  },
  {
    id: 4,
    name: "Abd Lang",
    status: "deactive",
    title: "+92-111-111-111",
    content: "tony.reichert@example.com",
  },
  {
    id: 5,
    name: "Abd Lang",
    status: "active",
    title: "+92-111-111-111",
    content: "tony.reichert@example.com",
  },
  {
    id: 6,
    name: "Abd Lang",
    status: "active",
    title: "+92-111-111-111",
    content: "tony.reichert@example.com",
  },
  {
    id: 7,
    name: "Abd Lang",
    status: "active",
    title: "+92-111-111-111",
    content: "tony.reichert@example.com",
  },
  {
    id: 8,
    name: "Abd Lang",
    status: "active",
    title: "+92-111-111-111",
    content: "tony.reichert@example.com",
  },
  {
    id: 9,
    name: "Abd Lang",
    status: "active",
    title: "+92-111-111-111",
    content: "tony.reichert@example.com",
  },
  {
    id: 10,
    name: "Abd Lang",
    status: "active",
    title: "+92-111-111-111",
    content: "tony.reichert@example.com",
  },
  {
    id: 11,
    name: "Abd Lang",
    status: "active",
    title: "+92-111-111-111",
    content: "tony.reichert@example.com",
  },
  {
    id: 12,
    name: "Abd Lang",
    status: "active",
    title: "+92-111-111-111",
    content: "tony.reichert@example.com",
  },
  {
    id: 13,
    name: "Abd Lang",
    status: "active",
    title: "+92-111-111-111",
    content: "tony.reichert@example.com",
  },
  {
    id: 14,
    name: "Abd Lang",
    status: "active",
    title: "+92-111-111-111",
    content: "tony.reichert@example.com",
  },
];

export { columns, users, statusOptions };
