"use client";

import React from "react";

const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "NAME", uid: "name", sortable: true},
  {name: "EMAIL", uid: "email", sortable: true},
  {name: "PHONE", uid: "phone", sortable: true},
  {name: "STATUS", uid: "status", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Deactive", uid: "deactive"},
];

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    status: "active",
    phone: "+92-111-111-111",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    status: "deactive",
    phone: "+92-111-111-111",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    status: "active",
    phone: "+92-111-111-111",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    status: "deactive",
    phone: "+92-111-111-111",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    status: "active",
    phone: "+92-111-111-111",
    email: "kristen.cooper@example.com",
  },
  {
    id: 6,
    name: "Brian Kim",
    email: "brian.kim@example.com",
    status: "active",
    phone: "+92-111-111-111",
  },
  {
    id: 7,
    name: "Michael Hunt",
    status: "deactive",
    phone: "+92-111-111-111",
    email: "michael.hunt@example.com",
  },
  {
    id: 8,
    name: "Samantha Brooks",
    status: "active",
    phone: "+92-111-111-111",
    email: "samantha.brooks@example.com",
  },
  {
    id: 9,
    name: "Frank Harrison",
    status: "deactive",
    phone: "+92-111-111-111",
    email: "frank.harrison@example.com",
  },
  {
    id: 10,
    name: "Emma Adams",
    status: "active",
    phone: "+92-111-111-111",
    email: "emma.adams@example.com",
  },
  {
    id: 11,
    name: "Brandon Stevens",
    status: "active",
    phone: "+92-111-111-111",
    email: "brandon.stevens@example.com",
  },
  {
    id: 12,
    name: "Megan Richards",
    status: "deactive",
    phone: "+92-111-111-111",
    email: "megan.richards@example.com",
  },
  {
    id: 13,
    name: "Oliver Scott",
    status: "active",
    phone: "+92-111-111-111",
    email: "oliver.scott@example.com",
  },
  {
    id: 14,
    name: "Grace Allen",
    status: "active",
    phone: "+92-111-111-111",
    email: "grace.allen@example.com",
  },
  {
    id: 15,
    name: "Noah Carter",
    status: "deactive",
    phone: "+92-111-111-111",
    email: "noah.carter@example.com",
  },
  {
    id: 16,
    name: "Ava Perez",
    status: "active",
    phone: "+92-111-111-111",
    email: "ava.perez@example.com",
  },
  {
    id: 17,
    name: "Liam Johnson",
    status: "active",
    phone: "+92-111-111-111",
    email: "liam.johnson@example.com",
  },
  {
    id: 18,
    name: "Sophia Taylor",
    status: "active",
    phone: "+92-111-111-111",
    email: "sophia.taylor@example.com",
  },
  {
    id: 19,
    name: "Lucas Harris",
    status: "deactive",
    phone: "+92-111-111-111",
    email: "lucas.harris@example.com",
  },
  {
    id: 20,
    name: "Mia Robinson",
    status: "active",
    phone: "+92-111-111-111",
    email: "mia.robinson@example.com",
  },
];

export {columns, users, statusOptions};
