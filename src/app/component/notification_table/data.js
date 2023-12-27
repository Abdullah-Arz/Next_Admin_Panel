"use client";

import React from "react";

const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "TITLE", uid: "title", sortable: true},
  {name: "NOTIFICATION", uid: "notification", sortable: true},
];

const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Deactive", uid: "deactive"},
];

const users = [
  {
    id: 1,
    title: "Tony Reichert",
    notification: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    id: 2,
    title: "Zoey Lang",
    notification: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    id: 3,
    title: "Jane Fisher",
    notification: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    id: 4,
    title: "William Howard",
    notification: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  }
];

export {columns, users, statusOptions};
