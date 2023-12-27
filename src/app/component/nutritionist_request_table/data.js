"use client";

import React from "react";

const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "Full Name", uid: "full_name", sortable: true},
  {name: "Email Address", uid: "email", sortable: true},
  {name: "Category", uid: "category", sortable: true},
  {name: "Language", uid: "language", sortable: true},
  {name: "Skills", uid: "skills", sortable: true},
  {name: "Phone Number", uid: "phone_number", sortable: true},
  {name: "Price", uid: "price"},
  {name: "Website", uid: "website"},
  {name: "License Details", uid: "license"},
  {name: "About", uid: "about"},
  {name: "Experience", uid: "experience"},
  {name: "STATUS", uid: "is_active"},
  {name: "Action", uid: "actions"},
  {name: "", uid: "detail"},
];

const statusOptions = [
  {name: "Active", uid: "true"},
  {name: "Deactive", uid: "false"},
];

const users = [
  {
    id: 1,
    full_name: "Tony Reichert",
    status: "active",
    phone_number: "+92-111-111-111",
    email: "tony.reichert@example.com",
    category: '',
    language: "English, German, French",
    skills: "cricket, reading, writing, music",
    price: "1500",
    website: "www.abc.com",
    license: "XYZ-1523",
    about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    experience: "5 years"
  },
  {
    id: 2,
    full_name: "Michal James",
    status: "active",
    phone_number: "+92-111-111-111",
    email: "James@example.com",
    category: '',
    language: "English, German, French",
    skills: "cricket, reading, writing, music",
    price: "1500",
    website: "www.abc.com",
    license: "PZZ-0323",
    about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    experience: "5 years"
  },
  {
    id: 3,
    full_name: "Starc John",
    status: "active",
    phone_number: "+92-111-111-111",
    email: "Starc11@example.com",
    category: '',
    language: "English, German, French",
    skills: "cricket, reading, writing, music",
    price: "1500",
    website: "www.abc.com",
    license: "JHS-1520",
    about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    experience: "5 years"
  },
];

export {columns, users, statusOptions};
