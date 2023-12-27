"use client";

import React from "react";

const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "TYPE", uid: "type", sortable: true},
  {name: "TITLE", uid: "title", sortable: true},
  {name: "DESCRIPTION", uid: "description", sortable: true},
  // {name: "STATUS", uid: "status", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
  {name: "Active", uid: "true"},
  {name: "Deactive", uid: "false"},
];

const users = [
  {
    id: 1,
    title: "Tony Reichert",
    type: "Privacy Policy",
    content: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    id: 2,
    title: "Zoey Lang",
    type: "Privacy Policy",
    content: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    id: 3,
    title: "Jane Fisher",
    type: "Privacy Policy",
    content: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    id: 4,
    title: "William Howard",
    type: "Terms And Conditions",
    content: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  }
];

export {columns, users, statusOptions};
